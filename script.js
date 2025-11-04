/* ---------- MENU MOBILE ---------- */
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

/* ---------- ROLAGEM SUAVE E LINK ATIVO ---------- */
const navLinks = document.querySelectorAll('[data-link]');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });
});

/* ---------- ANIMAÇÃO DOS CARDS (FADE-UP) ---------- */
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));

/* ---------- PARALLAX DA IMAGEM DE FUNDO ---------- */
const bannerBg = document.querySelector('.banner-bg');
if (bannerBg) {
  document.addEventListener('mousemove', e => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
    bannerBg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08)`;
  });
}

/* ---------- HERO BACKGROUND (USANDO SUA FOTO SUAVEMENTE) ---------- */
const hero = document.querySelector('.hero');
if (hero) {
  hero.style.backgroundImage = "url('minhafoto.jpg')";
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
  hero.style.filter = "brightness(.55)";
}

/* ---------- DOWNLOAD DO CURRÍCULO ---------- */
const downloadBtn = document.getElementById('download-cv');
if (downloadBtn) {
  downloadBtn.href = 'Curriculo_Sheila_2025.pdf';
}

// Efeito parallax no banner principal
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  document.addEventListener('mousemove', e => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
    heroBg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08)`;
  });
}
