let allProjects = [];
let activeTypeFilter = null;

async function loadProjects() {
  const grid = document.getElementById("card-grid");
  const filterTags = document.getElementById("filter-tags");

  try {
    const manifestRes = await fetch("projectCards/index.json");
    if (!manifestRes.ok) throw new Error("Manifest fetch failed");
    const filenames = await manifestRes.json();

    const projects = await Promise.all(
      filenames.map(async (filename) => {
        const res = await fetch(`projectCards/${filename}`);
        if (!res.ok) throw new Error(`Failed to load ${filename}`);
        return res.json();
      })
    );

    allProjects = projects;
    renderFilterTags(projects);
    renderCards(projects);
  } catch (err) {
    console.error("Failed to load projects:", err);
    filterTags.innerHTML = "";
    grid.innerHTML = `
      <div class="load-error">
        <p>Failed to load projects.</p>
        <button class="card-btn" id="retry-btn">Retry</button>
      </div>
    `;
    document.getElementById("retry-btn").addEventListener("click", loadProjects);
  }
}

function renderFilterTags(projects) {
  const container = document.getElementById("filter-tags");
  const types = [...new Set(projects.map((p) => p.type))];

  container.innerHTML = "";

  types.forEach((type) => {
    const btn = document.createElement("button");
    btn.className = "filter-tag";
    btn.textContent = type;
    btn.dataset.type = type;
    btn.addEventListener("click", () => {
      activeTypeFilter = activeTypeFilter === type ? null : type;
      updateFilterTagStyles();
      applyFilters();
    });
    container.appendChild(btn);
  });
}

function updateFilterTagStyles() {
  document.querySelectorAll(".filter-tag").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.type === activeTypeFilter);
  });
}

function renderCards(projects) {
  const grid = document.getElementById("card-grid");
  grid.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.type = project.type;
    card.dataset.title = project.title.toLowerCase();
    card.dataset.description = project.description.toLowerCase();
    card.dataset.stack = project.stack.join(" ").toLowerCase();
    card.dataset.status = project.status;
    card.dataset.logoOverride = project.logoOverride || "SC";
    card.dataset.buttonGoesTo = project.buttonGoesTo || "#";

    const titleText = project.additionalData
      ? `${project.title}: ${project.additionalData}`
      : project.title;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-title">${titleText}</span>
        <div class="card-logo ${project.accent}">${project.logoOverride}</div>
      </div>
      <p class="card-description">${project.description}</p>
      <a href="${project.buttonGoesTo}" class="card-btn-href">View Project</a>
    `;

    grid.appendChild(card);
  });
}

function applyFilters() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const matchesText =
      !query ||
      card.dataset.title.includes(query) ||
      card.dataset.description.includes(query) ||
      card.dataset.stack.includes(query);

    const matchesType = !activeTypeFilter || card.dataset.type === activeTypeFilter;

    card.classList.toggle("hidden", !(matchesText && matchesType));
  });
}

document.getElementById("search-input").addEventListener("input", applyFilters);

loadProjects();