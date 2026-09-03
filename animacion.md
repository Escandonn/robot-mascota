Claro. Aquí tienes un **prompt profesional listo para copiar y pegar en Cursor, Claude, Gemini, ChatGPT o GitHub Copilot** para reconstruir la interfaz de la imagen usando **Astro + React + Tailwind CSS + Motion**.

````md
# PROMPT — RECREACIÓN PROFESIONAL DE LA INTERFAZ

Quiero que desarrolles desde cero una interfaz web inspirada fielmente en la imagen de referencia proporcionada.

## STACK OBLIGATORIO

- Astro
- React
- TypeScript
- Tailwind CSS
- Motion for React (`motion`)
- HTML5 semántico
- CSS moderno

Instalar:

```bash
npm install motion
````

Usar Motion mediante:

```tsx
import { motion } from "motion/react";
```

NO utilizar:

* Framer Motion antiguo
* GSAP
* Bootstrap
* Material UI
* jQuery
* librerías innecesarias

---

# OBJETIVO VISUAL

Recrear una composición deportiva premium sobre fondo completamente negro.

La pantalla debe mostrar:

┌──────────────────────────────────────────────┐
│                                              │
│      LOGO IZQUIERDO    ◯ ▲    LOGO DERECHO   │
│                                              │
│                    ───────                   │
│                                              │
└──────────────────────────────────────────────┘

La composición debe transmitir:

* fútbol
* competición
* tecnología
* lujo
* elegancia
* identidad deportiva
* acabado metálico dorado
* animación cinematográfica

La imagen de referencia debe utilizarse como guía visual principal.

---

# COMPOSICIÓN

Crear una sección Hero/Intro que ocupe prácticamente todo el viewport:

```css
min-height: 100svh;
background: #000;
```

La composición debe estar centrada horizontal y verticalmente.

## ELEMENTOS

### 1. LOGO IZQUIERDO

Crear un elemento visual equivalente al logo izquierdo de la referencia.

Características:

* marco cuadrado deportivo
* bordes dorados
* iconografía relacionada con fútbol
* acabado metálico dorado
* fondo negro
* apariencia premium
* simetría visual

Si no existe un SVG/logo real, crear un placeholder SVG limpio y fácilmente reemplazable.

IMPORTANTE:

No incrustar el logo directamente como texto.

Crear:

```text
src/assets/
```

o:

```text
public/images/
```

para permitir sustituir posteriormente los logos.

---

### 2. LOGO DERECHO

Crear una segunda pieza equivalente al logo derecho.

Debe mantener:

* mismo tamaño
* mismo estilo
* misma estructura visual
* mismo acabado dorado

Pero debe poder utilizar una imagen/SVG diferente.

---

# 3. ELEMENTO CENTRAL

Entre ambos logos debe existir un círculo dorado.

Estructura:

```text
       ╭────────╮
       │   ▲    │
       ╰────────╯
```

Características:

* círculo negro
* borde dorado
* doble sensación de borde metálico
* triángulo dorado en el centro
* aspecto de botón/interfaz deportiva
* perfectamente centrado

El triángulo debe poder animarse independientemente.

---

# 4. LÍNEA INFERIOR

Debajo del elemento central crear una línea horizontal dorada.

Debe tener pequeños elementos cuadrados en ambos extremos:

```text
        ▪──────────────▪
```

La línea debe parecer parte de una interfaz deportiva premium.

---

# DISEÑO DEL DORADO

No utilizar un amarillo plano.

Crear sensación de METAL DORADO.

Utilizar gradientes como:

```css
background:
linear-gradient(
  135deg,
  #8a5a00,
  #ffd76a,
  #fff1a8,
  #c58a18,
  #8a5a00
);
```

El resultado debe parecer:

* oro pulido
* metal
* reflejo de luz
* premium

Aplicar gradientes también a:

* bordes
* iconos
* línea inferior
* círculo central
* detalles

---

# ANIMACIONES — MOTION

La animación es una parte fundamental.

No quiero una animación genérica.

Debe sentirse como una INTRO CINEMATOGRÁFICA DE UN CLUB DE FÚTBOL.

---

## ANIMACIÓN INICIAL

Al cargar la página:

### Logo izquierdo

Comenzar:

```text
opacity: 0
x: -120
scale: 0.75
```

Terminar:

```text
opacity: 1
x: 0
scale: 1
```

Usar:

```tsx
transition={{
  type: "spring",
  stiffness: 80,
  damping: 14
}}
```

---

## Logo derecho

Comenzar:

```text
opacity: 0
x: 120
scale: 0.75
```

Terminar:

```text
opacity: 1
x: 0
scale: 1
```

La entrada debe estar ligeramente sincronizada con el logo izquierdo, pero no exactamente al mismo tiempo.

Crear una sensación de movimiento cinematográfico.

---

# ANIMACIÓN DEL CÍRCULO

El círculo central debe aparecer después de que comiencen los logos.

Inicio:

```text
opacity: 0
scale: 0
rotate: -180deg
```

Final:

```text
opacity: 1
scale: 1
rotate: 0deg
```

Usar una transición tipo spring.

---

# TRIÁNGULO CENTRAL

Después de aparecer el círculo:

El triángulo debe realizar una pequeña animación:

```text
scale: 0.8 → 1.08 → 1
```

También puede tener una pequeña iluminación:

```text
drop-shadow(...)
```

La animación debe ser sutil.

NO hacerla excesivamente llamativa.

---

# LÍNEA INFERIOR

La línea debe aparecer desde el centro hacia los lados.

Inicial:

```text
width: 0
opacity: 0
```

Final:

```text
width: 190px
opacity: 1
```

Utilizar Motion.

---

# EFECTO METÁLICO

Crear un reflejo que atraviese periódicamente los elementos dorados.

Por ejemplo:

```text
████████████████
       ↓
████████████████
```

Un highlight blanco/dorado debe recorrer el logo.

Usar:

```tsx
<motion.div />
```

con un gradiente:

```css
bg-gradient-to-r
from-transparent
via-white/40
to-transparent
```

El efecto debe ser:

* lento
* elegante
* discreto

No debe parecer un videojuego barato.

---

# MICROINTERACCIONES

Agregar `whileHover` a los logos.

Al pasar el mouse:

```text
scale: 1.03
```

y una pequeña rotación 3D:

```text
rotateY: ±4deg
```

Agregar una sombra/glow dorada muy sutil.

Ejemplo conceptual:

```tsx
whileHover={{
  scale: 1.04,
  rotateY: 4
}}
```

Agregar:

```tsx
whileTap={{
  scale: 0.97
}}
```

---

# GLOW DE FONDO

Crear un glow dorado muy sutil detrás del elemento central.

Debe ser casi invisible.

Ejemplo:

```tsx
<motion.div
  className="
    absolute
    w-96
    h-96
    rounded-full
    bg-yellow-500/10
    blur-[120px]
  "
/>
```

Animarlo lentamente:

```text
scale: 1 → 1.15 → 1
opacity: 0.2 → 0.4 → 0.2
```

Debe generar profundidad.

---

# RESPONSIVE

La composición debe funcionar perfectamente en:

### Desktop

```text
1920x1080
1440x900
1366x768
```

### Tablet

```text
1024x768
768x1024
```

### Mobile

```text
430x932
390x844
375x812
```

En desktop:

```text
LOGO ─── CÍRCULO ─── LOGO
```

En mobile reducir progresivamente:

```text
LOGO ─ CÍRCULO ─ LOGO
```

No permitir overflow horizontal.

Utilizar Tailwind responsive:

```text
sm:
md:
lg:
xl:
```

---

# ARQUITECTURA ASTRO

Crear una estructura limpia:

```text
src/
├── components/
│   ├── FootballIntro.tsx
│   ├── FootballLogo.tsx
│   ├── CentralBadge.tsx
│   └── GoldDivider.tsx
│
├── layouts/
│   └── Layout.astro
│
├── pages/
│   └── index.astro
│
├── styles/
│   └── global.css
│
└── assets/
    ├── logo-left.svg
    └── logo-right.svg
```

---

# COMPONENTE PRINCIPAL

Crear:

```text
FootballIntro.tsx
```

Este componente debe controlar la secuencia principal.

Ejemplo conceptual:

```tsx
import { motion } from "motion/react";

export default function FootballIntro() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-black">

      {/* background glow */}

      {/* left logo */}

      {/* central badge */}

      {/* right logo */}

      {/* bottom divider */}

    </section>
  );
}
```

---

# ASTRO

En:

```text
src/pages/index.astro
```

usar:

```astro
---
import FootballIntro from "../components/FootballIntro";
---

<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Football Intro</title>
  </head>

  <body class="bg-black">
    <FootballIntro client:load />
  </body>
</html>
```

---

# TAILWIND

Todo el layout debe construirse principalmente utilizando Tailwind CSS.

Evitar CSS innecesario.

Utilizar clases como:

```text
flex
items-center
justify-center
relative
absolute
overflow-hidden
bg-black
rounded-full
border
duration-300
```

etc.

Solo utilizar CSS personalizado cuando Tailwind no sea suficiente.

---

# ACCESIBILIDAD

Los logos deben tener:

```html
alt=""
```

adecuado.

El botón/elemento central debe tener:

```html
aria-label=""
```

si funciona como elemento interactivo.

Respetar:

```css
prefers-reduced-motion
```

Si el usuario tiene desactivadas las animaciones:

* reducir las animaciones
* mantener la composición visual
* evitar movimientos innecesarios

---

# CALIDAD DEL CÓDIGO

Quiero código:

* TypeScript
* componentes reutilizables
* limpio
* mantenible
* sin duplicación
* responsive
* accesible
* production-ready

No crear todo en un único archivo gigante.

Separar componentes cuando tenga sentido.

---

# IMPORTANTE SOBRE LA IMAGEN

La imagen proporcionada debe considerarse como REFERENCIA VISUAL.

Analiza:

* proporciones
* posición
* escala
* separación entre logos
* relación del círculo con los logos
* grosor de los bordes
* color dorado
* fondo
* jerarquía visual

No quiero simplemente colocar una imagen de fondo.

Quiero RECREAR LA INTERFAZ mediante HTML/SVG/CSS/React y animarla con Motion.

---

# RESULTADO FINAL

El resultado debe parecer una:

"Football Club Premium Cinematic Intro"

con:

✓ fondo negro
✓ dos logos dorados
✓ círculo central
✓ triángulo central
✓ línea inferior
✓ metal dorado
✓ reflejos
✓ glow
✓ entrada cinematográfica
✓ microinteracciones
✓ responsive
✓ Motion
✓ Astro
✓ React
✓ Tailwind CSS

La estética debe ser elegante, deportiva, tecnológica y premium.

Prioriza la CALIDAD VISUAL sobre la cantidad de código.

Primero crea la estructura del proyecto y componentes.

Después implementa la animación.

Finalmente revisa responsive, accesibilidad y rendimiento.

No expliques demasiado: entrega directamente los archivos completos y los comandos necesarios para ejecutar el proyecto.

```

### Stack final que usaría

**Astro + React + Tailwind + Motion** es suficiente para esta pieza. No necesitas GSAP para la primera versión.

La clave está en que los **escudos sean SVG** y no simples imágenes rasterizadas: así Motion puede animar también partes internas del logo, mientras Tailwind controla el layout y los efectos visuales.
```
