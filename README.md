# Rifa solidaria por Osvaldo Terán

Sitio web a beneficio de la operación de Osvaldo Terán. Adaptable a celulares, con siete premios, cálculo del aporte, solicitudes por WhatsApp y afiche descargable.

## Subir a Vercel desde GitHub

Nombre sugerido para el repositorio: **rifa-solidaria-osvaldo-teran**.

1. Crea un repositorio con ese nombre en GitHub y sube el contenido de esta carpeta. `index.html` debe quedar en la raíz del repositorio.
2. En Vercel selecciona **Add New → Project** e importa el repositorio.
3. En **Framework Preset** selecciona **Other**.
4. Deja **Root Directory** en `./`, sin comando de instalación ni compilación. Deja **Output Directory** en `.` si Vercel pide uno.
5. Pulsa **Deploy**. No requiere variables de entorno, base de datos ni dependencias.

El nombre de repositorio no garantiza la disponibilidad del mismo subdominio en Vercel. Puedes elegirlo en la configuración del proyecto.

## Si prefieres usar Git desde tu computador

Después de crear el repositorio vacío en tu cuenta:

```bash
cd rifa-solidaria-osvaldo-teran
git init -b main
git add .
git commit -m "Crear sitio de rifa solidaria por Osvaldo Terán"
git remote add origin https://github.com/TU_USUARIO/rifa-solidaria-osvaldo-teran.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu usuario de GitHub. Si descargaste un repositorio que ya tiene Git, omite la inicialización y el primer commit.

## Editar la página

- Textos, premios, fecha y contacto visible: `index.html`.
- Colores, tamaños y diseño adaptable: `styles.css`.
- Precio y teléfono del mensaje: constantes `PRICE` y `PHONE` al inicio de `script.js`.
- Fotografías de los premios: `assets/premio-01.webp` a `assets/premio-07.webp`.
- Afiche descargable: `assets/afiche-rifa.png`.

Al cambiar el teléfono actualiza también los enlaces `wa.me` y el número visible en `index.html`. Al cambiar el precio actualiza también los textos de la página y el afiche.

## Cómo funciona la participación

El formulario calcula el aporte y abre un mensaje de WhatsApp. No reserva números ni confirma pagos automáticamente. La organización debe confirmar disponibilidad, asignación y pago. Los datos escritos en el formulario no se guardan en el sitio; se incorporan al mensaje que la persona puede enviar por WhatsApp.

La cifra 1.000 del formulario es el límite de una solicitud, no una declaración de cuántos números tiene la rifa. No se publica un total ni un contador de ventas porque esos datos no se han definido.

El **6 de diciembre** se presenta como fecha de lanzamiento según el afiche, no como fecha de sorteo. Antes de difundir, confirma con la organización si debe cambiarse y cuáles serán las condiciones del sorteo.

## Revisión local

Puedes abrir `index.html` directamente en el navegador. Para probar enlaces compartidos utiliza una dirección publicada en HTTPS. El sitio no necesita herramientas de desarrollo para funcionar.
