// cliente.js
export function init() {
  fetch('data/cliente.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('clienteList');
      list.innerHTML = '';
      data.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `${cliente.nome} - ${cliente.telefone} - ${cliente.email}`;
        list.appendChild(li);
      });
      document.getElementById('clienteFeedback').textContent = 'Clientes carregados com sucesso!';
    });
}
