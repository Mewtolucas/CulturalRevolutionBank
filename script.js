'use strict';

/* ── State ── */
let favorites = new Set(JSON.parse(localStorage.getItem('crb-favs') || '[]'));
let currentId = null;
let filtered = [...accounts];

/* ── DOM refs ── */
const grid         = document.getElementById('accountsGrid');
const searchInput  = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const resultsCount = document.getElementById('resultsCount');
const totalCount   = document.getElementById('totalCount');
const favCount     = document.getElementById('favCount');
const overlay      = document.getElementById('modalOverlay');
const toast        = document.getElementById('toast');
let toastTimer;

/* ── Category → CSS class map ── */
const catClass = {
  'Memoir':                     'cat-memoir',
  'Oral History':                'cat-oral-history',
  'Video / Oral History Collection': 'cat-video',
  'Archival Collection':         'cat-archival',
  'Documentary':                 'cat-documentary',
  'Academic Collection':         'cat-academic',
  'Literary Fiction':            'cat-literary',
  'Journalism':                  'cat-journalism',
};

/* ── Helpers ── */
function saveFavs() {
  localStorage.setItem('crb-favs', JSON.stringify([...favorites]));
  favCount.textContent = favorites.size;
}

function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function categoryIcon(cat) {
  const icons = {
    'Memoir': '📖',
    'Oral History': '🎙️',
    'Video / Oral History Collection': '🎥',
    'Archival Collection': '🗄️',
    'Documentary': '🎬',
    'Academic Collection': '🏛️',
    'Literary Fiction': '✍️',
    'Journalism': '📰',
  };
  return icons[cat] || '📄';
}

/* ── Build category filter options ── */
function buildCategoryOptions() {
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

/* ── Filter & render ── */
function applyFilters() {
  const q = searchInput.value.toLowerCase().trim();
  const cat = categorySelect.value;

  filtered = accounts.filter(a => {
    const matchCat = cat === 'All' || a.category === cat;
    if (!matchCat) return false;
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      (a.country && a.country.toLowerCase().includes(q)) ||
      (a.yearPublished && String(a.yearPublished).includes(q))
    );
  });

  renderGrid();
}

function renderGrid() {
  resultsCount.textContent = `${filtered.length} of ${accounts.length} accounts`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" role="status">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <p>No accounts match your search. Try different keywords or clear the filters.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(a => cardHTML(a)).join('');

  grid.querySelectorAll('.account-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.fav-btn')) return;
      openModal(parseInt(card.dataset.id, 10));
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!e.target.closest('.fav-btn')) openModal(parseInt(card.dataset.id, 10));
      }
    });
  });

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleFav(parseInt(btn.dataset.id, 10), btn));
  });
}

function cardHTML(a) {
  const cls  = catClass[a.category] || 'cat-memoir';
  const icon = categoryIcon(a.category);
  const isFav = favorites.has(a.id);
  const yearStr = a.yearPublished ? a.yearPublished : 'n/d';

  return `
    <article
      class="account-card"
      data-id="${a.id}"
      tabindex="0"
      role="button"
      aria-label="Open details for ${escapeHtml(a.title)}"
    >
      <button
        class="fav-btn${isFav ? ' active' : ''}"
        data-id="${a.id}"
        aria-label="${isFav ? 'Remove from' : 'Add to'} favorites"
        title="${isFav ? 'Remove from favorites' : 'Save to favorites'}"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      <span class="card-category ${cls}">${icon} ${escapeHtml(a.category)}</span>

      <h2 class="card-title">${escapeHtml(a.title)}</h2>

      <p class="card-author">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        ${escapeHtml(a.author)}
      </p>

      <div class="card-footer">
        <span>${escapeHtml(a.country || '')} · ${yearStr}</span>
        <span class="card-badges">
          ${(a.goodreads || a.amazon) ? `<span class="card-has-purchase" title="Available to purchase">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M2 3h2l.4 2M7 13h10l4-8H5.4"/>
              <circle cx="7" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>
            </svg>
            Buy
          </span>` : ''}
          ${a.url ? `<span class="card-has-url">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Online
          </span>` : ''}
        </span>
      </div>
    </article>`;
}

/* ── Toggle favorites ── */
function toggleFav(id, triggerEl) {
  const wasAdded = !favorites.has(id);
  if (wasAdded) {
    favorites.add(id);
    showToast('Added to favorites');
  } else {
    favorites.delete(id);
    showToast('Removed from favorites');
  }
  saveFavs();

  /* Update card button */
  const cardBtn = grid.querySelector(`.fav-btn[data-id="${id}"]`);
  if (cardBtn) {
    cardBtn.classList.toggle('active', wasAdded);
    const svg = cardBtn.querySelector('svg');
    svg.setAttribute('fill', wasAdded ? 'currentColor' : 'none');
    cardBtn.setAttribute('aria-label', wasAdded ? 'Remove from favorites' : 'Add to favorites');
  }

  /* Update modal button if open */
  if (currentId === id) {
    syncModalFavBtn(wasAdded);
  }
}

function syncModalFavBtn(isFav) {
  const btn = document.getElementById('modalFavBtn');
  if (!btn) return;
  btn.classList.toggle('active', isFav);
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    ${isFav ? 'Saved' : 'Save to favorites'}`;
}

/* ── Modal ── */
function openModal(id) {
  const a = accounts.find(x => x.id === id);
  if (!a) return;
  currentId = id;

  const cls    = catClass[a.category] || 'cat-memoir';
  const icon   = categoryIcon(a.category);
  const isFav  = favorites.has(id);
  const yearStr = a.yearPublished ? a.yearPublished : 'Not dated';

  overlay.innerHTML = `
    <div
      class="modal-box"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      id="modalBox"
    >
      <div class="modal-header">
        <button class="btn-close-x" id="modalCloseX" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="modal-category-badge">${icon} ${escapeHtml(a.category)}</div>
        <h2 class="modal-title" id="modalTitle">${escapeHtml(a.title)}</h2>
        <p class="modal-author">${escapeHtml(a.author)}</p>
      </div>

      <div class="modal-body">
        <div class="modal-meta-grid">
          <div class="meta-item">
            <label>Year Published</label>
            <span>${escapeHtml(String(yearStr))}</span>
          </div>
          <div class="meta-item">
            <label>Country</label>
            <span>${escapeHtml(a.country || 'Unknown')}</span>
          </div>
          <div class="meta-item">
            <label>Category</label>
            <span>${escapeHtml(a.category)}</span>
          </div>
          <div class="meta-item">
            <label>Source</label>
            <span>${a.url ? 'Online – link available' : 'Print / Institutional'}</span>
          </div>
        </div>

        <p class="modal-description-heading">Description &amp; Context</p>
        <p class="modal-description">${escapeHtml(a.description)}</p>

        ${(a.url || a.goodreads || a.amazon) ? `<div class="modal-links">
          ${a.url ? `<a class="modal-link modal-link-primary" href="${escapeHtml(a.url)}" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Visit Source
          </a>` : ''}
          ${a.goodreads ? `<a class="modal-link modal-link-goodreads" href="${escapeHtml(a.goodreads)}" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M2 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="7" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>
            </svg>
            Goodreads
          </a>` : ''}
          ${a.amazon ? `<a class="modal-link modal-link-amazon" href="${escapeHtml(a.amazon)}" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Buy on Amazon
          </a>` : ''}
        </div>` : ''}
      </div>

      <div class="modal-footer">
        <button class="btn-fav-modal${isFav ? ' active' : ''}" id="modalFavBtn" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          ${isFav ? 'Saved' : 'Save to favorites'}
        </button>
        <button class="btn-close-modal" id="modalClose">Close</button>
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  /* Focus trap – send focus to modal */
  const firstFocusable = overlay.querySelector('button, a');
  if (firstFocusable) firstFocusable.focus();

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCloseX').addEventListener('click', closeModal);
  document.getElementById('modalFavBtn').addEventListener('click', () => {
    toggleFav(currentId, null);
  });
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.innerHTML = '';
  document.body.style.overflow = '';
  currentId = null;
}

/* ── Keyboard handling ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
});

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

/* ── Controls ── */
searchInput.addEventListener('input', applyFilters);
categorySelect.addEventListener('change', applyFilters);
document.getElementById('clearBtn').addEventListener('click', () => {
  searchInput.value = '';
  categorySelect.value = 'All';
  applyFilters();
  searchInput.focus();
});

/* ── Init ── */
totalCount.textContent = accounts.length;
favCount.textContent   = favorites.size;
buildCategoryOptions();
applyFilters();
