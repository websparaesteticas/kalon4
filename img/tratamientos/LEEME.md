# Fotos de tratamientos

Cada archivo aparece solo en su tarjeta de `servicios.html`. Si el archivo no existe, la tarjeta se muestra sin foto (no queda un hueco roto). Para sumar una: guardarla acá con el nombre exacto de la tabla.

- Nombre exacto, en minúscula y sin tildes ni ñ, formato `.jpg`.
- Horizontal 4:3, 900 x 675 px, idealmente menos de 150 KB.
- Se pueden usar rostros de clientas y del equipo (decisión de Matías, 2026-09-18).
- Sin ropa de marca ajena en cuadro (en los clips faciales la clienta lleva una remera "ARIZONA": se encuadró por encima).

## Formatos (2026-10-01) — leer antes de cambiar una foto

Cada foto existe en tres archivos: `<nombre>.jpg` (respaldo para navegadores viejos), `<nombre>-480.webp` y `<nombre>-900.webp` (o un solo `.webp` al tamaño nativo si la foto es más chica). El navegador elige el WebP del tamaño justo; el `.jpg` casi nunca se descarga. **Si se cambia una foto, hay que regenerar también sus `.webp`**, o la web va a seguir mostrando la vieja. Si la foto nueva tiene otra medida, actualizar `width`/`height` y el `srcset` de su `<picture>` en `servicios.html`. Calidad usada: JPG 80 progresivo, WebP 78. Respaldo de las fotos anteriores a la compresión en `../respaldo-img-2026-10-01/`.

## Estado (2026-09-18)

Tienen foto 20 de 21 (falta soft gel): 13 salen de video/foto ya filmados en el local (`videos/` y planos ya cortados de uñas) y 7 son de stock (2 de Unsplash, 1 de Pexels, y las de cera, lifting, dermaplaning, exosomas y belleza de manos que eligió Matías, ver abajo).

**2026-09-30:** la foto de cera que había (sacada del material propio) mostraba gel, no cera; se reemplazó por `depicera.jpg` (elegida por Matías) y el tratamiento pasó a llamarse "Depilación con cera" (antes "Cera de miel").

| Servicio | Tratamiento | Archivo | Estado |
|---|---|---|---|
| Depilación | Depilación con cera | `cera.jpg` | **stock** |
| Depilación | Depilación definitiva | `depilacion-definitiva.jpg` | listo |
| Manicuría | Manicuría básica | `manicuria-basica.jpg` | listo, confirmar técnica |
| Manicuría | Semipermanente | `semipermanente.jpg` | listo, confirmar técnica |
| Manicuría | Kapping | `kapping.jpg` | listo (era la foto de soft gel, corregido por Matías 2026-10-01) |
| Manicuría | Soft gel | `soft-gel.jpg` | **falta** — Matías busca una (2026-10-01); mientras, la tarjeta va sin foto |
| Manicuría | Retiro | `retiro.jpg` | listo, confirmar técnica |
| Manicuría | Belleza de manos | `belleza-de-manos.jpg` | **stock** |
| Manicuría | Belleza de pies | `belleza-de-pies.jpg` | **stock** |
| Faciales | Peeling químico | `peeling-quimico.jpg` | **stock** |
| Faciales | Dermaplaning | `dermaplaning.jpg` | **stock** |
| Faciales | Exosomas | `exosomas.jpg` | **stock** |
| Pestañas | Lifting de pestañas | `lifting-de-pestanas.jpg` | **stock** |
| Pestañas | Pelo por pelo | `pelo-por-pelo.jpg` | **stock** |
| Masajes | Descontracturante | `masaje-descontracturante.jpg` | listo, es `../masajes.jpg` |
| Masajes | Relajante con Reiki | `masaje-relajante.jpg` | **elegida por Matías** — recorte 4:3 de `img/conreiki.jpg` (primer plano de manos sobre la espalda, 563 x 422, no se agrandó), elegida por Matías 2026-10-01; no tiene registrado de dónde salió |
| Reiki | Reiki y liberación emocional | `reiki-y-liberacion.jpg` | listo |
| Podología | Evaluación podológica | `evaluacion-podologica.jpg` | listo — recorte 4:3 de `img/podologia.jpg` (sesión de fotos profesional del local), elegida por Matías 2026-10-01 |
| Podología | Durezas y callos | `durezas-y-callos.jpg` | listo |
| Podología | Uñas encarnadas | `unas-encarnadas.jpg` | listo |
| Corporales | Hifu corporal | `hifu-corporal.jpg` | listo |

## Las 2 de Unsplash

Licencia de Unsplash: uso comercial libre, sin atribución obligatoria. Se completaron con stock porque no hay material propio: los clips faciales de `videos/estetica-facial/` no muestran ni el bisturí ni un peeling que se entienda como tal, y de pelo por pelo no hay nada filmado. Reemplazar por fotos propias cuando se filmen (una foto de banco al lado de fotos reales del local se nota); el archivo nuevo pisa al de stock con el mismo nombre.

| Archivo | Foto de Unsplash (id) | Qué se ve |
|---|---|---|
| `peeling-quimico.jpg` | `Pe9IXUuC6QU` | esteticista aplicando el producto con pincel sobre el rostro |
| `pelo-por-pelo.jpg` | `sRSRuxkOuzI` | pinzas colocando una extensión sobre una pestaña |

## La de Pexels

Licencia de Pexels: uso comercial libre, sin atribución obligatoria.

| Archivo | Foto de Pexels | Qué se ve |
|---|---|---|
| `belleza-de-pies.jpg` | `17056220` | manos con guantes pintando de rosa la uña del dedo gordo del pie (recorte 4:3 de una vertical) |

Elegida por Matías el 2026-09-30. La anterior era material propio pero mostraba a Moni, y belleza de pies la hace Fati; además se pidió que se vea el esmaltado. No hay material propio de Fati haciendo pies. Ojo: los guantes están pasados a gris en la foto original (efecto de color selectivo).

## La de belleza de manos

`belleza-de-manos.jpg` es un recorte 4:3 de `img/belleza-de-unias.jpg`, la foto que eligió Matías (2026-10-01): manicura con guantes negros pintando con pincel fino una uña nude. Reemplaza al cuadro de video propio, que era la misma escena (mano con anillo y uñas nude) que quedó en `kapping.jpg`. No tiene registrado de dónde salió.

## La de exosomas

`exosomas.jpg` es un recorte 4:3 de `img/exosomas.jpg`, la foto que eligió Matías (2026-10-01): cabezal de dermapen con guante negro sobre la sien, al lado del ojo cerrado. Reemplaza a la varita dorada que salía de la sesión facial filmada. No tiene registrado de dónde salió.

## La de dermaplaning

`dermaplaning.jpg` es un recorte 4:3 de `img/dermaplaning.jpeg`, la foto que eligió Matías (2026-10-01): manos con guantes negros pasando el bisturí por el mentón, de perfil, con los labios y la nariz en cuadro. Reemplaza a la de Unsplash `PqyzuzFiQfY`. No tiene registrado de dónde salió. 720 x 540, no se agrandó.

## La de lifting

`lifting-de-pestanas.jpg` es un recorte 4:3 de `img/linfting.jpg`, la foto que eligió Matías (2026-10-01): pestañas propias peinadas hacia arriba sobre el molde de silicona, con pincel aplicando el producto. Reemplaza a dos anteriores que mostraban extensiones/postizas (`GEct9d7zgos` y `kA74I2XMiSQ` de Unsplash). No tiene registrado de qué banco salió. Es chica (497 x 373, no se agrandó).

## La de cera

`cera.jpg` es un recorte 4:3 de `img/depicera.jpg`, la foto que eligió Matías (2026-09-30): esteticista con guantes aplicando cera dorada con espátula sobre la pierna, en camilla. No viene de material propio y no tiene registrado de qué banco salió. Es chica (484 x 363, no se agrandó para no pixelarla); si aparece una versión más grande, reemplazarla.

Cada una se ve en `https://unsplash.com/photos/<id>`. Ojo: en las de stock aparecen personas que no son de KALON.

## A confirmar con quien hace cada tratamiento

- ~~**`exosomas.jpg`:**~~ resuelto (2026-10-01): se reemplazó la varita dorada de la sesión facial por la foto que eligió Matías (ver "La de exosomas").
- **Las de uñas** salen de planos de manicuría ya cortados y la asignación a cada técnica es por lo que se ve. El reel de servicios (`v2-unias-servicios.ts`) es un montaje continuo, no confirma qué plano es cada técnica.
