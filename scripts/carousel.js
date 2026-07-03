/**
 * Initializes a carousel from a manifest.json file listing image filenames.
 * Usage: <div class="carousel" data-carousel-path="assets/carousel_001"></div>
 * The folder must contain a manifest.json array of filenames alongside the images.
 */
async function initCarousel(carouselEl) {
  const basePath = carouselEl.dataset.carouselPath;
  if (!basePath) {
    console.error("Carousel missing data-carousel-path attribute:", carouselEl);
    return;
  }

  let filenames;
  try {
    const res = await fetch(`${basePath}/manifest.json`);
    if (!res.ok) throw new Error(`Manifest fetch failed for ${basePath}`);
    filenames = await res.json();
  } catch (err) {
    console.error("Failed to load carousel manifest:", err);
    carouselEl.innerHTML = `<p style="padding: 20px; color: var(--text-secondary); font-size: 13px;">Failed to load media.</p>`;
    return;
  }

  if (!filenames.length) return;

  const track = document.createElement("div");
  track.className = "carousel-track";

  filenames.forEach((filename) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    const img = document.createElement("img");
    img.src = `${basePath}/${filename}`;
    img.alt = "";
    slide.appendChild(img);
    track.appendChild(slide);
  });

  carouselEl.appendChild(track);

  // Indicators live outside the bordered carousel box, as a sibling element
  const indicators = document.createElement("div");
  indicators.className = "carousel-indicators";

  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    indicators.querySelectorAll(".carousel-indicator").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }

  filenames.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.className = "carousel-indicator";
    btn.textContent = index + 1;
    btn.addEventListener("click", () => goToSlide(index));
    indicators.appendChild(btn);
  });

  carouselEl.insertAdjacentElement("afterend", indicators);
  goToSlide(0);
}

document.querySelectorAll(".carousel").forEach(initCarousel);