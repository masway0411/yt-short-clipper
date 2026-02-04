window.Components = window.Components || {};

window.Components.Header = function () {
  const header = document.createElement('header');
  header.className = 'header';

  const brand = document.createElement('div');
  brand.className = 'brand';

  const icon = document.createElement('img');
  icon.className = 'brand-icon';
  icon.alt = 'icon';

  const brandText = document.createElement('div');
  brandText.className = 'brand-text';

  const title = document.createElement('div');
  title.className = 'brand-title';
  title.textContent = 'YT Short Clipper';

  const sub = document.createElement('div');
  sub.className = 'brand-sub';
  sub.textContent = 'Turn long YouTube videos into viral shorts — Powered by AI';

  brandText.appendChild(title);
  brandText.appendChild(sub);

  brand.appendChild(icon);
  brand.appendChild(brandText);

  const nav = document.createElement('div');
  nav.className = 'nav';

  const apiBtn = document.createElement('button');
  apiBtn.className = 'nav-btn';
  apiBtn.dataset.view = 'api-settings';
  apiBtn.textContent = 'API Keys';

  const aiBtn = document.createElement('button');
  aiBtn.className = 'nav-btn';
  aiBtn.dataset.view = 'ai-settings';
  aiBtn.textContent = 'AI Settings';

  const homeBtn = document.createElement('button');
  homeBtn.className = 'nav-btn';
  homeBtn.dataset.view = 'home';
  homeBtn.textContent = 'Home';

  nav.appendChild(apiBtn);
  nav.appendChild(aiBtn);
  nav.appendChild(homeBtn);

  header.appendChild(brand);
  header.appendChild(nav);

  return { element: header, icon, buttons: [apiBtn, aiBtn, homeBtn] };
};
