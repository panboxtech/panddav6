// dashboard.js - controla menu, carregamento de views e inicialização
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('toggleMenu');
const minimize = document.getElementById('minimizeMenu');
const viewContainer = document.getElementById('viewContainer');
const menuItems = document.querySelectorAll('.menu-item');

function setSidebarActive(active){
  if (active){
    sidebar.classList.add('active');
    sidebar.setAttribute('aria-hidden','false');
  } else {
    sidebar.classList.remove('active');
    sidebar.setAttribute('aria-hidden','true');
  }
}

toggle && toggle.addEventListener('click', () => setSidebarActive(!sidebar.classList.contains('active')));
minimize && minimize.addEventListener('click', () => sidebar.classList.toggle('sidebar-collapsed'));

menuItems.forEach(item => {
  item.addEventListener('click', () => loadView(item.dataset.view));
  item.addEventListener('keypress', (e) => { if (e.key === 'Enter') loadView(item.dataset.view); });
});

async function loadView(name){
  try {
    viewContainer.innerHTML = '<p class="feedback">Carregando...</p>';
    const res = await fetch(`views/${name}.html`);
    if (!res.ok) throw new Error('Não foi possível carregar a view');
    const html = await res.text();
    viewContainer.innerHTML = html;

    // carregar estilos da entidade se houver
    const linkId = 'entity-css';
    const existing = document.getElementById(linkId);
    if (existing) existing.remove();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = linkId;
    link.href = `css/entidades/${name}.css`;
    document.head.appendChild(link);

    // carregar script da entidade como módulo sem injetar HTML
    await import(`./js/entidades/${name}.js`).then(mod => {
      if (typeof mod.init === 'function') mod.init();
    });

    // se estiver em mobile, fechar o menu sobreposto após selecionar
    if (window.matchMedia('(max-width:900px)').matches){
      setSidebarActive(false);
    }
  } catch (err) {
    viewContainer.innerHTML = `<p class="feedback" style="color:var(--danger)">Erro ao carregar a view: ${err.message}</p>`;
  }
}

// inicialização opcional: carregar lista de clientes por padrão
document.addEventListener('DOMContentLoaded', () => {
  // carregue a view cliente por padrão no desktop; no mobile deixe vazio para o usuário escolher
  if (window.matchMedia('(min-width:901px)').matches) loadView('cliente');
});
