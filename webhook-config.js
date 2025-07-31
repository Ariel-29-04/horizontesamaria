// Configuración de Webhooks para ChatGPT y UltraMsg
// Copia este archivo y renómbralo como webhook-config.js
// Luego actualiza las URLs con tus endpoints reales

const WEBHOOK_CONFIG = {
    // ========================================
    // CONFIGURACIÓN DE WEBHOOKS
    // ========================================
    
    // Webhook para ChatGPT
    // Reemplaza con tu URL real del webhook de ChatGPT
    chatgptWebhook: 'https://tu-dominio.com/webhook/chatgpt',
    
    // Webhook para UltraMsg
    // Reemplaza con tu URL real del webhook de UltraMsg
    ultraMsgWebhook: 'https://tu-dominio.com/webhook/ultramsg',
    
    // Token de autenticación (opcional pero recomendado)
    authToken: 'tu-token-secreto-aqui',
    
    // ========================================
    // CONFIGURACIÓN DE WHATSAPP
    // ========================================
    
    // Número de WhatsApp (sin espacios ni guiones)
    whatsappNumber: '6564933033',
    
    // Mensaje predefinido para WhatsApp
    whatsappMessage: `¡Hola! Estoy interesado en los terrenos de Samalayuca. 
Me gustaría obtener más información sobre:
• Precio: $95,000 MXN
• Superficie: 1000m²
• Servicios: Agua y luz incluidas

¿Podrían contactarme?`,
    
    // ========================================
    // CONFIGURACIÓN DE FACEBOOK
    // ========================================
    
    // URL de tu página de Facebook
    facebookUrl: 'https://www.facebook.com/TerrenosSamalayuca',
    
    // ========================================
    // CONFIGURACIÓN DE EVENTOS
    // ========================================
    
    // Eventos que se envían a los webhooks
    eventos: {
        whatsapp_click: {
            descripcion: 'Usuario hizo click en botón de WhatsApp',
            datos: ['telefono', 'mensaje', 'timestamp']
        },
        facebook_click: {
            descripcion: 'Usuario hizo click en botón de Facebook',
            datos: ['url', 'timestamp']
        },
        formulario_contacto: {
            descripcion: 'Usuario envió formulario de contacto',
            datos: ['nombre', 'telefono', 'mensaje']
        },
        pagina_visitada: {
            descripcion: 'Nueva visita a la página',
            datos: ['visitantes', 'url']
        },
        tiempo_en_pagina: {
            descripcion: 'Tiempo que el usuario pasó en la página',
            datos: ['tiempo', 'url']
        },
        usuario_saliendo: {
            descripcion: 'Usuario está por salir de la página',
            datos: ['tiempo_en_pagina']
        },
        lead_automatico: {
            descripcion: 'Lead generado automáticamente',
            datos: ['tipo', 'tiempo_en_pagina', 'secciones_visitadas']
        }
    }
};

// ========================================
// EJEMPLOS DE CONFIGURACIÓN
// ========================================

// Ejemplo 1: Webhook con autenticación básica
const ejemplo1 = {
    chatgptWebhook: 'https://api.openai.com/v1/webhooks/terrenos-samalayuca',
    ultraMsgWebhook: 'https://api.ultramsg.com/webhook/terrenos-samalayuca',
    authToken: 'sk-1234567890abcdef'
};

// Ejemplo 2: Webhook con parámetros personalizados
const ejemplo2 = {
    chatgptWebhook: 'https://tu-servidor.com/webhook/chatgpt?source=samalayuca&version=1.0',
    ultraMsgWebhook: 'https://tu-servidor.com/webhook/ultramsg?source=samalayuca&version=1.0',
    authToken: 'Bearer tu-token-jwt-aqui'
};

// Ejemplo 3: Webhook con múltiples endpoints
const ejemplo3 = {
    chatgptWebhook: 'https://webhook.site/tu-id-unico-para-chatgpt',
    ultraMsgWebhook: 'https://webhook.site/tu-id-unico-para-ultramsg',
    authToken: 'webhook-secret-key'
};

// ========================================
// FORMATO DE PAYLOAD ENVIADO
// ========================================

/*
Los webhooks reciben datos en este formato:

{
    "tipo": "whatsapp_click",
    "datos": {
        "telefono": "6564933033",
        "mensaje": "Mensaje predefinido...",
        "timestamp": "2024-01-01T12:00:00.000Z"
    },
    "timestamp": "2024-01-01T12:00:00.000Z",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...",
    "url": "https://tu-dominio.com"
}

*/

// ========================================
// INSTRUCCIONES DE CONFIGURACIÓN
// ========================================

/*
1. COPIA ESTE ARCHIVO:
   cp webhook-config.js webhook-config-real.js

2. EDITA LAS URLs:
   - Reemplaza 'tu-dominio.com' con tu dominio real
   - Actualiza el token de autenticación
   - Verifica el número de WhatsApp

3. INTEGRA CON SCRIPT.JS:
   - Copia la configuración al archivo script.js
   - O importa este archivo en script.js

4. PRUEBA LOS WEBHOOKS:
   - Usa webhook.site para pruebas
   - Verifica que los datos lleguen correctamente
   - Configura ChatGPT y UltraMsg con las URLs finales

5. MONITOREA:
   - Revisa los logs de tu servidor
   - Verifica que los eventos se envíen
   - Ajusta la configuración según sea necesario
*/

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBHOOK_CONFIG;
} else {
    window.WEBHOOK_CONFIG = WEBHOOK_CONFIG;
} 