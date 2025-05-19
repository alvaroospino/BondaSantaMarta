

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const timelineContainer = document.getElementById('timeline-container');
    const lugaresCarousel = document.getElementById('lugares-carousel');
    const lugaresInfo = document.getElementById('lugares-info');
    const foodCarousel = document.getElementById('food-carousel');
    const himnoContent = document.getElementById('himno-content');
    const playHimnoBtn = document.getElementById('playHimno');
    const pauseHimnoBtn = document.getElementById('pauseHimno');
    const sopaLetrasBtn = document.getElementById('sopaLetrasBtn');
    const cuestionarioBtn = document.getElementById('cuestionarioBtn');
    const gameContainer = document.getElementById('game-container');
    const gameTitle = document.getElementById('game-title');
    const gameContent = document.getElementById('game-content');
    const closeGameBtn = document.getElementById('closeGame');

    // Navegación móvil
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Efecto de header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    
    // Tabs de Historia
    tabBtns.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Crear Línea del Tiempo
    const timelineData = [
    { year: "Antes del 1500 a.C.", title: "Asentamiento Original", description: "Primeros grupos indígenas se establecen en la región." },
    { year: "500 d.C.", title: "Apogeo Tayrona", description: "La cultura Tayrona alcanza su mayor desarrollo en la zona." },
    { year: "1525", title: "Llegada de Españoles", description: "Rodrigo de Bastidas llega a las costas cercanas a Bonda." },
    { year: "1529", title: "Resistencia Indígena", description: "El cacique Bonda lidera la resistencia contra los españoles." },
    { year: "1600", title: "Iglesia de San Jerónimo", description: "Construcción de la iglesia principal de Bonda." },
    { year: "1810-1819", title: "Independencia", description: "Bonda participa en el proceso de independencia de Colombia." },
    { year: "1950", title: "Desarrollo Turístico", description: "Comienza a desarrollarse el turismo en la zona." },
    { year: "2000", title: "Declaración Patrimonial", description: "Se reconoce la importancia cultural e histórica de Bonda." },
    { year: "2007", title: "Intervención Vial", description: "Intervención significativa en la vía que conecta la 'Y' de la vía troncal del caribe vía Guachaca y comunica con la Estación de Policía de Bonda." },
    { year: "2018", title: "Rechazo al POT", description: "La comunidad de Bonda expresa su rechazo a la propuesta del Plan de Ordenamiento Territorial de convertir el corregimiento en un barrio urbano de Santa Marta." },
    { year: "2020", title: "Iniciativas Comunitarias", description: "Se realizan iniciativas sociales y comunitarias en Bonda para incluir las ideas de la comunidad en el Plan de Desarrollo Distrital." },
    { year: "2021", title: "Comité Ciudadano", description: "Se conforma un Comité Ciudadano en la vereda Santa Rita para abordar problemáticas locales en salud, educación y servicios públicos." },
    { year: "2022", title: "Ferias de la Equidad", description: "Bonda recibe la oferta institucional de la Alcaldía a través de las Ferias de la Equidad, acercando diversos servicios a la comunidad." },
    { year: "2023", title: "Mejora Vial", description: "Se ejecuta la pavimentación de 1.5 km de la vía Bonda – El Curval, mejorando la movilidad y beneficiando a más de 4,000 habitantes y visitantes." },
    { year: "2024", title: "Proyectos Ecológicos", description: "CORPAMAG selecciona cuatro organizaciones comunitarias de Bonda para ejecutar Proyectos enfocados en restauración ecológica, turismo comunitario y conservación de recursos naturales." },
    { year: "2025", title: "Plan de Desarrollo", description: "La alcaldía busca identificar y proponer soluciones a las necesidades de la comunidad, incluyendo mejoras en infraestructura de salud, vías terciarias y saneamiento básico." }
  ];

    // Generar contenido de la línea del tiempo
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        
        const timelineContent = document.createElement('div');
        timelineContent.classList.add('timeline-content');
        
        timelineContent.innerHTML = `
            <h4>${item.year} - ${item.title}</h4>
            <p>${item.description}</p>
        `;
        
        timelineItem.appendChild(timelineContent);
        timelineContainer.appendChild(timelineItem);
    });

    // Datos de lugares históricos
    const lugaresData = [
       
        {
            "id": "iglesiaSantaAna",
            "nombre": "Iglesia Santa Ana de Bonda",
            "descripcion": "La iglesia Santa Ana de Bonda, o San Pablo de Bonda, como la llamaban antes, quizás sea uno de los lugares con mayor valor histórico dentro del corregimiento al reconocerse como una de las más antiguas en Latinoamérica",
            "ubicacion": "Plaza central de Bonda.",
            "imagen": "img/iglesia.webp"
        },
       {
    "id": "cascadaDeBonda",
    "nombre": "Cascada de Bonda",
    "rio_origen": "Río Manzanares",
    "descripcion": "Hermosa cascada formada por las frías aguas del Río Manzanares al pasar por la población de Bonda. Un salto de agua natural rodeado de exuberante vegetación que formaba parte de los sitios sagrados para los indígenas Tayrona, brindando frescura y bienestar.",
    "historia": "El Río Manzanares nace en la vertiente noroccidental de la Sierra Nevada de Santa Marta, en la cuchilla San Lorenzo, a unos 3.000 msnm, por la unión de las quebradas Onaca y Girocasaca. Desciende por Bonda, atraviesa Santa Marta y desemboca en la playa Los Cocos tras recorrer 18 km.",
    "ubicacion": "En el cauce del Río Manzanares a su paso por Bonda (aproximadamente a 3 km al este del centro), Sierra Nevada de Santa Marta.",
    "imagen": "img/cascada-bonda.webp"
},
        {
            "id": "piedraDonama",
            "nombre": "Piedra Donama",
            "descripcion": "Un monolito de 2.5 metros de altura en cuya superficie se conservan varios jeroglíficos en bajo relieve tallados por los Tayrona entre los años 500 y 1525. Estos jeroglíficos representan códigos de la naturaleza, aunque su significado específico se desconoce.",
            "historia": "Tallada por la cultura Tayrona entre los años 500 y 1525. Sus inscripciones representan códigos de la naturaleza, pero su significado sigue siendo desconocido.",
            "ubicacion": "Bonda, Colombia (ubicación general).",
            "imagen": "img/piedra-donama.jpeg"
        },
      {
    "id": "parqueCentralBonda",
    "nombre": "Parque Central de Bonda",
    "descripcion": "Un lugar especial de Bonda es el parque central del corregimiento, rodeado de casas con estructuras coloniales, naturaleza y ofrece tranquilidad para sus visitantes.",
    "historia": "Este parque hace homenaje a la virgen Santa Ana, teniendo la iglesia justo al lado. Representa el corazón histórico y social del corregimiento.",
    "ubicacion": "Centro del corregimiento de Bonda, junto a la Iglesia Santa Ana.",
    "imagen": "img/parque-bonda.jpg"
}
    ];

    // Generar carrusel de lugares
    lugaresData.forEach(lugar => {
        const lugarCard = document.createElement('div');
        lugarCard.classList.add('lugar-card');
        lugarCard.dataset.id = lugar.id;
        
        lugarCard.innerHTML = `
            <img src="${lugar.imagen}" alt="${lugar.nombre}">
            <div class="lugar-card-content">
                <h4>${lugar.nombre}</h4>
            </div>
        `;
        
        lugaresCarousel.appendChild(lugarCard);
        
        // Evento click para mostrar información detallada
        lugarCard.addEventListener('click', () => {
            mostrarInformacionLugar(lugar);
        });
    });

    // Mostrar información del primer lugar por defecto
    mostrarInformacionLugar(lugaresData[0]);

   // Función para mostrar información detallada de un lugar
function mostrarInformacionLugar(lugar) {
    // Construir el contenido HTML con verificación para propiedades opcionales
    let contenidoHTML = `
        <div class="lugar-info-flex">
            <div class="lugar-info-text">
                <h3>${lugar.nombre}</h3>
                <p><strong>Descripción:</strong> ${lugar.descripcion}</p>`;
    // Solo agregar la sección de historia si existe
    if (lugar.historia) {
        contenidoHTML += `<p><strong>Historia:</strong> ${lugar.historia}</p>`;
    }
    
    // Agregar la ubicación y cerrar los divs
    contenidoHTML += `
                <p><strong>Ubicación:</strong> ${lugar.ubicacion}</p>
            </div>
            <div class="lugar-info-media">
                <img src="${lugar.imagen}" alt="${lugar.nombre}">
            </div>
        </div>
    `;
    
    // Actualizar el contenido
    lugaresInfo.innerHTML = contenidoHTML;
    
    // Resaltar la tarjeta seleccionada
    document.querySelectorAll('.lugar-card').forEach(card => {
        if (card.dataset.id === lugar.id) {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        } else {
            card.style.transform = '';
            card.style.boxShadow = '';
        }
    });
    
    lugaresInfo.style.display = 'block';
}

    //animaciones 
    // Aplicamos inmediatamente la animación a las tarjetas existentes
document.addEventListener('DOMContentLoaded', () => {
    console.log("Inicializando animación de tarjetas...");
    
    // Aseguramos que las tarjetas sean visibles inicialmente
    const styleFixed = document.createElement('style');
    styleFixed.textContent = `
      .lugar-card {
        opacity: 1; /* Las tarjetas son visibles por defecto */
        transform: translateY(0);
      }
    `;
    document.head.appendChild(styleFixed);
    
    // Luego agregamos los estilos para la animación
    setTimeout(() => {
        const styleAnim = document.createElement('style');
        styleAnim.textContent = `
          .lugar-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          .lugar-card.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `;
        document.head.appendChild(styleAnim);
        
        // Forzar reflow para aplicar los cambios de CSS
        document.body.offsetHeight;
        
        // Ahora ejecutamos la animación
        const tarjetas = document.querySelectorAll('.lugar-card');
        console.log(`Encontradas ${tarjetas.length} tarjetas para animar`);
        
        tarjetas.forEach((tarjeta, index) => {
            setTimeout(() => {
                tarjeta.classList.add('visible');
                console.log(`Tarjeta ${index} animada`);
            }, 150 * index); // Incrementamos el tiempo entre tarjetas
        });
    }, 100); // Pequeño retraso antes de comenzar
});

// Función para animar tarjetas cuando se generan dinámicamente
function generarCarruselLugares(lugaresData) {
    const lugaresCarousel = document.getElementById('lugares-carousel'); // Asegúrate de tener este elemento
    
    // Limpiamos el carrusel si ya tiene contenido
    lugaresCarousel.innerHTML = '';
    
    // Generamos las tarjetas
    lugaresData.forEach((lugar, index) => {
        const lugarCard = document.createElement('div');
        lugarCard.classList.add('lugar-card');
        // Iniciamos con opacity 0
        lugarCard.style.opacity = '0';
        lugarCard.style.transform = 'translateY(20px)';
        lugarCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        lugarCard.dataset.id = lugar.id;
        
        lugarCard.innerHTML = `
            <img src="${lugar.imagen}" alt="${lugar.nombre}">
            <div class="lugar-card-content">
                <h4>${lugar.nombre}</h4>
            </div>
        `;
        
        lugaresCarousel.appendChild(lugarCard);
        
        // Evento click para mostrar información detallada
        lugarCard.addEventListener('click', () => {
            mostrarInformacionLugar(lugar);
        });
        
        // Aplicamos la animación staggered con un retraso progresivo
        setTimeout(() => {
            lugarCard.style.opacity = '1';
            lugarCard.style.transform = 'translateY(0)';
            console.log(`Tarjeta generada ${index} animada`);
        }, 150 * index); // Cada tarjeta aparece 150ms después que la anterior
    });
}

    // Datos de gastronomía
    const gastronomiaData = [
        {
            nombre: "Pescado Bonda",
            descripcion: "Pescado fresco marinado con hierbas locales y cocinado en hojas de plátano. Se sirve con arroz con coco y patacones.",
            imagen: "img/arroz.jpeg"
        },
        {
            nombre: "Arepa de Huevo",
            descripcion: "Arepa de maíz frita con un huevo dentro. Este plato popular de la costa colombiana tiene en Bonda su versión especial con hierbas aromáticas.",
            imagen: "img/arepa-huevo.jpeg"
        },
        {
            nombre: "Mote de Queso",
            descripcion: "Sopa espesa de ñame y queso costeño con suero, ajo y especias locales. Un plato reconfortante de la gastronomía caribeña.",
            imagen: "img/mote-queso.jpeg"
        },
        {
            nombre: "Dulce de Tamarindo",
            descripcion: "Postre tradicional elaborado con la pulpa del tamarindo, azúcar y especias como canela y clavo. Es uno de los dulces típicos más apreciados.",
            imagen: "img/dulce-tamarindo.jpg"
        },
        {
            nombre: "Chicha de Maíz",
            descripcion: "Bebida fermentada de maíz con raíces indígenas que aún se prepara de manera tradicional en algunas familias de Bonda.",
            imagen: "img/chicha-maiz.webp"
        }
    ];

    // Generar carrusel de gastronomía
    gastronomiaData.forEach(plato => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');
        
        foodCard.innerHTML = `
            <img src="${plato.imagen}" alt="${plato.nombre}">
            <div class="food-card-content">
                <h4>${plato.nombre}</h4>
                <p>${plato.descripcion}</p>
            </div>
        `;
        
        foodCarousel.appendChild(foodCard);
    });



  
});

//animaciones de la seccion historia
     document.addEventListener('DOMContentLoaded', function() {
            // Función para verificar si un elemento está visible en la pantalla
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                    rect.bottom >= 0
                );
            }
            
            // Función para aplicar animaciones al hacer scroll
            function handleScrollAnimations() {
                // Seleccionar todos los elementos con clases de animación
                const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in');
                
                animatedElements.forEach(element => {
                    if (isElementInViewport(element)) {
                        element.classList.add('active');
                    }
                });
            }
            
            // Añadir clases de animación a los elementos existentes
            function setupAnimations() {
                // Animar el encabezado de la sección
                document.querySelector('.section-header .section-title').classList.add('fade-in');
                document.querySelector('.section-header .section-subtitle').classList.add('fade-in', 'delay-1');
                
                // Animar el carrusel
                document.querySelectorAll('.carousel-item').forEach((item, index) => {
                    item.classList.add('fade-in', `delay-${index + 1}`);
                });
                
                // Animar los indicadores del carrusel
                document.querySelectorAll('.carousel-indicators .indicator').forEach((indicator, index) => {
                    indicator.classList.add('scale-in', `delay-${index + 1}`);
                });
                
                // Animar los botones de control
                document.querySelectorAll('.carousel-controls .carousel-button').forEach((button, index) => {
                    button.classList.add('fade-in', `delay-${index + 2}`);
                });
                
                // Animar las tarjetas de cultura
                document.querySelectorAll('.culture-card').forEach((card, index) => {
                    card.classList.add('fade-in', `delay-${index + 1}`);
                });
                
                // Animar la sección de historia cultural
                const historiaImage = document.querySelector('.cultura-historia .historia-image');
                const historiaContent = document.querySelector('.cultura-historia .historia-content');
                
                if (historiaImage) historiaImage.classList.add('slide-left');
                if (historiaContent) historiaContent.classList.add('slide-right');
                
                // Animar los párrafos de la historia
                document.querySelectorAll('.historia-content p').forEach((p, index) => {
                    p.classList.add('fade-in', `delay-${index + 1}`);
                });
            }
            
            // Configurar animaciones
            setupAnimations();
            
            // Activar animaciones iniciales
            handleScrollAnimations();
            
            // Escuchar el evento de scroll
            window.addEventListener('scroll', handleScrollAnimations);
            
            // Animar entrada del carrusel
            function setupCarouselAnimations() {
                const carousel = document.querySelector('.cultura-carousel');
                if (!carousel) return;
                
                carousel.classList.add('fade-in');
                
                // Controles del carrusel
                const nextBtn = document.getElementById('nextBtn');
                const prevBtn = document.getElementById('prevBtn');
                const indicators = document.querySelectorAll('.carousel-indicators .indicator');
                const items = document.querySelectorAll('.carousel-item');
                
                let currentIndex = 0;
                
                // Función para mostrar un elemento específico
                function showItem(index) {
                    // Ocultar todos los elementos
                    items.forEach(item => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateZ(-100px)';
                        item.classList.remove('active');
                    });
                    
                    // Desactivar todos los indicadores
                    indicators.forEach(indicator => {
                        indicator.classList.remove('active');
                    });
                    
                    // Mostrar el elemento seleccionado
                    setTimeout(() => {
                        items[index].style.opacity = '1';
                        items[index].style.transform = 'translateZ(0)';
                        items[index].classList.add('active');
                        indicators[index].classList.add('active');
                    }, 100);
                    
                    currentIndex = index;
                }
                
                // Configurar botones
                nextBtn.addEventListener('click', () => {
                    const nextIndex = (currentIndex + 1) % items.length;
                    showItem(nextIndex);
                });
                
                prevBtn.addEventListener('click', () => {
                    const prevIndex = (currentIndex - 1 + items.length) % items.length;
                    showItem(prevIndex);
                });
                
                // Configurar indicadores
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        showItem(index);
                    });
                });
                
                // Autoplay opcional
                let autoplayInterval = setInterval(() => {
                    const nextIndex = (currentIndex + 1) % items.length;
                    showItem(nextIndex);
                }, 7000); // Cambiar cada 7 segundos
                
                // Detener autoplay al interactuar
                carousel.addEventListener('mouseenter', () => {
                    clearInterval(autoplayInterval);
                });
                
                carousel.addEventListener('mouseleave', () => {
                    autoplayInterval = setInterval(() => {
                        const nextIndex = (currentIndex + 1) % items.length;
                        showItem(nextIndex);
                    }, 7000);
                });
            }
            
            // Iniciar animaciones del carrusel
            setupCarouselAnimations();
        });
//codigo para el himno
document.addEventListener('DOMContentLoaded', function() {
    // Contenedor donde se insertará el himno
    const himnoLyrics = document.getElementById('himno-lyrics');
    
    // Limpiar el contenido actual
    if (himnoLyrics) {
        himnoLyrics.innerHTML = '';
    }
    
    // Datos del himno correcto
    const himnoLetras = [
        {
            tipo: "estrofa",
            numero: "I",
            versos: [
                "Oye Bonda tu edad es centenaria te lo digo con orgullo y lo repito con amor la cultura y fiereza de tu raza con la cual combatiste al español"
            ]
        },
        {
            tipo: "estrofa",
            numero: "II",
            versos: [
                "Oye Bonda viejo corregimiento merodeado por tu río alumbrado por el sol tus regiones que todas son agrícolas lucha y sustento del bomdero labrador"
            ]
        },
        {
            tipo: "coro",
            versos: [
                "Soy bomdero y yo quiero a Bonda Tierra bella que un día me vio nacer y por eso con orgullo lo repito soy bondero y por siempre seré."
            ]
        },
        {
            tipo: "estrofa",
            versos: [
                "Gran estribo de la Sierra Nevada donde habita libremente el picaflor con su fauna y flor incalculable donde canta melodioso el ruiseñor."
            ]
        }
    ];

    // Generar contenido del himno
    himnoLetras.forEach(parte => {
        const estrofa = document.createElement('p');
        estrofa.classList.add('estrofa');
        
        // Agregar número de estrofa si existe
        if (parte.numero) {
            const numeroElement = document.createElement('span');
            numeroElement.classList.add('numero-estrofa');
            numeroElement.textContent = parte.numero;
            estrofa.appendChild(numeroElement);
            estrofa.appendChild(document.createElement('br'));
        }
        
        parte.versos.forEach(verso => {
            const versoElement = document.createElement('span');
            versoElement.classList.add('verso');
            versoElement.textContent = verso;
            estrofa.appendChild(versoElement);
        });
        
        // Agregar clase especial al coro
        if (parte.tipo === "coro") {
            const coroHeader = document.createElement('h4');
            coroHeader.textContent = "Coro";
            const coroDiv = document.createElement('div');
            coroDiv.classList.add('himno-coro');
            coroDiv.appendChild(coroHeader);
            coroDiv.appendChild(estrofa);
            himnoLyrics.appendChild(coroDiv);
        } else {
            himnoLyrics.appendChild(estrofa);
        }
    });
    
    // Agregar autor
    const autor = document.createElement('p');
    autor.classList.add('autor');
    const autorText = document.createElement('span');
    autorText.classList.add('verso');
    autorText.textContent = "Andrés Rafael Melo Santrich 01 04 1985.";
    autor.appendChild(autorText);
    himnoLyrics.appendChild(autor);
    
    // Agregar reproductor de YouTube
    const himnoContainer = document.querySelector('.himno-container');
    if (himnoContainer) {
        // Crear contenedor para el reproductor
        const playerContainer = document.createElement('div');
        playerContainer.classList.add('himno-player-container');
        playerContainer.innerHTML = `
            <div class="himno-player-header">
                <h3>Escucha el Himno de Bonda</h3>
            </div>
            <div class="himno-player">
                <iframe width="100%" height="315" 
                        src="https://www.youtube.com/embed/wNVlfX571u8?si=iz0uhCHuY45CpEeC" 
                        title="Himno de Bonda" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                </iframe>
            </div>
        `;
        
        // Insertar después del contenido del himno
        const himnoContent = document.querySelector('.himno-content');
        if (himnoContent) {
            himnoContent.parentNode.insertBefore(playerContainer, himnoContent.nextSibling);
        } else {
            himnoContainer.appendChild(playerContainer);
        }
    }
});
//codigo para seguir el reccorido en el menu a medida que deciende o vanza 
document.addEventListener('DOMContentLoaded', function() {
  // Activar enlaces de navegación según la sección visible
  const sections = document.querySelectorAll('section[id]');
  const navLinksContainer = document.querySelector('.nav-links'); // Selecciona el contenedor ul

  if (navLinksContainer) { // Verifica si el contenedor existe
    window.addEventListener('scroll', () => {
      let currentPos = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = navLinksContainer.querySelector('a[href*="' + sectionId + '"]'); // Busca el enlace dentro del contenedor

        if (correspondingLink) {
          if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
            correspondingLink.classList.add('active');
          } else {
            correspondingLink.classList.remove('active');
          }
        }
      });
    });
  } else {
    console.error("No se encontró el elemento con la clase '.nav-links'. Asegúrate de que exista en tu HTML.");
  }
});
// codigo para el carrusel de lugares 

 // Funcionalidad del carrusel
        const carouselItems = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;

        // Función para mostrar una diapositiva específica
        function showSlide(index) {
            // Ocultar todas las diapositivas
            carouselItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Desactivar todos los indicadores
            indicators.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Mostrar la diapositiva actual
            carouselItems[index].classList.add('active');
            indicators[index].classList.add('active');
            currentIndex = index;
        }

        // Evento para el botón anterior
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = carouselItems.length - 1;
            }
            showSlide(newIndex);
        });

        // Evento para el botón siguiente
        nextBtn.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= carouselItems.length) {
                newIndex = 0;
            }
            showSlide(newIndex);
        });

        // Evento para los indicadores
        indicators.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Cambio automático de diapositivas
        let carouselInterval = setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= carouselItems.length) {
                newIndex = 0;
            }
            showSlide(newIndex);
        }, 5000);

        // Detener la rotación automática cuando el usuario interactúa con el carrusel
        document.querySelector('.cultura-carousel').addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        // Reanudar la rotación automática cuando el usuario deja de interactuar
        document.querySelector('.cultura-carousel').addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                let newIndex = currentIndex + 1;
                if (newIndex >= carouselItems.length) {
                    newIndex = 0;
                }
                showSlide(newIndex);
            }, 5000);
        });


        
    //codigo del hero 

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    const muteBtn = document.getElementById('muteBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    
    // Comprueba si el navegador soporta video
    const supportsVideo = !!document.createElement('video').canPlayType;
    if (!supportsVideo) {
        document.body.classList.add('no-video');
    }
    
    // Asegura que el video se reproduce automáticamente en diferentes navegadores
    video.play().catch(function(error) {
        console.log("Reproducción automática no permitida:", error);
        // Cambia el ícono de pausa a play ya que el video no está reproduciéndose
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
    
   
    
   
});

//animaciones de la seccion inicio 
// Animaciones para la página de Bonda

// Animaciones avanzadas para la página de Bonda

// Función para detectar cuando un elemento está visible en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
    rect.bottom >= 0
  );
}

// Animaciones específicas para las tarjetas de características
function animateFeatureCards() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach((card, index) => {
    // Si la tarjeta está visible
    if (isElementInViewport(card)) {
      // Aplicar animación con retraso basado en índice
      setTimeout(() => {
        card.classList.add('card-appear');
        
        // Animación para el icono
        const icon = card.querySelector('.icon');
        if (icon) {
          icon.style.opacity = "0";
          icon.style.transform = "scale(0.2) translateY(20px)";
          
          setTimeout(() => {
            icon.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
            icon.style.opacity = "1";
            icon.style.transform = "scale(1.2) translateY(0)";
            
            // Agregar animación específica según la tarjeta
            if (index === 0) { // Ubicación Privilegiada
              setTimeout(() => icon.classList.add('animation-location'), 500);
            } else if (index === 1) { // Rico Patrimonio
              setTimeout(() => icon.classList.add('animation-heritage'), 500);
            } else if (index === 2) { // Naturaleza Exuberante
              setTimeout(() => icon.classList.add('animation-nature'), 500);
            }
          }, 300);
        }
        
        // Animación para el título
        const title = card.querySelector('h3');
        if (title) {
          title.style.opacity = "0";
          title.style.transform = "translateY(20px)";
          
          setTimeout(() => {
            title.style.transition = "all 0.7s ease";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
          }, 500);
        }
        
        // Animación para el párrafo
        const paragraph = card.querySelector('p');
        if (paragraph) {
          paragraph.style.opacity = "0";
          paragraph.style.transform = "translateY(20px)";
          
          setTimeout(() => {
            paragraph.style.transition = "all 0.7s ease";
            paragraph.style.opacity = "1";
            paragraph.style.transform = "translateY(0)";
          }, 700);
        }
      }, index * 200); // Retraso escalonado para cada tarjeta
    }
  });
}

// Aplicar animaciones al hacer scroll
function handleScrollAnimations() {
  // Animaciones estándar
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right, .animate-zoom, .section-divider, .section-title');
  
  animatedElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('animated');
    }
  });
  
  // Animaciones especiales para las tarjetas
  animateFeatureCards();
}

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function() {
  // Crear estilos específicos para animaciones avanzadas
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes floatUpDown {
      0%, 100% { transform: translateY(0) scale(1.2); }
      50% { transform: translateY(-15px) scale(1.4); }
    }
    
    @keyframes rotateAndPulse {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.5); }
      100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes swayLeaf {
      0% { transform: rotate(-15deg) scale(1.2); }
      33% { transform: rotate(0deg) scale(1.3) translateY(-5px); }
      66% { transform: rotate(15deg) scale(1.4) translateY(0); }
      100% { transform: rotate(-15deg) scale(1.2); }
    }
    
    .animation-location {
      animation: floatUpDown 2s ease infinite;
    }
    
    .animation-heritage {
      animation: rotateAndPulse 3s ease infinite;
    }
    
    .animation-nature {
      animation: swayLeaf 3s ease infinite;
    }
    
    .feature-card {
      transform-style: preserve-3d;
      perspective: 1000px;
    }
  `;
  document.head.appendChild(styleSheet);

  // Agregar clases de animación a los elementos
  const sectionHeader = document.querySelector('.section-header');
  if (sectionHeader) {
    sectionHeader.querySelector('.section-title').classList.add('animate-on-scroll');
    sectionHeader.querySelector('.section-divider').classList.add('animate-on-scroll', 'delay-100');
  }
  
  // Aplicar animaciones a la sección de introducción
  const introTitle = document.querySelector('.intro-title');
  if (introTitle) introTitle.classList.add('animate-from-left');
  
  const introDivider = document.querySelector('.intro-divider');
  if (introDivider) introDivider.classList.add('animate-from-left', 'delay-100');
  
  const introParas = document.querySelectorAll('.intro-text p');
  introParas.forEach((para, index) => {
    para.classList.add('animate-from-left', `delay-${(index + 2) * 100}`);
  });
  
  const introFeatures = document.querySelector('.intro-features');
  if (introFeatures) introFeatures.classList.add('animate-from-left', 'delay-400');
  
  const introMedia = document.querySelector('.intro-media');
  if (introMedia) introMedia.classList.add('animate-from-right', 'delay-200');
  
  // Agregar efecto 3D a las tarjetas
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    // Efecto 3D al mover el ratón sobre la tarjeta
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left; // Posición X del cursor dentro de la tarjeta
      const y = e.clientY - rect.top;  // Posición Y del cursor dentro de la tarjeta
      
      // Calcular la rotación basado en la posición del cursor (efecto 3D)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = (x - centerX) / 15;
      const rotateX = (centerY - y) / 15;
      
      // Aplicar la transformación
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      
      // Cambiar la sombra para dar efecto de profundidad
      const shadowX = (x - centerX) / 10;
      const shadowY = (y - centerY) / 10;
      this.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.2)`;
      
      // Efecto brillo basado en posición del cursor
      const icon = this.querySelector('.icon');
      if (icon) {
        const iconX = (x - centerX) / rect.width * 100;
        const iconY = (y - centerY) / rect.height * 100;
        icon.style.textShadow = `${iconX / 5}px ${iconY / 5}px 15px rgba(255, 107, 107, 0.8)`;
      }
    });
    
    // Restaurar cuando se quita el cursor
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
      const icon = this.querySelector('.icon');
      if (icon) {
        icon.style.textShadow = '';
      }
    });
  });
  
  // Iniciar comprobación de animaciones en el scroll
  handleScrollAnimations();
  
  // Agregar el evento de scroll
  window.addEventListener('scroll', handleScrollAnimations);
});

// Efecto parallax avanzado
function advancedParallax() {
  const image = document.querySelector('.main-image img');
  const decorCircle = document.querySelector('.decoration-circle');
  const decorLine = document.querySelector('.decoration-line');
  
  if (image || decorCircle || decorLine) {
    const scrollPosition = window.pageYOffset;
    
    if (image) {
      image.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }
    
    if (decorCircle) {
      decorCircle.style.transform = `translateY(${scrollPosition * -0.03}px) rotate(${scrollPosition * 0.02}deg)`;
    }
    
    if (decorLine) {
      decorLine.style.transform = `translateY(${scrollPosition * 0.08}px)`;
    }
  }
}

// Eventos de scroll para efectos parallax
window.addEventListener('scroll', advancedParallax);


//escritura del titulo bonda
document.addEventListener('DOMContentLoaded', function() {
    // Función para verificar si un elemento está visible en la pantalla
    function isElementVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (
            rect.top <= windowHeight * 0.75 && // El elemento está en el 75% superior de la pantalla
            rect.bottom >= 0 // Y su parte inferior es visible
        );
    }

    // Seleccionamos el título
    const titulo = document.getElementById('bondaTitulo');
    if (titulo) {
        // Guardamos el texto original
        const textoOriginal = titulo.textContent;
        // Limpiamos el título
        titulo.textContent = '';
        // Marcamos el título como no iniciado
        titulo.setAttribute('data-typing-started', 'false');

        // Función para escribir el texto letra por letra
        function typeWriter(elemento, texto, i = 0) {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                setTimeout(() => typeWriter(elemento, texto, i), 50); // Velocidad de escritura
            }
        }

        // Función para revisar si debemos iniciar la animación
        function checkScroll() {
            if (titulo.getAttribute('data-typing-started') === 'false' && isElementVisible(titulo)) {
                // Marcamos como iniciado para no repetir
                titulo.setAttribute('data-typing-started', 'true');
                // Iniciamos la animación de escritura
                typeWriter(titulo, textoOriginal);
                // Eliminamos el detector de scroll una vez iniciada la animación
                window.removeEventListener('scroll', checkScroll);
            }
        }

        // Agregamos detector de scroll
        window.addEventListener('scroll', checkScroll);
        // Verificamos inmediatamente por si el elemento ya está visible
        checkScroll();
    }
});
