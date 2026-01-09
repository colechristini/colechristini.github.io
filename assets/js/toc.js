/**
 * Minimalist Table of Contents Generator
 * Scans h2/h3 headings, builds nested TOC list, enables smooth scroll on click
 */
document.addEventListener('DOMContentLoaded', function() {
  const tocNav = document.querySelector('.toc-list');
  const contentMain = document.querySelector('.post-content');
  if (!tocNav || !contentMain) return;

  const headings = Array.from(contentMain.querySelectorAll('h2, h3'));
  if (headings.length === 0) return;

  const tocRoot = document.createElement('ul');
  const stack = [{level: 1, list: tocRoot}]; // start at level 1 so h2 > 1

  function ensureId(el) {
    if (!el.id || el.id.trim() === '') {
      el.id = el.textContent
        .toLowerCase()
        .trim()
          .replace(/[^\x00-\x7F]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    }
    return el.id;
  }

  headings.forEach(h => {
    const level = parseInt(h.tagName.slice(1), 10); // 2 or 3
    const text = h.textContent.trim();
    const id = ensureId(h);

    while (stack.length && stack[stack.length-1].level >= level) stack.pop();
    const parent = stack[stack.length-1] || stack[0];

    const li = document.createElement('li');
    li.className = `lvl-${level}`;
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = text;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
      document.querySelectorAll('.toc-list a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      history.replaceState(null, null, `#${id}`);
    });

    li.appendChild(a);
    parent.list.appendChild(li);

    // prepare nested list container for deeper levels
    const nested = document.createElement('ul');
    li.appendChild(nested);
    stack.push({level, list: nested});
  });

  tocNav.appendChild(tocRoot);

  // IntersectionObserver to highlight active heading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.target.id) return;
      const link = tocNav.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        tocNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }, {root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0});

  headings.forEach(h => observer.observe(h));
});
