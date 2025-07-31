# 🚀 Guía de Despliegue en Vercel

## 📋 Pasos para Publicar tu Landing Page

### **Opción 1: Despliegue Directo (Recomendado para principiantes)**

1. **Prepara tus archivos:**
   - Asegúrate de tener todos estos archivos en una carpeta:
     - `index.html`
     - `script.js`
     - `README.md`
     - `webhook-config.js`
     - `vercel.json`
     - `package.json`
     - `.gitignore`

2. **Ve a Vercel:**
   - Abre [vercel.com](https://vercel.com)
   - Crea una cuenta gratuita (puedes usar GitHub, GitLab o email)

3. **Crea nuevo proyecto:**
   - Haz clic en "New Project"
   - Selecciona "Upload" o arrastra tu carpeta

4. **Configura el proyecto:**
   - **Project Name**: `terrenos-samalayuca` (o el nombre que prefieras)
   - **Framework Preset**: `Other`
   - **Root Directory**: `/` (deja por defecto)
   - **Build Command**: Deja vacío
   - **Output Directory**: Deja vacío

5. **Despliega:**
   - Haz clic en "Deploy"
   - Espera unos segundos
   - ¡Tu sitio estará listo!

### **Opción 2: Con GitHub (Recomendado para desarrolladores)**

1. **Crea un repositorio en GitHub:**
   ```bash
   # En tu terminal, navega a tu carpeta del proyecto
   cd "ruta/a/tu/proyecto"
   
   # Inicializa Git
   git init
   
   # Agrega todos los archivos
   git add .
   
   # Haz el primer commit
   git commit -m "Primera versión de la landing page"
   
   # Crea un repositorio en GitHub y conecta
   git remote add origin https://github.com/tu-usuario/terrenos-samalayuca.git
   git branch -M main
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración

3. **Configura variables de entorno (opcional):**
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Agrega si necesitas configurar webhooks

### **Opción 3: Con Vercel CLI**

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Despliega desde tu terminal:**
   ```bash
   # Navega a tu carpeta del proyecto
   cd "ruta/a/tu/proyecto"
   
   # Despliega
   vercel
   
   # Sigue las instrucciones en pantalla
   ```

## ⚙️ Configuración Post-Despliegue

### **1. Configurar Webhooks**

Una vez desplegado, actualiza las URLs en `script.js`:

```javascript
const WEBHOOK_CONFIG = {
    // Reemplaza con tu URL real de Vercel
    chatgptWebhook: 'https://tu-proyecto.vercel.app/webhook/chatgpt',
    ultraMsgWebhook: 'https://tu-proyecto.vercel.app/webhook/ultramsg',
    authToken: 'tu-token-secreto-aqui'
};
```

### **2. Dominio Personalizado (Opcional)**

1. Ve al dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a Settings > Domains
4. Agrega tu dominio personalizado

### **3. Variables de Entorno**

Para configurar webhooks de forma segura:

1. Ve a Settings > Environment Variables
2. Agrega:
   - `WEBHOOK_CHATGPT_URL`
   - `WEBHOOK_ULTRAMSG_URL`
   - `AUTH_TOKEN`

## 🔧 Solución de Problemas

### **Error: "Build failed"**
- Verifica que todos los archivos estén en la raíz del proyecto
- Asegúrate de que `index.html` sea el archivo principal

### **Error: "Page not found"**
- Verifica que `index.html` esté en la raíz
- Revisa que el archivo `vercel.json` esté configurado correctamente

### **Los webhooks no funcionan**
- Asegúrate de que las URLs usen HTTPS
- Verifica que los endpoints estén configurados correctamente

### **Problemas con CSS/JS**
- Verifica que las rutas en `index.html` sean correctas
- Asegúrate de que Tailwind CSS se cargue correctamente

## 📊 Monitoreo

### **Analytics de Vercel:**
- Ve a tu dashboard de Vercel
- Revisa la pestaña "Analytics" para ver visitas
- Monitorea el rendimiento en "Speed Insights"

### **Logs:**
- Ve a la pestaña "Functions" para ver logs de webhooks
- Revisa "Deployments" para ver el historial de despliegues

## 🚀 Optimizaciones

### **Performance:**
- Tu sitio ya está optimizado con Vercel
- CDN automático incluido
- Compresión automática de archivos

### **SEO:**
- HTTPS automático
- Headers de seguridad configurados
- Meta tags ya incluidos en el HTML

## 📱 Pruebas

### **Antes de publicar:**
1. Abre `index.html` en tu navegador local
2. Verifica que todos los botones funcionen
3. Prueba el formulario de contacto
4. Verifica que sea responsivo

### **Después del despliegue:**
1. Visita tu URL de Vercel
2. Prueba en diferentes dispositivos
3. Verifica que los webhooks funcionen
4. Revisa la consola del navegador

## 🎯 URLs de Ejemplo

Tu sitio se verá así:
- **URL de desarrollo**: `https://tu-proyecto.vercel.app`
- **URL personalizada**: `https://terrenos-samalayuca.com` (si configuras dominio)

## 💡 Consejos Adicionales

1. **Backup**: Mantén una copia local de todos los archivos
2. **Versionado**: Usa Git para control de versiones
3. **Testing**: Prueba en diferentes navegadores
4. **Monitoreo**: Revisa regularmente los analytics

---

**¡Tu landing page estará lista en minutos!** 🚀✨ 