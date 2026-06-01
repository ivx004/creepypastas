// ============================================
// VARIABLES GLOBALES
// ============================================

let currentFilter = 'all';
let currentSort = 'newest';
let creepypastasData = [];

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    // Cargar datos de creepypastas
    creepypastasData = getCreepypastasData();
    renderCreepypastas(creepypastasData);
}

function setupEventListeners() {
    // Botones de navegación
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', handleNavFilter);
    });

    // Botones de filtro/ordenamiento
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleSortFilter);
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Modal
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Botones del modal
    document.getElementById('readMoreBtn').addEventListener('click', handleReadMore);
    document.getElementById('shareBtn').addEventListener('click', handleShare);
}

// ============================================
// FILTROS Y BÚSQUEDA
// ============================================

function handleNavFilter(e) {
    const allNavBtns = document.querySelectorAll('.nav-btn');
    allNavBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    currentFilter = e.target.dataset.filter;
    filterAndRender();
}

function handleSortFilter(e) {
    const allFilterBtns = document.querySelectorAll('.filter-btn');
    allFilterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    currentSort = e.target.dataset.sort;
    filterAndRender();
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = creepypastasData.filter(pasta => 
        pasta.title.toLowerCase().includes(searchTerm) ||
        pasta.description.toLowerCase().includes(searchTerm) ||
        pasta.author.toLowerCase().includes(searchTerm)
    );
    
    if (searchTerm === '') {
        filterAndRender();
    } else {
        const sorted = sortCreepypastas(filtered);
        renderCreepypastas(sorted);
    }
}

function filterAndRender() {
    let filtered = creepypastasData;

    // Aplicar filtro de categoría
    if (currentFilter !== 'all') {
        filtered = filtered.filter(pasta => pasta.category === currentFilter);
    }

    // Aplicar ordenamiento
    const sorted = sortCreepypastas(filtered);
    renderCreepypastas(sorted);
}

function sortCreepypastas(data) {
    const sorted = [...data];

    switch(currentSort) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'popular':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }

    return sorted;
}

// ============================================
// RENDERIZADO
// ============================================

function renderCreepypastas(data) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #aaa; font-size: 1.2rem;">No se encontraron creepypastas</div>';
        return;
    }

    data.forEach((pasta, index) => {
        const card = createCard(pasta);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
}

function createCard(pasta) {
    const card = document.createElement('div');
    card.className = 'creepypasta-card';
    
    const stars = generateStars(pasta.rating);
    
    card.innerHTML = `
        <div class="card-image">
            ${pasta.emoji}
        </div>
        <div class="card-content">
            <span class="card-category">${pasta.category}</span>
            <h3 class="card-title">${pasta.title}</h3>
            <p class="card-description">${pasta.description}</p>
            <div class="card-footer">
                <span class="card-author">Por: ${pasta.author}</span>
                <div class="card-rating">
                    ${stars}
                </div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => openModal(pasta));
    return card;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<span class="star">★</span>' : '<span class="star" style="opacity: 0.3;">★</span>';
    }
    return stars;
}

// ============================================
// MODAL
// ============================================

let currentPasta = null;

function openModal(pasta) {
    currentPasta = pasta;
    document.getElementById('modalTitle').textContent = pasta.title;
    document.getElementById('modalAuthor').innerHTML = `👤 ${pasta.author}`;
    document.getElementById('modalDate').innerHTML = `📅 ${formatDate(pasta.date)}`;
    document.getElementById('modalRating').innerHTML = `⭐ ${pasta.rating}/5`;
    document.getElementById('modalDescription').textContent = pasta.description;
    document.getElementById('modalFullText').innerHTML = pasta.fullText || '<p>Contenido completo disponible próximamente...</p>';

    const modal = document.getElementById('modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPasta = null;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

function handleReadMore() {
    if (currentPasta) {
        showToast(`Leyendo: ${currentPasta.title}`);
        // Aquí podrías redirigir a una página de lectura completa
    }
}

function handleShare() {
    if (currentPasta && navigator.share) {
        navigator.share({
            title: currentPasta.title,
            text: currentPasta.description,
            url: window.location.href
        }).catch(err => console.log('Error al compartir:', err));
    } else if (currentPasta) {
        // Fallback para navegadores sin soporte de Web Share API
        const text = `${currentPasta.title} - ${currentPasta.description}`;
        navigator.clipboard.writeText(text);
        showToast('Enlace copiado al portapapeles');
    }
}

// ============================================
// NOTIFICACIONES
// ============================================

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

function getCreepypastasData() {
    // Esta función debe retornar los datos del archivo data.js
    // Por ahora retorna un array vacío que será completado con el archivo data.js
    return window.CREEPYPASTAS_DATA || [];
}
