// Configuración del webhook para ChatGPT y UltraMsg
const WEBHOOK_CONFIG = {
    // Webhook para ChatGPT - Reemplaza con tu URL real
    chatgptWebhook: 'https://tu-dominio.com/webhook/chatgpt',
    // Webhook para UltraMsg - Reemplaza con tu URL real  
    ultraMsgWebhook: 'https://tu-dominio.com/webhook/ultramsg',
    // Token de autenticación (opcional)
    authToken: 'tu-token-secreto-aqui'
};

// Función para contactar por WhatsApp
function contactarWhatsApp() {
    const telefono = '6564933033';
    const mensaje = encodeURIComponent(
        '¡Hola! Estoy interesado en los terrenos de Samalayuca. ' +
        'Me gustaría obtener más información sobre:\n' +
        '• Precio: $95,000 MXN\n' +
        '• Superficie: 1000m²\n' +
        '• Servicios: Agua y luz incluidas\n\n' +
        '¿Podrían contactarme?'
    );
    
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
    
    // Enviar evento al webhook
    enviarEventoWebhook('whatsapp_click', {
        telefono: telefono,
        mensaje: mensaje,
        timestamp: new Date().toISOString()
    });
}

// Función para contactar por Facebook
function contactarFacebook() {
    // Reemplaza con tu URL de Facebook real
    const facebookUrl = 'https://www.facebook.com/TerrenosSamalayuca';
    window.open(facebookUrl, '_blank');
    
    // Enviar evento al webhook
    enviarEventoWebhook('facebook_click', {
        url: facebookUrl,
        timestamp: new Date().toISOString()
    });
}

// Función para enviar eventos al webhook
async function enviarEventoWebhook(tipo, datos) {
    try {
        const payload = {
            tipo: tipo,
            datos: datos,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };

        // Enviar a webhook de ChatGPT
        await fetch(WEBHOOK_CONFIG.chatgptWebhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WEBHOOK_CONFIG.authToken}`
            },
            body: JSON.stringify(payload)
        });

        // Enviar a webhook de UltraMsg
        await fetch(WEBHOOK_CONFIG.ultraMsgWebhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WEBHOOK_CONFIG.authToken}`
            },
            body: JSON.stringify(payload)
        });

        console.log('Evento enviado al webhook:', tipo);
    } catch (error) {
        console.error('Error enviando evento al webhook:', error);
    }
}

// Función para manejar el formulario de contacto
function manejarFormularioContacto(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validar campos
    if (!nombre || !telefono || !mensaje) {
        mostrarNotificacion('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Enviar datos al webhook
    enviarEventoWebhook('formulario_contacto', {
        nombre: nombre,
        telefono: telefono,
        mensaje: mensaje
    });
    
    // Mostrar mensaje de éxito
    mostrarNotificacion('¡Mensaje enviado! Te contactaremos pronto.', 'success');
    
    // Limpiar formulario
    document.getElementById('contactForm').reset();
    
    // Opcional: Redirigir a WhatsApp con los datos del formulario
    setTimeout(() => {
        const mensajeWhatsApp = encodeURIComponent(
            `Hola, soy ${nombre}.\n` +
            `Mi teléfono es: ${telefono}\n\n` +
            `Mensaje: ${mensaje}\n\n` +
            `Estoy interesado en los terrenos de Samalayuca.`
        );
        window.open(`https://wa.me/6564933033?text=${mensajeWhatsApp}`, '_blank');
    }, 2000);
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Configurar colores según el tipo
    switch (tipo) {
        case 'success':
            notificacion.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notificacion.className += ' bg-red-500 text-white';
            break;
        default:
            notificacion.className += ' bg-blue-500 text-white';
    }
    
    notificacion.innerHTML = `
        <div class="flex items-center">
            <span class="mr-2">
                ${tipo === 'success' ? '✓' : tipo === 'error' ? '✗' : 'ℹ'}
            </span>
            <span>${mensaje}</span>
        </div>
    `;
    
    // Agregar al DOM
    document.body.appendChild(notificacion);
    
    // Animar entrada
    setTimeout(() => {
        notificacion.classList.remove('translate-x-full');
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notificacion.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 5000);
}

// Función para animar elementos al hacer scroll
function animarElementosAlScroll() {
    const elementos = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
}

// Función para contar visitantes
function contarVisitante() {
    let visitantes = localStorage.getItem('visitantes_samalayuca') || 0;
    visitantes = parseInt(visitantes) + 1;
    localStorage.setItem('visitantes_samalayuca', visitantes);
    
    // Enviar estadística al webhook
    enviarEventoWebhook('pagina_visitada', {
        visitantes: visitantes,
        url: window.location.href
    });
}

// Función para rastrear tiempo en la página
function rastrearTiempoEnPagina() {
    const tiempoInicio = Date.now();
    
    window.addEventListener('beforeunload', () => {
        const tiempoTotal = Date.now() - tiempoInicio;
        enviarEventoWebhook('tiempo_en_pagina', {
            tiempo: tiempoTotal,
            url: window.location.href
        });
    });
}

// Función para crear efecto de partículas en el hero
function crearEfectoParticulas() {
    const hero = document.querySelector('#inicio');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.className = 'absolute w-2 h-2 bg-white bg-opacity-20 rounded-full';
        particula.style.left = Math.random() * 100 + '%';
        particula.style.top = Math.random() * 100 + '%';
        particula.style.animation = `flotar ${Math.random() * 10 + 10}s infinite linear`;
        
        hero.appendChild(particula);
    }
}

// Función para agregar CSS de animaciones
function agregarAnimacionesCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes flotar {
            0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.6s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Función para inicializar la aplicación
function inicializarApp() {
    // Agregar animaciones CSS
    agregarAnimacionesCSS();
    
    // Crear efecto de partículas
    crearEfectoParticulas();
    
    // Contar visitante
    contarVisitante();
    
    // Rastrear tiempo en página
    rastrearTiempoEnPagina();
    
    // Configurar formulario
    const formulario = document.getElementById('contactForm');
    if (formulario) {
        formulario.addEventListener('submit', manejarFormularioContacto);
    }
    
    // Agregar clase para animaciones al scroll
    const elementosAnimables = document.querySelectorAll('.bg-warm-gray, .bg-white, .bg-gradient-to-r');
    elementosAnimables.forEach(elemento => {
        elemento.classList.add('animate-on-scroll');
    });
    
    // Iniciar animaciones al scroll
    animarElementosAlScroll();
    
    // Configurar navegación suave
    const enlaces = document.querySelectorAll('a[href^="#"]');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const objetivo = document.querySelector(enlace.getAttribute('href'));
            if (objetivo) {
                objetivo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        mostrarNotificacion('¡Bienvenido! Descubre tu terreno ideal en Samalayuca', 'success');
    }, 1000);
}

// Función para generar leads automáticamente
function generarLeadAutomatico() {
    // Simular interacción del usuario después de 30 segundos
    setTimeout(() => {
        if (document.visibilityState === 'visible') {
            enviarEventoWebhook('lead_automatico', {
                tipo: 'usuario_interesado',
                tiempo_en_pagina: 30000,
                secciones_visitadas: ['hero', 'beneficios']
            });
        }
    }, 30000);
}

// Función para optimizar conversión
function optimizarConversion() {
    // Detectar si el usuario está por salir
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0) {
            mostrarNotificacion('¡Espera! ¿Te gustaría recibir información especial sobre nuestros terrenos?', 'info');
            
            // Enviar evento de salida
            enviarEventoWebhook('usuario_saliendo', {
                tiempo_en_pagina: Date.now() - window.performance.timing.navigationStart
            });
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    inicializarApp();
    generarLeadAutomatico();
    optimizarConversion();
});

// Exportar funciones para uso global
window.contactarWhatsApp = contactarWhatsApp;
window.contactarFacebook = contactarFacebook;
window.mostrarNotificacion = mostrarNotificacion;

// Configuración del webhook para desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Modo desarrollo activado');
    console.log('📞 Número de WhatsApp: 6564933033');
    console.log('🌐 Webhook ChatGPT:', WEBHOOK_CONFIG.chatgptWebhook);
    console.log('📱 Webhook UltraMsg:', WEBHOOK_CONFIG.ultraMsgWebhook);
    console.log('💡 Para configurar los webhooks, edita las URLs en script.js');
} 