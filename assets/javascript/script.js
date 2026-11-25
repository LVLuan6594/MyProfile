const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const galleryData = {
  work: [
    { src: './assets/img/work/CTU_CUSC_CongThuongTayNinh_2026.jpg', alt: 'Hoạt động công việc tại CTU CUSC và Công Thương Tây Ninh', caption: 'CTU CUSC / Công Thương Tây Ninh · 2026' },
    { src: './assets/img/work/SmartAqua2026.jpeg', alt: 'Hoạt động công việc SmartAqua', caption: 'SmartAqua · 2026' },
    { src: './assets/img/work/SmartAqua2026_Center.jpeg', alt: 'Hoạt động công việc SmartAqua tại trung tâm', caption: 'SmartAqua Center · 2026' },
    { src: './assets/img/work/SoKHCN_QuangNinh.jpg', alt: 'Hoạt động công việc tại Sở Khoa học và Công nghệ Quảng Ninh', caption: 'Sở Khoa học và Công nghệ Quảng Ninh' },
    { src: './assets/img/work/active1.jpg', alt: 'Hoạt động công việc 1', caption: 'Hoạt động công việc · cần cập nhật chú thích' },
    { src: './assets/img/work/active2.jpg', alt: 'Hoạt động công việc 2', caption: 'Hoạt động công việc · cần cập nhật chú thích' },
    { src: './assets/img/work/active3.jpg', alt: 'Hoạt động công việc 3', caption: 'Hoạt động công việc · cần cập nhật chú thích' }
  ],
  social: [
    { src: './assets/img/social/20112026.jpg', alt: 'Hoạt động khác ngày 20 tháng 11 năm 2026', caption: 'Hoạt động khác · 20/11/2026' },
    { src: './assets/img/social/DiBo2026.jpg', alt: 'Hoạt động đi bộ năm 2026', caption: 'Hoạt động khác · Đi bộ 2026' },
    { src: './assets/img/social/Run_VungTau2026.jpg', alt: 'Hoạt động chạy tại Vũng Tàu năm 2026', caption: 'Hoạt động khác · Run Vũng Tàu 2026' }
  ]
};

const html = document.documentElement;
const nav = $('.site-header');
const navToggle = $('#navToggle');
const navLinks = $('#navLinks');
const dropdown = $('.nav-dropdown');
const dropdownToggle = $('.dropdown-toggle');
const themeToggle = $('#themeToggle');

function closeMenu() { navLinks.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', 'false'); }
navToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(open)); });
dropdownToggle.addEventListener('click', () => { const open = dropdown.classList.toggle('is-open'); dropdownToggle.setAttribute('aria-expanded', String(open)); });

function setTheme(theme) {
  const dark = theme === 'dark';
  html.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
  $('.theme-toggle i').className = dark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('portfolio-theme', theme);
}
const storedTheme = localStorage.getItem('portfolio-theme');
setTheme(storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeToggle.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));

const sectionLinks = $$('.nav-links > li > a');
const trackedSections = sectionLinks.map((link) => $(link.getAttribute('href'))).filter(Boolean);
function scrollToSection(target) { const element = $(target); if (element) window.scrollTo({ top: element.offsetTop - nav.offsetHeight - 12, behavior: 'smooth' }); }
sectionLinks.forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); scrollToSection(link.getAttribute('href')); closeMenu(); }));

function setActiveNav() {
  let current = trackedSections[0];
  trackedSections.forEach((section) => { if (window.scrollY + nav.offsetHeight + 80 >= section.offsetTop) current = section; });
  sectionLinks.forEach((link) => link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`));
  nav.classList.toggle('is-scrolled', window.scrollY > 12);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  $('.scroll-progress').style.width = `${maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0}%`;
  $('#backToTop').classList.toggle('is-visible', window.scrollY > 500);
}
window.addEventListener('scroll', setActiveNav, { passive: true });
window.addEventListener('resize', setActiveNav);

const galleryTrack = $('#galleryTrack');
let activeGallery = 'work';
let activeImage = 0;
function gallerySize() { return window.innerWidth <= 760 ? 1 : window.innerWidth <= 1000 ? 2 : 3; }
function renderGallery() {
  const items = galleryData[activeGallery];
  const count = gallerySize();
  const visibleItems = items.length ? Array.from({ length: Math.min(count, items.length) }, (_, offset) => ({ item: items[(activeImage + offset) % items.length], index: (activeImage + offset) % items.length })) : [];
  galleryTrack.innerHTML = visibleItems.length ? visibleItems.map(({ item, index }) => `<button class="gallery-card" type="button" data-image-index="${index}"><img src="${item.src}" alt="${item.alt}" loading="lazy"><span>${item.caption}</span></button>`).join('') : '<div class="gallery-empty"><i class="fas fa-images" aria-hidden="true"></i><p>Chưa có hình ảnh cho nhóm này.</p><small>Vui lòng bổ sung dữ liệu thực tế sau.</small></div>';
  $$('.gallery-card', galleryTrack).forEach((card) => card.addEventListener('click', () => openLightbox(Number(card.dataset.imageIndex))));
  $('.gallery-prev').disabled = !items.length; $('.gallery-next').disabled = !items.length;
}
function setGalleryTab(tab) {
  activeGallery = tab; activeImage = 0;
  $$('.gallery-tab').forEach((button) => { const selected = button.dataset.galleryTab === tab; button.classList.toggle('is-active', selected); button.setAttribute('aria-selected', String(selected)); });
  renderGallery();
}
function changeGallery(step) { const total = galleryData[activeGallery].length; if (!total) return; activeImage = (activeImage + step + total) % total; renderGallery(); }
$$('[data-gallery-tab]').forEach((button) => button.addEventListener('click', () => { const tab = button.dataset.galleryTab; if (button.closest('.nav-dropdown')) { dropdown.classList.remove('is-open'); dropdownToggle.setAttribute('aria-expanded', 'false'); closeMenu(); scrollToSection('#activities'); } setGalleryTab(tab); }));
$('.gallery-prev').addEventListener('click', () => changeGallery(-1)); $('.gallery-next').addEventListener('click', () => changeGallery(1)); setGalleryTab('work');

const lightbox = $('#lightbox');
function openLightbox(index) { const item = galleryData[activeGallery][index]; if (!item) return; activeImage = index; $('#lightboxImage').src = item.src; $('#lightboxImage').alt = item.alt; $('#lightboxCaption').textContent = item.caption; lightbox.hidden = false; document.body.classList.add('no-scroll'); $('.lightbox-close').focus(); }
function closeLightbox() { lightbox.hidden = true; document.body.classList.remove('no-scroll'); }
$('.lightbox-close').addEventListener('click', closeLightbox); $('.lightbox-prev').addEventListener('click', () => { changeGallery(-1); openLightbox(activeImage); }); $('.lightbox-next').addEventListener('click', () => { changeGallery(1); openLightbox(activeImage); }); lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });

$('#contactForm').addEventListener('submit', (event) => { event.preventDefault(); const name = $('#name').value.trim(); const email = $('#email').value.trim(); const message = $('#message').value.trim(); const error = $('#formError'); if (!name || !email || !message) { error.textContent = 'Vui lòng điền đầy đủ thông tin.'; return; } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error.textContent = 'Vui lòng nhập đúng định dạng email.'; return; } error.textContent = ''; window.location.href = `mailto:lvluan@ctu.edu.vn?subject=${encodeURIComponent(`Liên hệ từ ${name}`)}&body=${encodeURIComponent(`${message}\n\nEmail người gửi: ${email}`)}`; });
$('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); $('#currentYear').textContent = new Date().getFullYear();
document.addEventListener('click', (event) => { if (!dropdown.contains(event.target)) { dropdown.classList.remove('is-open'); dropdownToggle.setAttribute('aria-expanded', 'false'); } if (!nav.contains(event.target)) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeLightbox(); dropdown.classList.remove('is-open'); dropdownToggle.setAttribute('aria-expanded', 'false'); closeMenu(); } if (!lightbox.hidden && event.key === 'ArrowLeft') { changeGallery(-1); openLightbox(activeImage); } if (!lightbox.hidden && event.key === 'ArrowRight') { changeGallery(1); openLightbox(activeImage); } });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
$$('.reveal').forEach((element) => observer.observe(element));
window.addEventListener('load', () => { $('.loading-screen').classList.add('is-hidden'); setActiveNav(); });
window.addEventListener('resize', () => renderGallery());
setActiveNav();
