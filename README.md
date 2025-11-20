# Lucide Mithril

A simple and beautiful icon library for Mithril.js, based on the amazing [Lucide](https://lucide.dev/) icon set.

This library automatically builds Mithril components from the original `lucide` source, making all icons available as standard Mithril.js components.

## Installation

To install the library, use your favorite package manager:

```bash
npm install lucide-mithril
```

**Note:** `mithril` is a peer dependency and must be installed in your project.

## Usage

You can import any icon by its original Lucide name and use it directly in your components.

```javascript
import m from 'mithril';
import { Activity, Camera, Home } from 'lucide-mithril';

const MyComponent = {
  view: () => m('div', [
    m('h1', 'Using Lucide Icons'),
    
    // Basic usage
    m(Activity),

    // Customizing attributes
    m(Camera, {
      class: 'my-custom-class',
      width: 48,
      height: 48,
      stroke: 'red',
      'stroke-width': 1.5
    }),

    // Using with other components
    m('button', {
      onclick: () => alert('Welcome home!')
    }, [
      m(Home, { class: 'icon' }),
      'Go Home'
    ])
  ])
};

// Mount the component
// m.mount(document.body, MyComponent);
```

## Customization

You can customize the icons by passing standard Mithril attributes (`class`, `style`, `onclick`, etc.) as well as any valid SVG presentation attributes (`width`, `height`, `stroke`, `stroke-width`, `fill`, etc.).

Default attributes are:
- `xmlns="http://www.w3.org/2000/svg"`
- `width="24"`
- `height="24"`
- `viewBox="0 0 24 24"`
- `fill="none"`
- `stroke="currentColor"`
- `stroke-width="2"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`

## Build Process

The icons are generated automatically by the `build/build.js` script. This script reads the icon data from the `lucide` package and creates a corresponding Mithril component for each icon in the `icons/` directory. This ensures the library stays up-to-date with the latest changes from Lucide.

## License

This library is licensed under the [MIT License](LICENSE), just like Lucide itself.
