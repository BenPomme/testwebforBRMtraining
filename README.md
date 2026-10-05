# testwebforBRMtraining

Sitio web ficticio de un gimnasio, **FORJA Club de Entrenamiento**, creado para probar
funciones de BabyRock (BRM Social): detección de negocio, extracción de datos de contacto,
reseñas, precios, horarios y flujos de WhatsApp.

- **Sitio publicado:** https://benpomme.github.io/testwebforBRMtraining/
- **Contenido:** página única estática (`index.html`, `styles.css`, `script.js`).
- **Despliegue:** GitHub Pages desde la rama `main`, carpeta raíz, sin build.

## Importante

Todo el contenido es inventado: el negocio, la dirección, el teléfono, el email y las
reseñas no son reales. El formulario de contacto no envía datos a ningún servidor.
No debe usarse como sitio de producción ni publicarse como si fuera un negocio real.

## Uso para pruebas

El sitio incluye de forma deliberada, y en formato visible y estructurado (JSON-LD):

- Nombre del negocio, tipo (gimnasio), dirección y coordenadas.
- Teléfono, email, enlace `tel:`, enlace `wa.me` y botón flotante de WhatsApp.
- Horario de apertura y horario semanal de clases.
- Precios por planes con moneda y periodicidad.
- Opiniones con puntuación y número de reseñas.

## Desarrollo local

No hay dependencias ni proceso de compilación:

```bash
python3 -m http.server 4173
```

Y abrir http://localhost:4173

Para actualizar el sitio publicado, edita los archivos y haz commit en `main`:

```bash
git add .
git commit -m "Actualiza el sitio de pruebas"
git push origin main
```
