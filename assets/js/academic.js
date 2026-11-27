(() => {
  const toggle = document.querySelector('.theme-toggle');
  function updateLabel() {
    const dark = document.documentElement.dataset.theme === 'dark';
    toggle?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    toggle?.setAttribute('title', `Switch to ${dark ? 'light' : 'dark'} theme`);
  }
  updateLabel();
  toggle?.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('academic-theme', theme); } catch (_) {}
    updateLabel();
  });
  const input = document.getElementById('publication-search');
  if (!input) return;
  const list = document.querySelector('.pub-list');
  const entries = [...list.querySelectorAll('.publication')];
  const count = document.getElementById('publication-count');
  const empty = document.getElementById('publication-empty');
  function filter() {
    const terms = input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let found = 0;
    entries.forEach(entry => {
      const text = entry.textContent.toLocaleLowerCase();
      const matches = terms.every(term => text.includes(term));
      entry.closest('li').hidden = !matches;
      found += Number(matches);
    });
    [...list.children].forEach(node => {
      if (/^H[234]$/.test(node.tagName)) {
        let sibling = node.nextElementSibling;
        while (sibling && sibling.tagName !== 'OL' && !/^H[234]$/.test(sibling.tagName)) sibling = sibling.nextElementSibling;
        if (sibling?.tagName === 'OL') node.hidden = ![...sibling.children].some(li => !li.hidden);
      }
    });
    count.textContent = `${found} ${found === 1 ? 'publication' : 'publications'}`;
    empty.hidden = found > 0;
  }
  input.addEventListener('input', filter);
  document.getElementById('publication-clear')?.addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
  filter();
})();
