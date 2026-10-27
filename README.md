# ELEGUA / Tres formas de disfrutar

Web estática de Cafetería Pastelería Heladería Elegua. HTML5, CSS3 y JavaScript vanilla, sin dependencias de ejecución, compilación, rastreadores ni servicios tipográficos externos. Todos los recursos visuales están guardados localmente. No se ha realizado ningún despliegue.

## Abrir

Abre `index.html` con Live Server. También es posible abrirlo directamente: la copia automática del teléfono puede no estar disponible en `file://`, por lo que se ofrece un campo de selección manual. No requiere instalación.

## Archivos

- `index.html`: contenido, metadatos y datos estructurados LocalBusiness.
- `css/style.css`: identidad, composiciones y responsive.
- `css/fonts/`: Syne y DM Sans variables, con sus respectivas licencias SIL Open Font License.
- `js/script.js`: navegación móvil accesible, estado del recorrido, copia del teléfono y año.
- `img/`: tres fotografías JPEG optimizadas, decodificadas y verificadas.
- `favicon.svg`: símbolo vectorial propio.

## Información comercial e investigación

Consulta realizada el **27 de octubre de 2026**. El nombre, la dirección y el teléfono se han contrastado con fichas públicas y los datos facilitados en el encargo:

- Nombre facilitado: Cafetería Pastelería Heladería Elegua.
- Los Membrillos, 02, 11670 El Bosque, Cádiz.
- 603 299 189 (`tel:+34603299189`).

Fuentes:

1. [Restaurant Guru](https://restaurantguru.com/Cafeteria-Pasteleria-Heladeria-Elegua-El-Bosque-Andalusia): coincide en nombre, dirección y teléfono. Indica **cierre permanente**.
2. [Wanderlog](https://wanderlog.com/place/details/10706064/cafeter%C3%ADa-pasteleria-heladeria-elegua): coincide en dirección y teléfono. También indica **cierre permanente**.
3. [Tripadvisor](https://www.tripadvisor.com/Restaurant_Review-g608974-d27822167-Reviews-Cafeteria_Pasteleria_Restaurante_Elegua-El_Bosque_Sierra_de_Grazalema_Natural_Pa.html): utiliza la variante Cafetería Pastelería Restaurante Elegua y coincide en dirección y teléfono; mantiene horarios. La ficha figura sin reclamar.

**La actividad actual no ha podido confirmarse.** Las fuentes se contradicen. Se incluye una indicación visible para confirmar actividad y horario antes de desplazarse. La web no afirma que el negocio esté abierto ni publica horarios. El teléfono y la dirección coinciden en directorios, pero no se ha llamado al establecimiento.

No se ha localizado una carta oficial actual verificable, un perfil social oficial inequívoco ni fotografías del local con permiso de reutilización comprobable. No se publican productos, sabores, precios, servicios, reseñas, reservas, pedidos, WhatsApp, email ni historia. Las tres actividades se presentan como parte del nombre facilitado, sin dar por confirmada su disponibilidad actual.

## Fotografías y licencias

Las fotografías son de archivo y **no pertenecen a Elegua ni representan su local o su oferta**. Se informa en la portada, las secciones, los textos alternativos y los créditos. No se han reutilizado imágenes de Paquí o Marchenilla.

| Archivo | Autor y página original | Recurso original | Imagen local |
| --- | --- | --- | --- |
| `img/cafe.jpg` | [Jeremy Yap](https://unsplash.com/photos/selective-focus-photography-of-latte-in-teacup-jn-HaGWe4yw) | `photo-1485808191679-5f86510681a2` | JPEG, 1400 × 2100, 270 684 bytes |
| `img/pasteleria.jpg` | [Conor Brown](https://unsplash.com/photos/a-bunch-of-croissants-that-are-on-a-table-sqkXyyj4WdE) | `photo-1623334044303-241021148842` | JPEG, 1600 × 1067, 470 249 bytes |
| `img/heladeria.jpg` | [Ian Dooley](https://unsplash.com/photos/strawberry-ice-cream-on-cone-TLD6iCOlyb0) | `photo-1497034825429-c343d7c6a68f` | JPEG, 1400 × 2100, 201 884 bytes |

Las tres páginas identifican las imágenes como gratuitas bajo la [licencia Unsplash](https://unsplash.com/license), que permite su uso comercial. Se descargaron desde `images.unsplash.com/<recurso>?fm=jpg&fit=crop&w=<ancho>&q=85`, solicitando conversión JPEG y reducción de tamaño al servidor de imágenes. Se verificaron firma JPEG, dimensiones y decodificación con System.Drawing; también se decodificaron en Chrome y se comprobó su visualización. No se renombró HTML ni se cambiaron extensiones para simular conversiones. Peso total de fotografías: aproximadamente 943 kB.

Tipografías: [Syne](https://github.com/google/fonts/tree/main/ofl/syne) y [DM Sans](https://github.com/google/fonts/tree/main/ofl/dmsans), descargadas del repositorio Google Fonts. Sus licencias completas acompañan los archivos en `css/fonts/`.

## Diseño y originalidad

Portada con nombre íntegro en su propio espacio y tres encuadres separados. Navegación por actividades con señales geométricas. Cafetería utiliza una composición vertical cálida, ritmo de barra y transición de contorno; pastelería emplea una vitrina panorámica con escalas diferentes y zoom fotográfico; heladería utiliza órbita, encuadre circular y giro suave al interactuar. El contacto adopta una composición clara con panel de teléfono de contorno curvo. No hay carruseles, scroll secuestrado ni contenido oculto por animación.

Se compararon visualmente en Chrome las portadas locales de **Pastelería Paquí y Panadería Marchenilla** a 1440 px. Elegua utiliza una familia tipográfica distinta, nombre sin superposición fotográfica, navegación superior por actividades y un cierre diferente. Se revisaron además sus fuentes locales y la estructura HTML de Bar Majaceite. No se ha realizado una comparación visual exhaustiva con todos los demás proyectos del workspace. Ningún archivo de esos proyectos ha sido modificado.

## Verificación ejecutada

Chrome headless local, mediante protocolo DevTools, en **375, 768, 1440 y 1920 px**:

- ELEGUA íntegro dentro del viewport y ausencia de elementos desbordados horizontalmente en los cuatro tamaños.
- Fotografías cargadas y decodificadas; tipografías locales cargadas.
- Enlaces internos con destinos existentes y todos los enlaces telefónicos con el número correcto.
- Apertura del menú móvil, cierre con Escape y devolución del foco, cierre al seleccionar un enlace.
- Copia mediante Clipboard API comprobada con una implementación controlada de la API; estado de éxito y texto correctos. No se inspeccionó el portapapeles del sistema operativo.
- Alternativa manual ejecutada al deshabilitar la API: campo visible y número seleccionado.
- `prefers-reduced-motion: reduce` desactiva el desplazamiento suave y las transiciones.
- Con JavaScript deshabilitado, navegación visible, contenido e imágenes accesibles y ausencia de scroll horizontal en móvil.
- Sin excepciones JavaScript durante las pruebas; `node --check js/script.js` correcto.
- URL de Google Maps comprobada: búsqueda por nombre y dirección, sin coordenadas inventadas. No se probó una ruta real ni una llamada telefónica.

Se revisaron visualmente las capturas completas de Elegua en móvil, tableta y escritorio. Los registros y capturas de trabajo están en `.qa/`, excluido de Git. El servidor temporal y Chrome de pruebas se cerraron al finalizar.

Accesibilidad implementada: HTML semántico, salto de contenido, textos alternativos, controles nativos, foco visible, `aria-expanded`, estado de copia anunciado y navegación operable por teclado. No se ha realizado una auditoría con lector de pantalla ni una certificación WCAG.

## Antes de una futura publicación

Confirmar con la propiedad la actividad actual y los datos comerciales. Al disponer de un dominio real, completar `og:url`, canonical y una URL absoluta de `og:image`; actualmente se usan rutas relativas por tratarse de una entrega local sin dominio ni despliegue.
