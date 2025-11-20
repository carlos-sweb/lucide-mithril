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

## Proceso de Construcción (Build)

Los íconos se generan automáticamente mediante el script `build/build.js`. Este script lee los datos de los íconos del paquete `lucide` y crea el componente de Mithril correspondiente para cada ícono en el directorio `icons/`. Esto asegura que la biblioteca se mantenga actualizada con los últimos cambios de Lucide.

## Licencia

Esta biblioteca está bajo la [Licencia MIT](LICENSE), al igual que Lucide.
