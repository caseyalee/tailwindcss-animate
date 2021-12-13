# Tailwind CSS Animate Plugin

This plugin allows you to interact with name keyframed animations such as animation-delay animation-duration.

## Requirements

This plugin requires Tailwind CSS 2.0 or later.

## Installation

This is an edge-case plugin so it's not found on the npm registry.
Install by adding to your package.json:

```json
  "dependencies": {
    "tailwindcss-animate": "https://github.com/caseyalee/tailwindcss-animate.git"
  }
```

And re-run:

```bash
npm install
```

Add to tailwind.config.js `plugins[]`:

```
require('tailwindcss-animate')
```


## Usage:

```html
<div class="yourAnimationName animate-delay-0 animate-duration-750ms"></div>
```

### Supported Classes:

* animate-duration-[1s,750ms,etc.] // animation-duration
* animate-timing-[linear|ease-in-out|etc.] // animation-timing-function
* animate-delay-[2s] // animation-delay
* animate-iteration-[1] // animation-iteration-count
* animate-direction-[normal|reverse|alternate|alternate-reverse] // animation-direction
* animation-fill-[none|forwards|backwards|both] // animation-fill-mode
* animate-state-[paused|running] // animation-play-state


## Config Customization:

```js
// tailwind.config.js
module.exports = {
  theme: {
    animationDuration: { // defaults to these values
      'default': '1s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    animationDelay: { // defaults to these values
      'default': '0s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationIterationCount: { // defaults to these values
      'default': 'infinite',
      'once': '1',
      'infinite': 'infinite',
    },
    animationDirection: { // defaults to these values
      'default': 'normal',
      'normal': 'normal',
      'reverse': 'reverse',
      'alternate': 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    animationFillMode: { // defaults to these values
      'default': 'none',
      'none': 'none',
      'forwards': 'forwards',
      'backwards': 'backwards',
      'both': 'both',
    },
    animationPlayState: { // defaults to these values
      'running': 'running',
      'paused': 'paused',
    },
  },
  variants: { // all the following default to ['responsive']
    animations: ['responsive'],
    animationDuration: ['responsive'],
    animationTimingFunction: ['responsive'],
    animationDelay: ['responsive'],
    animationIterationCount: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
```
