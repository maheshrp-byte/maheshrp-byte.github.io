const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.right = '5%';
  nav.style.padding = '18px';
  nav.style.background = '#0d1b18';
  nav.style.border = '1px solid rgba(255,255,255,.1)';
  nav.style.borderRadius = '12px';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) nav.style.display = 'none';
  });
});
