const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const html = document.documentElement;
const nav = $('.site-header');
const navToggle = $('#navToggle');
const navLinks = $('#navLinks');
const dropdown = $('.nav-dropdown');
const dropdownToggle = $('#dropdownToggle');
const themeToggle = $('#themeToggle');
let lastFocusedElement = null;

function setTheme(theme) {
  const dark = theme === 'dark';
  html.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
  $('.theme-toggle i').className = dark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('portfolio-theme', theme);
}
setTheme(localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeToggle.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));
function closeMenu() { navLinks.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', 'false'); }
navToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(open)); });
dropdownToggle.addEventListener('click', () => { const open = dropdown.classList.toggle('is-open'); dropdownToggle.setAttribute('aria-expanded', String(open)); });
document.addEventListener('click', (event) => { if (!dropdown.contains(event.target)) { dropdown.classList.remove('is-open'); dropdownToggle.setAttribute('aria-expanded', 'false'); } if (!nav.contains(event.target)) closeMenu(); });

const eligible = (items) => researchData.demoMode ? items : items.filter((item) => !item.isDemo);
const withDemoLabel = (content) => researchData.demoMode ? `${content}<span class="demo-badge">Dữ liệu mẫu</span>` : content;

function renderAcademicLinks() {
  const links = [{ key: 'googleScholar', icon: 'fa-graduation-cap', label: 'Google Scholar' }, { key: 'orcid', icon: 'fa-id-badge', label: 'ORCID' }, { key: 'researchGate', icon: 'fa-flask', label: 'ResearchGate' }];
  $('#academicLinks').innerHTML = links.map(({ key, icon, label }) => { const url = researchData.academicProfiles[key]; return url ? `<a class="academic-link" href="${url}" target="_blank" rel="noopener noreferrer"><i class="fas ${icon}" aria-hidden="true"></i>${label}</a>` : `<span class="academic-link is-disabled" title="Đường dẫn đang chờ cập nhật"><i class="fas ${icon}" aria-hidden="true"></i>${label}</span>`; }).join('');
}
function renderStats() {
  const stats = [{ icon: 'fa-book-open', value: eligible(researchData.publications).length, label: 'Bài báo khoa học' }, { icon: 'fa-flask', value: eligible(researchData.researchProjects).length, label: 'Đề tài nghiên cứu' }, { icon: 'fa-code', value: eligible(researchData.researchProducts).length, label: 'Sản phẩm nghiên cứu' }, { icon: 'fa-users', value: `${researchData.researchStats.academicActivities}+`, label: 'Hoạt động học thuật' }];
  $('#researchStats').innerHTML = stats.map((stat) => `<div class="research-stat"><span class="research-stat-icon"><i class="fas ${stat.icon}" aria-hidden="true"></i></span><div><strong>${stat.value}</strong><span>${stat.label}</span></div></div>`).join('');
}
function renderInterests() {
  $('#interestGrid').innerHTML = researchData.researchInterests.map((item) => `<button class="interest-card research-reveal" type="button" data-interest-id="${item.id}"><i class="fas ${item.icon}" aria-hidden="true"></i><h3>${item.title}</h3><p>${item.subtitle}</p></button>`).join('');
}
function authorMarkup(authors) { return authors.map((author) => author === 'Lê Vũ Luân' ? `<strong>${author}</strong>` : author).join(', '); }
function publicationActions(item) { const actions = [`<span class="publication-type">${item.type}</span>`]; if (item.abstract) actions.push(`<button class="button button-secondary" type="button" data-publication-id="${item.id}"><i class="fas fa-eye" aria-hidden="true"></i> Abstract</button>`); if (item.pdfUrl) actions.push(`<a class="button button-secondary" href="${item.pdfUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf" aria-hidden="true"></i> PDF</a>`); if (item.publicationUrl) actions.push(`<a class="button button-secondary" href="${item.publicationUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Bài báo gốc</a>`); return actions.join(''); }
function renderPublications() {
  const items = eligible(researchData.publications).slice().sort((a, b) => (b.year || 0) - (a.year || 0));
  $('#publicationList').innerHTML = items.length ? items.map((item) => `<article class="publication-item research-reveal"><div class="publication-cover ${item.image ? '' : 'placeholder'}">${item.image ? `<img src="${item.image}" alt="Bìa ${item.title}" loading="lazy">` : '<i class="fas fa-file-lines" aria-hidden="true"></i>'}</div><div class="publication-content"><h3>${item.title}</h3><p class="publication-authors">${authorMarkup(item.authors)}</p><div class="publication-meta"><span><i class="fas fa-book" aria-hidden="true"></i>${item.venue}</span>${item.year ? `<span><i class="fas fa-calendar" aria-hidden="true"></i>${item.year}</span>` : ''}${item.pages ? `<span><i class="fas fa-file-lines" aria-hidden="true"></i>Trang ${item.pages}</span>` : ''}</div>${researchData.demoMode ? '<span class="demo-badge">Dữ liệu mẫu</span>' : ''}</div><div class="publication-actions">${publicationActions(item)}</div></article>`).join('') : '<p class="research-empty">Chưa có công bố được xác nhận.</p>';
}
function renderResearchProjects() { $('#researchProjectGrid').innerHTML = eligible(researchData.researchProjects).map((item) => `<article class="research-project-card research-reveal" tabindex="0" role="button" data-project-id="${item.id}"><div class="research-project-visual"><i class="fas ${item.icon}" aria-hidden="true"></i></div><div class="research-project-body"><h3>${item.title}</h3><span class="research-status">${item.status}</span><p>${item.description}</p><div class="research-project-fields">${item.fields.map((field) => `<span>${field}</span>`).join('')}</div></div></article>`).join(''); }
function renderResearchProducts() { $('#researchProductGrid').innerHTML = eligible(researchData.researchProducts).map((item) => `<article class="research-product-card research-reveal" tabindex="0" role="button" data-product-id="${item.id}"><div class="research-product-visual"><i class="fas ${item.icon}" aria-hidden="true"></i></div><div class="research-product-body"><h3>${item.title}</h3><p class="research-product-tags"><span>${item.tags[0]}</span><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></p></div></article>`).join(''); }

function openModal(title, content) { lastFocusedElement = document.activeElement; $('#modalTitle').textContent = title; $('#modalContent').innerHTML = content; const modal = $('#researchModal'); modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('research-modal-open'); $('#modalClose').focus(); }
function closeModal() { const modal = $('#researchModal'); modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('research-modal-open'); if (lastFocusedElement) lastFocusedElement.focus(); }
function showInterest(id) { const item = researchData.researchInterests.find((entry) => entry.id === id); if (!item) return; openModal(item.title, `<div class="modal-meta"><strong>${item.subtitle}</strong>${researchData.demoMode ? '<span class="demo-badge">Dữ liệu mẫu</span>' : ''}</div><p>Các hướng quan tâm:</p><ul>${item.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>`); }
function showPublication(id) { const item = researchData.publications.find((entry) => entry.id === id); if (!item) return; openModal(item.title, `<div class="modal-meta"><strong>${item.type} · ${item.venue}</strong><span>Tác giả: ${authorMarkup(item.authors)}</span>${item.authorRole ? `<span>Vai trò: ${item.authorRole}</span>` : ''}${item.year ? `<span>Năm: ${item.year}</span>` : ''}${item.pages ? `<span>Trang bắt đầu: ${item.pages}</span>` : ''}</div><p>${item.abstract || 'Abstract đang chờ cập nhật.'}</p>${item.keywords?.length ? `<p><strong>Từ khóa:</strong> ${item.keywords.join(', ')}</p>` : ''}${item.publicationUrl ? `<p><a href="${item.publicationUrl}" target="_blank" rel="noopener noreferrer">Mở trang ấn phẩm <i class="fas fa-external-link-alt" aria-hidden="true"></i></a></p>` : ''}`); }
function showProject(id) { const item = researchData.researchProjects.find((entry) => entry.id === id); if (!item) return; openModal(item.title, `<div class="modal-meta"><strong>${item.status}</strong><span>Lĩnh vực: ${item.fields.join(', ')}</span>${researchData.demoMode ? '<span class="demo-badge">Dữ liệu mẫu</span>' : ''}</div><p>${item.description}</p><p>Bối cảnh, mục tiêu, phương pháp dự kiến, tiến độ và kết quả nghiên cứu sẽ được cập nhật khi có dữ liệu xác thực.</p>`); }
function showProduct(id) { const item = researchData.researchProducts.find((entry) => entry.id === id); if (!item) return; openModal(item.title, `<div class="modal-meta"><strong>${item.type}</strong><span>Nhóm: ${item.tags.join(', ')}</span>${researchData.demoMode ? '<span class="demo-badge">Dữ liệu mẫu</span>' : ''}</div><p>${item.description}</p><p>Thông tin bài toán, phương pháp, công nghệ, kết quả thực nghiệm và liên kết tài liệu sẽ được cập nhật sau.</p>`); }

renderAcademicLinks(); renderStats(); renderInterests(); renderPublications(); renderResearchProjects(); renderResearchProducts();
document.addEventListener('click', (event) => { const interest = event.target.closest('[data-interest-id]'); const publication = event.target.closest('[data-publication-id]'); const project = event.target.closest('[data-project-id]'); const product = event.target.closest('[data-product-id]'); if (interest) showInterest(interest.dataset.interestId); if (publication) showPublication(publication.dataset.publicationId); if (project) showProject(project.dataset.projectId); if (product) showProduct(product.dataset.productId); if (event.target === $('#researchModal')) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeMenu(); closeModal(); } const card = event.target.closest('[data-project-id], [data-product-id]'); if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); card.click(); } });
 $('[data-open-interests]').addEventListener('click', () => openModal('Lĩnh vực nghiên cứu', `<ul>${researchData.researchInterests.map((item) => `<li><strong>${item.title}</strong> — ${item.details.join(', ')}</li>`).join('')}</ul>`));
$('#modalClose').addEventListener('click', closeModal);
$('#contactForm').addEventListener('submit', (event) => { event.preventDefault(); const name = $('#name').value.trim(); const email = $('#email').value.trim(); const message = $('#message').value.trim(); const error = $('#formError'); if (!name || !email || !message) { error.textContent = 'Vui lòng điền đầy đủ thông tin.'; return; } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error.textContent = 'Vui lòng nhập đúng định dạng email.'; return; } error.textContent = ''; window.location.href = `mailto:lvluan@ctu.edu.vn?subject=${encodeURIComponent(`Liên hệ từ ${name}`)}&body=${encodeURIComponent(`${message}\n\nEmail người gửi: ${email}`)}`; });
$('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
$('#currentYear').textContent = new Date().getFullYear();
window.addEventListener('scroll', () => { nav.classList.toggle('is-scrolled', window.scrollY > 12); $('#backToTop').classList.toggle('is-visible', window.scrollY > 500); }, { passive: true });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .12 });
$$('.research-reveal').forEach((element) => observer.observe(element));
