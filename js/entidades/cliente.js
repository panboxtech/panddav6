// cliente.js - lógica separada da entidade Cliente
// manipula DOM da view views/cliente.html e consome data/cliente.json (mock)
export async function init(){
  const listEl = document.getElementById('clienteList');
  const feedback = document.getElementById('clienteFeedback');

  try {
    feedback.textContent = 'Carregando clientes...';
    const res = await fetch('data/cliente.json');
    if (!res.ok) throw new Error('Falha ao carregar dados mock');
    const data = await res.json();

    listEl.innerHTML = '';
    data.forEach((c, idx) => {
      const item = document.createElement('div');
      item.className = 'entity-item';
      item.innerHTML = `
        <div class="row">
          <strong>${c.nome}</strong>
          <div class="actions">
            <button data-idx="${idx}" class="edit">Editar</button>
            <button data-idx="${idx}" class="delete">Excluir</button>
          </div>
        </div>
        <div class="meta">${c.telefone} • ${c.email}</div>
      `;
      listEl.appendChild(item);
    });

    feedback.style.color = 'var(--success)';
    feedback.textContent = `Carregados ${data.length} clientes.`;

    // handlers (mock: apenas feedback)
    listEl.addEventListener('click', (e) => {
      if (e.target.matches('.edit')){
        const i = e.target.dataset.idx;
        feedback.style.color = 'var(--accent)';
        feedback.textContent = `Abrir modal de edição (mock) para cliente ${i}`;
      }
      if (e.target.matches('.delete')){
        const i = e.target.dataset.idx;
        feedback.style.color = 'var(--danger)';
        feedback.textContent = `Excluir (mock) cliente ${i}`;
      }
    });
  } catch(err){
    feedback.style.color = 'var(--danger)';
    feedback.textContent = 'Erro: ' + err.message;
  }
}
