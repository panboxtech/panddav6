// app.js - lógica da entidade App
export async function init(){
  const listEl = document.getElementById('appList');
  const feedback = document.getElementById('appFeedback');

  try {
    feedback.textContent = 'Carregando apps...';
    const res = await fetch('data/app.json');
    if (!res.ok) throw new Error('Falha ao carregar dados mock');
    const data = await res.json();

    listEl.innerHTML = '';
    data.forEach((a, idx) => {
      const item = document.createElement('div');
      item.className = 'entity-item';
      item.innerHTML = `<strong>${a.nome}</strong><div class="meta">${a.urlDownload}</div>`;
      listEl.appendChild(item);
    });

    feedback.style.color = 'var(--success)';
    feedback.textContent = `Carregados ${data.length} apps.`;
  } catch(err){
    feedback.style.color = 'var(--danger)';
    feedback.textContent = 'Erro: ' + err.message;
  }
}
