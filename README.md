# 🏠 Landing Page - Terrenos Samalayuca

Landing page moderna y atractiva para la venta de terrenos en Samalayuca, Ciudad Juárez, Chihuahua. Diseñada para maximizar conversiones y generar leads de calidad.

## ✨ Características

- **Diseño Responsivo**: Optimizada para todos los dispositivos
- **Colores Emocionales**: Paleta de colores cálidos que generan confianza
- **Botones de Acción**: WhatsApp y Facebook integrados
- **Formulario de Contacto**: Con validación y envío automático
- **Webhooks**: Integración con ChatGPT y UltraMsg
- **Animaciones**: Efectos visuales atractivos
- **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Instalación

1. **Clona o descarga** los archivos en tu servidor web
2. **Configura los webhooks** en `script.js` (ver sección de configuración)
3. **Personaliza** el contenido según tus necesidades
4. **Sube** a tu hosting

## ⚙️ Configuración

### 1. Configurar Webhooks

Edita el archivo `script.js` y actualiza las URLs de los webhooks:

```javascript
const WEBHOOK_CONFIG = {
    // Reemplaza con tu URL real del webhook de ChatGPT
    chatgptWebhook: 'https://tu-dominio.com/webhook/chatgpt',
    // Reemplaza con tu URL real del webhook de UltraMsg
    ultraMsgWebhook: 'https://tu-dominio.com/webhook/ultramsg',
    // Token de autenticación (opcional)
    authToken: 'tu-token-secreto-aqui'
};
```

### 2. Configurar WhatsApp

El número de WhatsApp ya está configurado como `6564933033`. Para cambiar:

1. Busca todas las instancias de `6564933033` en `script.js`
2. Reemplaza con tu número (sin espacios ni guiones)

### 3. Configurar Facebook

En `script.js`, línea 35, actualiza la URL de Facebook:

```javascript
const facebookUrl = 'https://www.facebook.com/TuPaginaReal';
```

## 📱 Funcionalidades

### Botones de WhatsApp
- **Botón flotante**: Aparece en la esquina inferior derecha
- **Botones de acción**: En secciones clave de la página
- **Mensaje predefinido**: Incluye información del terreno automáticamente

### Botones de Facebook
- **Enlaces directos**: A tu página de Facebook
- **Tracking**: Registra clicks para análisis

### Formulario de Contacto
- **Validación**: Campos obligatorios
- **Envío automático**: A WhatsApp después del envío
- **Notificaciones**: Feedback visual al usuario

### Webhooks
- **ChatGPT**: Para análisis de leads y automatización
- **UltraMsg**: Para gestión de mensajes
- **Eventos rastreados**:
  - Clicks en WhatsApp/Facebook
  - Envío de formularios
  - Visitas a la página
  - Tiempo en página
  - Usuarios saliendo

## 🎨 Personalización

### Colores
Los colores están definidos en `index.html`:

```javascript
colors: {
    'terracotta': '#E07A5F',    // Naranja cálido
    'sage': '#81B29A',          // Verde sage
    'cream': '#F2CC8F',         // Crema
    'warm-gray': '#F4F1DE'      // Gris cálido
}
```

### Contenido
- **Título**: "Tu Terreno en Samalayuca"
- **Precio**: $95,000 MXN
- **Superficie**: 1000m²
- **Servicios**: Agua y luz incluidas

### Imágenes
Para agregar imágenes:
1. Coloca las imágenes en una carpeta `images/`
2. Actualiza las rutas en el HTML
3. Optimiza las imágenes para web

## 📊 Análisis y Métricas

La página incluye tracking automático de:

- **Visitantes únicos**
- **Tiempo en página**
- **Clicks en botones**
- **Envíos de formulario**
- **Secciones más visitadas**

## 🔧 Desarrollo

### Estructura de archivos:
```
├── index.html          # Página principal
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

### Tecnologías utilizadas:
- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de estilos
- **JavaScript**: Funcionalidad interactiva
- **Font Awesome**: Iconos
- **Webhooks**: Integración con servicios externos

## 🚀 Despliegue

### Opciones de hosting:
1. **Netlify**: Drag & drop de archivos
2. **Vercel**: Integración con Git
3. **GitHub Pages**: Gratuito para repositorios públicos
4. **Hosting tradicional**: Subir archivos via FTP

### Configuración recomendada:
- **HTTPS**: Obligatorio para webhooks
- **Dominio personalizado**: Mejor para SEO
- **CDN**: Para mejor rendimiento

## 📞 Soporte

Para configurar los webhooks con ChatGPT y UltraMsg:

### ChatGPT Webhook:
```javascript
// Ejemplo de payload enviado
{
    "tipo": "whatsapp_click",
    "datos": {
        "telefono": "6564933033",
        "mensaje": "Mensaje predefinido...",
        "timestamp": "2024-01-01T12:00:00.000Z"
    },
    "userAgent": "Mozilla/5.0...",
    "url": "https://tu-dominio.com"
}
```

### UltraMsg Webhook:
```javascript
// Mismo formato de payload
// Configura en tu panel de UltraMsg
```

## 🎯 Optimización de Conversión

La página incluye técnicas de optimización:

1. **Urgencia**: "Terrenos agotándose rápidamente"
2. **Social Proof**: Testimonios de clientes
3. **Beneficios claros**: Lista de ventajas
4. **Múltiples CTAs**: Botones en diferentes secciones
5. **Formulario simple**: Solo campos esenciales
6. **Notificaciones**: Feedback inmediato

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔒 Seguridad

- **Validación de formularios**: Lado cliente y servidor
- **Sanitización**: Limpieza de datos de entrada
- **HTTPS**: Obligatorio para webhooks
- **Tokens**: Autenticación opcional

## 📈 Próximas Mejoras

- [ ] Galería de fotos de terrenos
- [ ] Mapa interactivo de ubicación
- [ ] Calculadora de financiamiento
- [ ] Chat en vivo
- [ ] Integración con CRM
- [ ] A/B testing

---

**¡Listo para generar leads de calidad en Samalayuca!** 🏠✨ 