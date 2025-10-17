// plano.js - lógica da entidade Plano (mock simples)
export async function init(){
  const listEl = document.getElementById('planoList');
  const feedback = document.getElementById('planoFeedback');

  try {
    feedback.textContent = 'Carregando planos...';
    const res = await fetch('data/plano.json');
    if (!res.ok) throw new Error('Falha ao carregar dados mock');
    const data = await res.json();

    listEl.innerHTML = '';
    data.forEach((p, idx) => {
      const item = document.createElement('div');
      item.className = 'entity-item';
      item.innerHTML = `<strong>${p.nome}</strong><div class="meta">${p.descricao || ''}</div>`;
      listEl.appendChild(item);
    });

    feedback.style.color = 'var(--success)';
    feedback.textContent = `Carregados ${data.length} planos.`;
  } catch(err){
    feedback.style.color = 'var(--danger)';
    feedback.textContent = 'Erro: ' + err.message;
  }
}
