# Lucide Mithril

Una biblioteca de íconos simple y elegante para Mithril.js, basada en el increíble set de íconos [Lucide](https://lucide.dev/).

Esta biblioteca construye automáticamente componentes de Mithril a partir de la fuente original de `lucide`, haciendo que todos los íconos estén disponibles como componentes estándar de Mithril.js.

## Instalación

Para instalar la biblioteca, usa tu gestor de paquetes preferido:

```bash
npm install lucide-mithril
```

**Nota:** `mithril` es una dependencia par (peer dependency) y debe estar instalada en tu proyecto.

## Uso

Puedes importar cualquier ícono por su nombre original de Lucide y usarlo directamente en tus componentes.

```javascript
import m from 'mithril';
import { Activity, Camera, Home } from 'lucide-mithril';

const MyComponent = {
  view: () => m('div', [
    m('h1', 'Usando Íconos de Lucide'),
    
    // Uso básico
    m(Activity),

    // Personalizando atributos
    m(Camera, {
      class: 'my-custom-class',
      width: 48,
      height: 48,
      stroke: 'red',
      'stroke-width': 1.5
    }),

    // Usando con otros componentes
    m('button', {
      onclick: () => alert('¡Bienvenido a casa!')
    }, [
      m(Home, { class: 'icon' }),
      'Ir a Inicio'
    ])
  ])
};

// Montar el componente
// m.mount(document.body, MyComponent);
```

## Personalización

Puedes personalizar los íconos pasando atributos estándar de Mithril (`class`, `style`, `onclick`, etc.), así como cualquier atributo de presentación SVG válido (`width`, `height`, `stroke`, `stroke-width`, `fill`, etc.).

Los atributos por defecto son:
- `xmlns="http://www.w3.org/2000/svg"`
- `width="24"`
- `height="24"`
- `viewBox="0 0 24 24"`
- `fill="none"`
- `stroke="currentColor"`
- `stroke-width="2"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`

## mithril-lynx (Lynx)

[mithril-lynx](https://www.npmjs.com/package/mithril-lynx) no soporta `m.trust`. En Lynx, el markup SVG se pasa con el atributo nativo `content` de `<svg>`.

Usa los componentes paralelos en `icons-lynx/`, que importan `mithril-runtime` y definen `content`:

```javascript
import m from 'mithril-runtime';
import Home from 'lucide-mithril/icons-lynx/Home.js';
import Camera from 'lucide-mithril/icons-lynx/Camera.js';

const MyComponent = {
  view: () => m('view', [
    m(Home, { size: 48 }),
    m(Camera, {
      size: 32,
      stroke: 'red',
      'stroke-width': 1.5,
    }),
  ]),
};
```

El entry web (`lucide-mithril` / `icons/*`) no cambia y sigue usando `m.trust`.

`mithril-runtime` es una peer dependency opcional: instálala cuando uses `icons-lynx/*`.

## Proceso de Construcción (Build)

Los íconos se generan automáticamente mediante el script `build/build.js`. Este script lee los datos de los íconos del paquete `lucide` y crea:

- `icons/` — componentes Mithril para web (`m.trust`)
- `icons-lynx/` — componentes para mithril-lynx (atributo `content`)

Así la biblioteca se mantiene actualizada con Lucide en ambos targets.

## Licencia

Esta biblioteca está bajo la [Licencia MIT](LICENSE), al igual que Lucide.
