window.Components = window.Components || {};

window.Components.ApiSettingsView = function () {
  const section = document.createElement('section');
  section.className = 'card glass entrance view';
  section.dataset.view = 'api-settings';

  const title = document.createElement('div');
  title.className = 'section-title';
  title.textContent = 'API Keys Configuration';

  const subtitle = document.createElement('div');
  subtitle.className = 'label';
  subtitle.textContent = 'Enter your API keys manually below';
  subtitle.style.marginBottom = '20px';

  const grid = document.createElement('div');
  grid.className = 'ai-grid';

  // Gemini API Key
  const geminiCard = document.createElement('div');
  geminiCard.className = 'ai-card';
  const geminiTitle = document.createElement('div');
  geminiTitle.className = 'ai-title';
  geminiTitle.textContent = 'Google Gemini API Key';
  const geminiField = document.createElement('div');
  geminiField.className = 'field';
  const geminiLabel = document.createElement('div');
  geminiLabel.className = 'label';
  geminiLabel.textContent = 'API Key';
  const geminiInput = document.createElement('input');
  geminiInput.className = 'input';
  geminiInput.type = 'password';
  geminiInput.placeholder = 'Enter your Gemini API key';
  geminiInput.id = 'gemini-key';
  const geminiKeyWrap = document.createElement('div');
  geminiKeyWrap.className = 'input-group';
  geminiKeyWrap.appendChild(geminiInput);
  const geminiEye = document.createElement('button');
  geminiEye.className = 'icon-btn';
  geminiEye.type = 'button';
  geminiEye.textContent = '👁';
  geminiEye.id = 'gemini-eye';
  geminiKeyWrap.appendChild(geminiEye);
  geminiField.appendChild(geminiLabel);
  geminiField.appendChild(geminiKeyWrap);
  const geminiHelp = document.createElement('div');
  geminiHelp.className = 'help-text';
  geminiHelp.innerHTML = 'Get your API key at: <a href="https://aistudio.google.com/app/apikeys" target="_blank">aistudio.google.com/app/apikeys</a>';
  geminiCard.appendChild(geminiTitle);
  geminiCard.appendChild(geminiField);
  geminiCard.appendChild(geminiHelp);

  // YouTube API Key
  const youtubeCard = document.createElement('div');
  youtubeCard.className = 'ai-card';
  const youtubeTitle = document.createElement('div');
  youtubeTitle.className = 'ai-title';
  youtubeTitle.textContent = 'YouTube API Key';
  const youtubeField = document.createElement('div');
  youtubeField.className = 'field';
  const youtubeLabel = document.createElement('div');
  youtubeLabel.className = 'label';
  youtubeLabel.textContent = 'API Key';
  const youtubeInput = document.createElement('input');
  youtubeInput.className = 'input';
  youtubeInput.type = 'password';
  youtubeInput.placeholder = 'Enter your YouTube API key';
  youtubeInput.id = 'youtube-key';
  const youtubeKeyWrap = document.createElement('div');
  youtubeKeyWrap.className = 'input-group';
  youtubeKeyWrap.appendChild(youtubeInput);
  const youtubeEye = document.createElement('button');
  youtubeEye.className = 'icon-btn';
  youtubeEye.type = 'button';
  youtubeEye.textContent = '👁';
  youtubeEye.id = 'youtube-eye';
  youtubeKeyWrap.appendChild(youtubeEye);
  youtubeField.appendChild(youtubeLabel);
  youtubeField.appendChild(youtubeKeyWrap);
  const youtubeHelp = document.createElement('div');
  youtubeHelp.className = 'help-text';
  youtubeHelp.innerHTML = 'Get your API key at: <a href="https://console.cloud.google.com/apis/dashboard" target="_blank">console.cloud.google.com</a>';
  youtubeCard.appendChild(youtubeTitle);
  youtubeCard.appendChild(youtubeField);
  youtubeCard.appendChild(youtubeHelp);

  grid.appendChild(geminiCard);
  grid.appendChild(youtubeCard);

  const actions = document.createElement('div');
  actions.className = 'ai-actions';

  const save = document.createElement('button');
  save.id = 'save_api_keys';
  save.className = 'btn primary';
  save.textContent = 'Save API Keys';

  const status = document.createElement('div');
  status.id = 'api_status';
  status.className = 'status';

  actions.appendChild(save);
  actions.appendChild(status);

  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(grid);
  section.appendChild(actions);

  return {
    element: section,
    fields: {
      geminiKey: geminiInput,
      geminiEye: geminiEye,
      youtubeKey: youtubeInput,
      youtubeEye: youtubeEye,
      saveBtn: save,
      status
    }
  };
};
