// unreasonably silly
function injectClasses() {
  const contentEl = document.getElementById('content');
  contentEl.querySelectorAll('h1, h2').forEach(el =>
    el.classList.add('centered-label')
  );
  contentEl.querySelectorAll('p').forEach(el =>
    el.classList.add('centered-text')
  );
  contentEl.querySelectorAll('ul').forEach(el =>
    el.classList.add('generalCenter')
  );
}

document.querySelectorAll('a[data-page]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    fetch(page)
      .then(res => res.text())
      .then(md => {
        const html = marked.parse(md);
        const cleanHtml = DOMPurify.sanitize(html);
        // sanitize
        const contentEl = document.getElementById('content');
        contentEl.innerHTML = cleanHtml;
        injectClasses();
      })
      .catch(err => {
        document.getElementById('content').innerHTML = "<p>Error loading content. You can try reloading the page by clicking the same link.</p>";
        injectClasses();
      });
  });
});

function loadContent(file) {
  fetch('loadpages/' + file)
    .then(res => res.text())
    .then(markdown => {
      const html = marked.parse(markdown);
      const cleanHtml = DOMPurify.sanitize(html);
      // sanitize, again
      const contentEl = document.getElementById('content');
      contentEl.innerHTML = cleanHtml;
      injectClasses();
    })
    .catch(() => {
      document.getElementById('content').innerHTML = "<p>Error loading content. You can try reloading the page by clicking the same link.</p>";
      injectClasses();
    });
}

// load default page
loadContent('default.md');
