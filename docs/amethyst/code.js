// unreasonably silly

// maps selectors to classes, duh
const classMap = {
  'h1,h2,h3,h4,h5,h6': 'centered-label',
  'p': 'centered-text',
  'ul,ol': 'generalCenter',
  'blockquote': 'blockquote-style',
  'pre': 'code-block',
  'pre > code': 'inline-code',
  'img': 'responsive-img',
  'table': 'styled-table'
};

function injectClasses() {
  const contentEl = document.getElementById('content');
  for (const selector in classMap) {
    contentEl.querySelectorAll(selector).forEach(el => {
      el.classList.add(classMap[selector]);
    });
  }
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
