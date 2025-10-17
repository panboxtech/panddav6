// dashboard.js
function loadView(entidade) {
  fetch(`views/${entidade}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('viewContainer').innerHTML = html;
      import(`./js/entidades/${entidade}.js`).then(mod => mod.init());
    });
}

document.getElementById('toggleMenu').onclick = () => {
  document.getElementById('sidebar').classList.toggle('active');
};

document.getElementById('minimizeMenu').onclick = () => {
  document.getElementById('sidebar').classList.toggle('minimized');
};
