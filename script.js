(function(){
  const c = document.getElementById('particles');
  if (!c) return;
  const colors = ['#00e5ff','#8b5cf6','#06b6d4','#00ff9d'];
  for(let i = 0; i < 30; i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (12 + Math.random() * 18) + 's';
    p.style.animationDelay = (Math.random() * 15) + 's';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.color = p.style.background;
    const s = 2 + Math.random() * 3;
    p.style.width = s + 'px';
    p.style.height = s + 'px';
    c.appendChild(p);
  }
})();

(function(){
  const nav = document.getElementById('nav');
  const backTop = document.getElementById('backTop');
  if (!nav || !backTop) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    if (y > 500) backTop.classList.add('show'); else backTop.classList.remove('show');
  }, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

(function(){
  const els = document.querySelectorAll('.reveal, .section-head, .tl-item, .skill-row');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('visible');
        const fill = e.target.querySelector('.skill-fill');
        if (fill){
          const pct = fill.getAttribute('data-pct');
          setTimeout(() => { fill.style.width = pct + '%'; }, 200);
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => io.observe(el));
})();

(function(){
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        const el = e.target;
        const target = parseInt(el.getAttribute('data-count'));
        let current = 0;
        const step = Math.max(1, Math.floor(target / 30));
        const timer = setInterval(() => {
          current += step;
          if (current >= target){ current = target; clearInterval(timer); }
          el.textContent = current;
        }, 40);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

(function(){
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const saved = localStorage.getItem('theme');
  if (saved === 'light'){ document.body.classList.add('light'); btn.textContent = '☀️'; }
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    btn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
})();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const t = document.querySelector(link.getAttribute('href'));
    if (t){ e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

(function(){
  const spot = document.getElementById('spotlight');
  if (!spot) return;
  document.addEventListener('mousemove', (e) => {
    spot.style.left = e.clientX + 'px';
    spot.style.top = e.clientY + 'px';
  });
})();

(function(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const msg = document.getElementById('cMsg').value;
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + msg);
    window.location.href = 'mailto:raphaelmvigafria@gmail.com?subject=' + subject + '&body=' + body;
  });
})();

(function(){
  const blobs = document.querySelectorAll('.blob');
  if (!blobs.length) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 800) return;
    blobs.forEach((b, i) => {
      const speed = (i + 1) * 0.15;
      b.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
})();

window.openGallery = function(){
  const g = document.getElementById('smGallery');
  if (!g) return;
  g.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeGallery = function(){
  const g = document.getElementById('smGallery');
  if (!g) return;
  g.classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeGallery();
});

document.addEventListener('click', (e) => {
  const g = document.getElementById('smGallery');
  if (g && e.target === g) window.closeGallery();
});
(function(){
  const toggle=document.getElementById('menuToggle'); const links=document.querySelector('.nav-links');
  if(!toggle||!links) return;
  toggle.addEventListener('click',()=>{links.classList.toggle('open'); toggle.textContent=links.classList.contains('open')?'✕':'☰';});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.textContent='☰';}));
})();
