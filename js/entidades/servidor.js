// servidor.js - lógica da entidade Servidor
export async function init(){
  const listEl = document.getElementById('servidorList');
  const feedback = document.getElementById('servidorFeedback');

  try {
    feedback.textContent = 'Carregando servidores...';
    const res = await fetch('data/servidor.json');
    if (!res.ok) throw new Error('Falha ao carregar dados mock');
    const data = await res.json();

    listEl.innerHTML = '';
    data.forEach((s, idx) => {
      const item = document.createElement('div');
      item.className = 'entity-item';
      item.innerHTML = `<strong>${s.nome}</strong><div class="meta">${s.url}</div>`;
      listEl.appendChild(item);
    });

    feedback.style.color = 'var(--success)';
    feedback.textContent = `Carregados ${data.length} servidores.`;
  } catch(err){
    feedback.style.color = 'var(--danger)';
    feedback.textContent = 'Erro: ' + err.message;
  }
}
