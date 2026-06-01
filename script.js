// ============================================
// DATOS DE CREEPYPASTAS
// ============================================

const CREEPYPASTAS_DATA = [
    {
        id: 1,
        title: "Jeff the Killer",
        author: "Jeff the Killer",
        category: "classic",
        emoji: "👻",
        rating: 5,
        date: "2011-06-03",
        description: "La aterradora historia de un joven asesino que acecha en la oscuridad. Su rostro sin párpados y su famosa frase 'Go to sleep' lo hacen uno de los creepypastas más icónicos[...]",
        fullText: `<p>Había una vez un chico normal que vivía con su familia en una casa ordinaria. Todo cambió cuando una noche, unos intrusos irrumpieron en su hogar. Lo que sucedió después[...]
        
        <p>Después de sobrevivir a quemaduras extremas y procedimientos médicos crueles, su cuerpo cambió. Su piel se volvió pálida, sus ojos perdieron los párpados, y su boca fue cortada de[...]
        
        <p>Ahora, Jeff vaga por la noche buscando nuevas víctimas. Se coloca en las ventanas de las casas, esperando el momento perfecto. Cuando encuentra a su presa, whispers: "Go to sleep... Go[...]
        
        <p>Dicen que si lo escuchas en la oscuridad, ya es demasiado tarde. Jeff ya está en tu habitación, cuchillo en mano, esperando a que cierres los ojos.</p>`
    },
    {
        id: 2,
        title: "El Pasillo de los Susurros",
        author: "Unknown",
        category: "modern",
        emoji: "🚪",
        rating: 4,
        date: "2018-11-15",
        description: "Un edificio con un pasillo que no debería existir. Los que entran nunca regresan siendo los mismos. Algunos no regresan en absoluto.",
        fullText: `<p>El edificio de apartamentos Riverside ha estado aquí durante 50 años. Todos los residentes conocen la regla: nunca entres al pasillo del tercer piso después de las 10 PM.<[...]
        
        <p>Pero nadie explicaba por qué.</p>
        
        <p>Cuando me mudé allí, curiosamente, decidí ignorar la advertencia. Esa noche, entré al pasillo. Las luces parpadeaban. Las paredes parecían respirar. Y podía escuchar... susurros.<[...]
        
        <p>Voces que no sonaban humanas. Voces que me llamaban por mi nombre, un nombre que nunca le había dicho a nadie en ese edificio.</p>
        
        <p>Salí corriendo. Pero desde entonces, he notado algo: los otros residentes me observan diferente. Como si supieran algo que yo no. Como si al entrar al pasillo, algo de ese lugar se que[...]
        
        <p>Y cada noche a las 10, puedo escuchar los susurros... viniendo del interior de mi propio apartamento.</p>`
    },
    {
        id: 3,
        title: "Smile.jpg",
        author: "Joshua Strickland",
        category: "classic",
        emoji: "😊",
        rating: 5,
        date: "2010-09-15",
        description: "Una imagen que no deberías ver. Una sonrisa que te observa. Incluso después de eliminarla, sigue ahí, en tu mente, en tus sueños.",
        fullText: `<p>Todo comenzó con un archivo JPEG simple en una carpeta abierta. No sabía de dónde había venido. Solo estaba ahí: Smile.jpg</p>
        
        <p>Era una fotografía antigua, un registro de algo imposible. Mostrada una figura humanoide con la piel estirada y una sonrisa imposible. Los dientes eran de un blanco imposible, los ojos[...]
        
        <p>Debería haberla eliminado inmediatamente. Pero no pude apartar la vista.</p>
        
        <p>Lo que sucedió después fue que el archivo se replicó. Aparecía en mis carpetas sin mi consentimiento. Cada vez que eliminaba una copia, aparecían dos más. La sonrisa se volvía m�[...]
        
        <p>Y luego empecé a verla en mis sueños.</p>
        
        <p>Ahora, dondequiera que voy, puedo verla al rabillo del ojo. Una sonrisa imposible, esperando, observando. El archivo ya no está en mi computadora. Pero está dentro de mí.</p>`
    },
    {
        id: 4,
        title: "La Casa Infinita",
        author: "Anonymous",
        category: "modern",
        emoji: "🏚️",
        rating: 4,
        date: "2019-03-22",
        description: "Una casa que desafía las leyes de la arquitectura. Cada habitación lleva a más habitaciones. Cada pasillo es más largo que el anterior.",
        fullText: `<p>Heredé una casa de una tía a la que nunca conocí. Parecía normal: tres pisos, jardín trasero, perfecta para comenzar una nueva vida.</p>
        
        <p>El primer mes fue tranquilo. Pero luego noté algo extraño: el mapa mental que hacía de la casa no coincidía con la realidad.</p>
        
        <p>Una puerta en la sala de estar, que juraba que conducía a la cocina, en cambio abría a un pasillo largo que nunca había visto. Al final del pasillo había otra puerta. Esta conducía[...]
        
        <p>Las habitaciones se multiplicaban. Cada día descubría nuevas espacios, nuevas puertas, nuevos pasillos. Algunos conducían a sótanos que deberían haber estado bajo el nivel del suel[...]
        
        <p>Ahora tengo miedo. Tengo miedo de que esta casa no sea un hogar, sino un ser vivo. Tengo miedo de lo que podría encontrar si sigo explorando sus infinitos pasillos.</p>
        
        <p>Lo más aterrador es que cada noche, el número de puertas aumenta.</p>`
    },
    {
        id: 5,
        title: "Ben Drowned",
        author: "Alexander D. Hall",
        category: "classic",
        emoji: "🎮",
        rating: 5,
        date: "2010-09-04",
        description: "Un cartucho de Zelda majora's Mask que no debería existir. Un juego que está vivo. Un fantasma digital que acecha en los píxeles.",
        fullText: `<p>Compré una copia de Legend of Zelda: Majora's Mask en una venta de garaje. El vendedor parecía ansioso por deshacerse de ella. El cartucho tenía una mancha roja.</p>
        
        <p>Debería haber notado que algo andaba mal desde el principio.</p>
        
        <p>El juego comenzaba normal, pero en poco tiempo, algo cambió. Los gráficos se distorsionaban. Las texturas se corrompían. Y el "Ben" que tocaba la ocarina no era el Link que conocía.[...]
        
        <p>La música se volvió distorsionada, perturbadora. Las imágenes de la Deku Scrub y otros personajes se volvieron grotescas, sus rostros alargados, sus ojos vacíos.</p>
        
        <p>Pero lo peor fue cuando el juego empezó a jugar sin que yo presionara botones. Fue como si algo estuviera controlando el juego. Como si algo estuviera dentro del cartucho, observando.[...]
        
        <p>Traté de reiniciar el sistema. Traté de sacado el cartucho. Pero Ben... Ben no se fue. Ben seguía ahí, en mis otros juegos, en mis archivos, esperando.</p>
        
        <p>Y todavía puedo escuchar la música. La música de Ben. Distorsionada, desgarradora, eterna.</p>`
    },
    {
        id: 6,
        title: "La Llamada de las 3:33 AM",
        author: "Daniel Collins",
        category: "cortos",
        emoji: "☎️",
        rating: 3,
        date: "2020-07-10",
        description: "Cada noche a las 3:33 AM, suena tu teléfono. Es una llamada de ti mismo. Pero no eres tú... o sí?",
        fullText: `<p>Comenzó sin previo aviso. Cada noche a las 3:33 AM exactamente, mi teléfono sonaba.</p>
        
        <p>La primera noche contesté. Era una voz que sonaba exactamente como la mía, pero distorsionada, como si hablara bajo el agua. Me preguntaba: "¿Qué estás haciendo?" Una y otra vez.<[...]
        
        <p>Colgué. Bloqueé el número. Nada funcionó.</p>
        
        <p>La llamada siguió llegando. Y cada noche, la voz decía algo diferente. A veces compartía secretos que solo yo sabía. A veces describía lo que estaba haciendo en ese momento exacto[...]
        
        <p>Una noche, no contesté. Pero mi teléfono comenzó a reproducir un audio de mí mismo, grabado hace años, durmiendo. Mi voz dormida, respirando, en la habitación de alguien más.</p[...]
        
        <p>Ahora, la llamada viene cada noche. Y cada vez, la voz suena más presente, más real. Como si estuviera más cerca con cada llamada.</p>
        
        <p>Creo que está en la casa.</p>`
    },
    {
        id: 7,
        title: "Las Imágenes Olvidadas",
        author: "Emma Rodriguez",
        category: "modern",
        emoji: "📸",
        rating: 4,
        date: "2019-12-05",
        description: "Fotos antiguas en una carpeta que no recuerdas crear. Rostros que no reconoces. Pero en cada foto, alguien más a tu lado.",
        fullText: `<p>Encontré una carpeta en mi computadora titulada 'Memories' que nunca creé. Dentro había cientos de fotos. En todas ellas, yo estaba presente, pero de una manera que no re[...]
        
        <p>Estaba en lugares que nunca había visitado. Sonreía a personas que nunca había conocido. Y en cada foto, había una mancha borrosa detrás de mí. Una figura que nunca estaba comple[...]
        
        <p>Traté de eliminar la carpeta. Pero apareció de nuevo.</p>
        
        <p>Ahora, en mis propias fotos, en mis propios recuerdos, puedo ver esa figura borrosa. Siempre detrás de mí. Siempre observando. Y lentamente, frame a frame, la figura se está volvien[...]
        
        <p>Pronto sabré quién es. Y creo que eso es lo que más me asusta.</p>`
    },
    {
        id: 8,
        title: "No Dormir",
        author: "Anonymous",
        category: "classic",
        emoji: "😴",
        rating: 5,
        date: "2011-02-14",
        description: "Un experimento ruso clandestino. Mantener despiertos a los sujetos durante días. Lo que descubrieron fue peor de lo que imaginaban.",
        fullText: `<p>Los documentos son reales. He visto las fotografías. Lo que sucedió fue inhumano.</p>
        
        <p>En los años 1940s, la Unión Soviética realizó un experimento. Mantuvieron a cinco prisioneros despiertos durante 15 días sin parar, usando estimulantes y descargas eléctricas.</p[...]
        
        <p>Lo que documentaron fue una transformación gradual. Al principio, los sujetos mostraban signos típicos de privación de sueño. Pero después del quinto día, algo cambió.</p>
        
        <p>Los sujetos comenzaron a automutilarse. A arrancarse la piel. A abrir sus propios cuerpos. Pero no gritaban. Solo pedían que les dejaran dormir.</p>
        
        <p>Para el día 15, los que sobrevivieron ya no eran humanos. Sus cuerpos estaban destrozados, pero seguían vivos. Sus ojos estaban abiertos permanentemente, incapaces de cerrarse.</p>
        
        <p>Uno de ellos susurró una última frase antes de colapsar: "Por favor... déjame dormir..."</p>
        
        <p>El experimento nunca fue reportado. Los archivos fueron sellados. Pero los documentos existen, y la pregunta persiste: ¿Qué pasó realmente en esa habitación?</p>`
    },
    {
        id: 9,
        title: "Slenderman",
        author: "Victor Surge",
        category: "classic",
        emoji: "🎭",
        rating: 5,
        date: "2009-06-10",
        description: "El misterio comenzó con fotografías de un hombre alto y delgado. Ninguno que lo ha visto ha vivido para contarlo. Su nombre es Slenderman.",
        fullText: `<p>Todo empezó con dos fotografías. Fotografías en blanco y negro de eventos escolares de los años 1983 y 1986. En el fondo de cada una, apenas visible, estaba la misma fig[...]
        
        <p>Nadie lo reconocía. Nadie sabía quién era. Pero en cada fotografía donde aparecía, los niños en la imagen desaparecían poco después. Sin explicación. Sin pista alguna.</p>
        
        <p>Las desapariciones se multiplicaron. Más fotografías fueron encontradas. En eventos deportivos, en paseos escolares, en fiestas de cumpleaños. Siempre la misma figura. Siempre en el[...]
        
        <p>Luego llegaron los relatos. Testimonios de personas que lo habían visto. Describían la experiencia como hipnotizante. Decían que una vez que lo veías, no podías apartar la vista. [...]
        
        <p>La gente comenzó a reportar avistamientos. En los bosques. En las calles oscuras. Siempre al acecho. Siempre esperando. Y lo más perturbador: nunca atacaba. Solo observaba. Solo espe[...]
        
        <p>Los investigadores se hicieron preguntas. ¿Cómo es posible que una figura así no haya sido identificada? ¿Cómo puede rondar sin ser detenido? ¿Y por qué siempre desaparecen aque[...]
        
        <p>Ahora, cada vez que ves una fotografía antigua, debes mirar cuidadosamente el fondo. Porque si está ahí... si ese hombre delgado y alto está observando... significa que ya te ha el[...]
        
        <p>Y no hay escape de Slenderman. Solo la inevitable oscuridad que viene después.</p>`
    }
];

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
    creepypastasData = CREEPYPASTAS_DATA;
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
