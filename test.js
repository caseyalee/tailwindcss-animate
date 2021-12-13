const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const animationsPlugin = require('./index.js');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge({
        theme: {
          screens: {
            'sm': '640px',
          },
        },
        corePlugins: false,
        plugins: [
          animationsPlugin,
        ],
      }, config)
    )
  )
  .process('@tailwind base; @tailwind utilities', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('the plugin generates some utilities and responsive variants by default', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      *, *::before, *::after {
        --animation-duration: 1s;
        --animation-iteration-count: infinite;
      }
      .animate-none {
        animation-name: none;
      }
      .animate-0s {
        --animation-duration: 0s;
        animation-duration: 0s;
        animation-duration: var(--animation-duration);
      }
      .animate-1s {
        --animation-duration: 1s;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
      }
      .animate-2s {
        --animation-duration: 2s;
        animation-duration: 2s;
        animation-duration: var(--animation-duration);
      }
      .animate-3s {
        --animation-duration: 3s;
        animation-duration: 3s;
        animation-duration: var(--animation-duration);
      }
      .animate-4s {
        --animation-duration: 4s;
        animation-duration: 4s;
        animation-duration: var(--animation-duration);
      }
      .animate-5s {
        --animation-duration: 5s;
        animation-duration: 5s;
        animation-duration: var(--animation-duration);
      }
      .animate-linear {
        animation-timing-function: linear;
      }
      .animate-ease {
        animation-timing-function: ease;
      }
      .animate-ease-in {
        animation-timing-function: ease-in;
      }
      .animate-ease-out {
        animation-timing-function: ease-out;
      }
      .animate-ease-in-out {
        animation-timing-function: ease-in-out;
      }
      .animate-delay-0s {
        animation-delay: 0s;
      }
      .animate-delay-1s {
        animation-delay: 1s;
      }
      .animate-delay-2s {
        animation-delay: 2s;
      }
      .animate-delay-3s {
        animation-delay: 3s;
      }
      .animate-delay-4s {
        animation-delay: 4s;
      }
      .animate-delay-5s {
        animation-delay: 5s;
      }
      .animate-once {
        --animation-iteration-count: 1;
        animation-iteration-count: 1;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-infinite {
        --animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-normal {
        animation-direction: normal;
      }
      .animate-reverse {
        animation-direction: reverse;
      }
      .animate-alternate {
        animation-direction: alternate;
      }
      .animate-alternate-reverse {
        animation-direction: alternate-reverse;
      }
      .animate-fill-none {
        animation-fill-mode: none;
      }
      .animate-fill-forwards {
        animation-fill-mode: forwards;
      }
      .animate-fill-backwards {
        animation-fill-mode: backwards;
      }
      .animate-fill-both {
        animation-fill-mode: both;
      }
      .animate-running {
        animation-play-state: running;
      }
      .animate-paused {
        animation-play-state: paused;
      }
      @media (min-width: 640px) {
        .sm\\:animation-none {
          animation-name: none;
        }
        .sm\\:animation-0s {
          --animation-duration: 0s;
          animation-duration: 0s;
          animation-duration: var(--animation-duration);
        }
        .sm\\:animation-1s {
          --animation-duration: 1s;
          animation-duration: 1s;
          animation-duration: var(--animation-duration);
        }
        .sm\\:animation-2s {
          --animation-duration: 2s;
          animation-duration: 2s;
          animation-duration: var(--animation-duration);
        }
        .sm\\:animation-3s {
          --animation-duration: 3s;
          animation-duration: 3s;
          animation-duration: var(--animation-duration);
        }
        .sm\\:animation-4s {
          --animation-duration: 4s;
          animation-duration: 4s;
          animation-duration: var(--animation-duration);
        }
        .sm\\:animation-5s {
          --animation-duration: 5s;
          animation-duration: 5s;
          animation-duration: var(--animation-duration);
        }
        .sm\\:animation-linear {
          animation-timing-function: linear;
        }
        .sm\\:animation-ease {
          animation-timing-function: ease;
        }
        .sm\\:animation-ease-in {
          animation-timing-function: ease-in;
        }
        .sm\\:animation-ease-out {
          animation-timing-function: ease-out;
        }
        .sm\\:animation-ease-in-out {
          animation-timing-function: ease-in-out;
        }
        .sm\\:animation-delay-0s {
          animation-delay: 0s;
        }
        .sm\\:animation-delay-1s {
          animation-delay: 1s;
        }
        .sm\\:animation-delay-2s {
          animation-delay: 2s;
        }
        .sm\\:animation-delay-3s {
          animation-delay: 3s;
        }
        .sm\\:animation-delay-4s {
          animation-delay: 4s;
        }
        .sm\\:animation-delay-5s {
          animation-delay: 5s;
        }
        .sm\\:animation-once {
          --animation-iteration-count: 1;
          animation-iteration-count: 1;
          animation-iteration-count: var(--animation-iteration-count);
        }
        .sm\\:animation-infinite {
          --animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          animation-iteration-count: var(--animation-iteration-count);
        }
        .sm\\:animation-normal {
          animation-direction: normal;
        }
        .sm\\:animation-reverse {
          animation-direction: reverse;
        }
        .sm\\:animation-alternate {
          animation-direction: alternate;
        }
        .sm\\:animation-alternate-reverse {
          animation-direction: alternate-reverse;
        }
        .sm\\:animation-fill-none {
          animation-fill-mode: none;
        }
        .sm\\:animation-fill-forwards {
          animation-fill-mode: forwards;
        }
        .sm\\:animation-fill-backwards {
          animation-fill-mode: backwards;
        }
        .sm\\:animation-fill-both {
          animation-fill-mode: both;
        }
        .sm\\:animation-running {
          animation-play-state: running;
        }
        .sm\\:animation-paused {
          animation-play-state: paused;
        }
      }
    `);
  });
});

test('utilities can be customized and keyframes can be generated', () => {
  return generatePluginCss({
    theme: {
      animations: {
        'spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'jump': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
      animationDuration: {
        '1s': '1s',
        '2s': '2s',
      },
      animationTimingFunction: {
        'linear': 'linear',
        'ease': 'ease',
      },
      animationDelay: {},
      animationIterationCount: {
        'once': '1',
        'infinite': 'infinite',
      },
      animationDirection: {
        'normal': 'normal',
        'reverse': 'reverse',
      },
      animationFillMode: {
        'none': 'none',
        'both': 'both',
      },
    },
    variants: {
      animations: [],
      animationDuration: [],
      animationTimingFunction: [],
      animationDelay: [],
      animationIterationCount: [],
      animationDirection: [],
      animationFillMode: [],
      animationPlayState: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      *, *::before, *::after {
        --animation-duration: 1s;
        --animation-iteration-count: infinite;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes jump {
        0% {
          transform: translateY(0%);
        }
        50% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0%);
        }
      }
      .animate-none {
        animation-name: none;
      }
      .animate-spin {
        animation-name: spin;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-jump {
        animation-name: jump;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-1s {
        --animation-duration: 1s;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
      }
      .animate-2s {
        --animation-duration: 2s;
        animation-duration: 2s;
        animation-duration: var(--animation-duration);
      }
      .animate-linear {
        animation-timing-function: linear;
      }
      .animate-ease {
        animation-timing-function: ease;
      }
      .animate-once {
        --animation-iteration-count: 1;
        animation-iteration-count: 1;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-infinite {
        --animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-normal {
        animation-direction: normal;
      }
      .animate-reverse {
        animation-direction: reverse;
      }
      .animate-fill-none {
        animation-fill-mode: none;
      }
      .animate-fill-both {
        animation-fill-mode: both;
      }
      .animate-running {
        animation-play-state: running;
      }
      .animate-paused {
        animation-play-state: paused;
      }
    `);
  });
});

test('the default duration, timing function, delay, iteration count, direction, and fill mode can be changed', () => {
  return generatePluginCss({
    theme: {
      animations: {
        'spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animationDuration: {
        'default': '5s',
        'fast': '1s',
        'medium': '5s',
        'slow': '10s',
      },
      animationTimingFunction: {
        'default': 'linear',
        'ease': 'ease',
      },
      animationDelay: {
        'default': '1s',
        'none': '0s',
      },
      animationIterationCount: {
        'default': '2',
        'once': '1',
      },
      animationDirection: {
        'default': 'alternate',
        'normal': 'normal',
      },
      animationFillMode: {
        'default': 'both',
      },
    },
    variants: {
      animations: [],
      animationDuration: [],
      animationTimingFunction: [],
      animationDelay: [],
      animationIterationCount: [],
      animationDirection: [],
      animationFillMode: [],
      animationPlayState: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      *, *::before, *::after {
        --animation-duration: 5s;
        --animation-timing-function: linear;
        --animation-delay: 1s;
        --animation-iteration-count: 2;
        --animation-direction: alternate;
        --animation-fill-mode: both;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .animate-none {
        animation-name: none;
      }
      .animate-spin {
        animation-name: spin;
        animation-duration: 5s;
        animation-duration: var(--animation-duration);
        animation-timing-function: linear;
        animation-timing-function: var(--animation-timing-function);
        animation-delay: 1s;
        animation-delay: var(--animation-delay);
        animation-iteration-count: 2;
        animation-iteration-count: var(--animation-iteration-count);
        animation-direction: alternate;
        animation-direction: var(--animation-direction);
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-fast {
        --animation-duration: 1s;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
      }
      .animate-medium {
        --animation-duration: 5s;
        animation-duration: 5s;
        animation-duration: var(--animation-duration);
      }
      .animate-slow {
        --animation-duration: 10s;
        animation-duration: 10s;
        animation-duration: var(--animation-duration);
      }
      .animate-ease {
        --animation-timing-function: ease;
        animation-timing-function: ease;
        animation-timing-function: var(--animation-timing-function);
      }
      .animate-delay-none {
        --animation-delay: 0s;
        animation-delay: 0s;
        animation-delay: var(--animation-delay);
      }
      .animate-once {
        --animation-iteration-count: 1;
        animation-iteration-count: 1;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-normal {
        --animation-direction: normal;
        animation-direction: normal;
        animation-direction: var(--animation-direction);
      }
      .animate-running {
        animation-play-state: running;
      }
      .animate-paused {
        animation-play-state: paused;
      }
    `);
  });
});

test('the default duration and iteration count can be set to the CSS defaults', () => {
  return generatePluginCss({
    theme: {
      animations: {
        'spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animationDuration: {
        'default': '0s',
        '1s': '1s',
        '2s': '2s',
      },
      animationTimingFunction: {
        'linear': 'linear',
        'ease': 'ease',
      },
      animationDelay: {
        '0s': '0s',
        '1s': '1s',
      },
      animationIterationCount: {
        'default': '1',
        'once': '1',
        'twice': '2',
        'infinite': 'infinite',
      },
      animationDirection: {
        'normal': 'normal',
        'reverse': 'reverse',
      },
      animationFillMode: {
        'none': 'none',
        'both': 'both',
      },
    },
    variants: {
      animations: [],
      animationDuration: [],
      animationTimingFunction: [],
      animationDelay: [],
      animationIterationCount: [],
      animationDirection: [],
      animationFillMode: [],
      animationPlayState: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .animate-none {
        animation-name: none;
      }
      .animate-spin {
        animation-name: spin;
      }
      .animate-1s {
        animation-duration: 1s;
      }
      .animate-2s {
        animation-duration: 2s;
      }
      .animate-linear {
        animation-timing-function: linear;
      }
      .animate-ease {
        animation-timing-function: ease;
      }
      .animate-delay-0s {
        animation-delay: 0s;
      }
      .animate-delay-1s {
        animation-delay: 1s;
      }
      .animate-once {
        animation-iteration-count: 1;
      }
      .animate-twice {
        animation-iteration-count: 2;
      }
      .animate-infinite {
        animation-iteration-count: infinite;
      }
      .animate-normal {
        animation-direction: normal;
      }
      .animate-reverse {
        animation-direction: reverse;
      }
      .animate-fill-none {
        animation-fill-mode: none;
      }
      .animate-fill-both {
        animation-fill-mode: both;
      }
      .animate-running {
        animation-play-state: running;
      }
      .animate-paused {
        animation-play-state: paused;
      }
    `);
  });
});

test('the duration, timing function, delay, iteration count, direction, and fill mode can be extended', () => {
  return generatePluginCss({
    theme: {
      extend: {
        animationDuration: {
          '6s': '6s',
        },
        animationTimingFunction: {
          'step-start': 'step-start',
          'step-end': 'step-end',
        },
        animationDelay: {
          '6s': '6s',
        },
        animationIterationCount: {
          'twice': '2',
        },
        animationDirection: {
          'direction-inherit': 'inherit',
        },
        animationFillMode: {
          'default': 'both',
        },
      },
    },
    variants: {
      animations: [],
      animationDuration: [],
      animationTimingFunction: [],
      animationDelay: [],
      animationIterationCount: [],
      animationDirection: [],
      animationFillMode: [],
      animationPlayState: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      *, *::before, *::after {
        --animation-duration: 1s;
        --animation-iteration-count: infinite;
        --animation-fill-mode: both;
      }
      .animate-none {
        animation-name: none;
      }
      .animate-0s {
        --animation-duration: 0s;
        animation-duration: 0s;
        animation-duration: var(--animation-duration);
      }
      .animate-1s {
        --animation-duration: 1s;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
      }
      .animate-2s {
        --animation-duration: 2s;
        animation-duration: 2s;
        animation-duration: var(--animation-duration);
      }
      .animate-3s {
        --animation-duration: 3s;
        animation-duration: 3s;
        animation-duration: var(--animation-duration);
      }
      .animate-4s {
        --animation-duration: 4s;
        animation-duration: 4s;
        animation-duration: var(--animation-duration);
      }
      .animate-5s {
        --animation-duration: 5s;
        animation-duration: 5s;
        animation-duration: var(--animation-duration);
      }
      .animate-6s {
        --animation-duration: 6s;
        animation-duration: 6s;
        animation-duration: var(--animation-duration);
      }
      .animate-linear {
        animation-timing-function: linear;
      }
      .animate-ease {
        animation-timing-function: ease;
      }
      .animate-ease-in {
        animation-timing-function: ease-in;
      }
      .animate-ease-out {
        animation-timing-function: ease-out;
      }
      .animate-ease-in-out {
        animation-timing-function: ease-in-out;
      }
      .animate-step-start {
        animation-timing-function: step-start;
      }
      .animate-step-end {
        animation-timing-function: step-end;
      }
      .animate-delay-0s {
        animation-delay: 0s;
      }
      .animate-delay-1s {
        animation-delay: 1s;
      }
      .animate-delay-2s {
        animation-delay: 2s;
      }
      .animate-delay-3s {
        animation-delay: 3s;
      }
      .animate-delay-4s {
        animation-delay: 4s;
      }
      .animate-delay-5s {
        animation-delay: 5s;
      }
      .animate-delay-6s {
        animation-delay: 6s;
      }
      .animate-once {
        --animation-iteration-count: 1;
        animation-iteration-count: 1;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-infinite {
        --animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-twice {
        --animation-iteration-count: 2;
        animation-iteration-count: 2;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-normal {
        animation-direction: normal;
      }
      .animate-reverse {
        animation-direction: reverse;
      }
      .animate-alternate {
        animation-direction: alternate;
      }
      .animate-alternate-reverse {
        animation-direction: alternate-reverse;
      }
      .animate-direction-inherit {
        animation-direction: inherit;
      }
      .animate-fill-none {
        --animation-fill-mode: none;
        animation-fill-mode: none;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-fill-forwards {
        --animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-fill-backwards {
        --animation-fill-mode: backwards;
        animation-fill-mode: backwards;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-fill-both {
        --animation-fill-mode: both;
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-running {
        animation-play-state: running;
      }
      .animate-paused {
        animation-play-state: paused;
      }
    `);
  });
});

test('variants can be customized', () => {
  return generatePluginCss({
    theme: {
      animations: {
        'jump': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
      animationDuration: {
        'fast': '1s',
        'medium': '2s',
        'slow': '3s',
      },
      animationTimingFunction: {
        'linear': 'linear',
        'ease': 'ease',
      },
      animationDelay: {
        'none': '0s',
        '1s': '1s',
      },
      animationIterationCount: {
        'once': '1',
        'infinite': 'infinite',
      },
      animationDirection: {
        'normal': 'normal',
        'reverse': 'reverse',
      },
      animationFillMode: {
        'default': 'both',
        'none': 'none',
        'both': 'both',
      },
      animationPlayState: {},
    },
    variants: {
      animations: ['group-hover'],
      animationDuration: ['hover'],
      animationTimingFunction: ['responsive'],
      animationDelay: ['active'],
      animationIterationCount: ['focus'],
      animationDirection: ['hover', 'responsive'],
      animationFillMode: ['active', 'hover'],
      animationPlayState: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      *, *::before, *::after {
        --animation-duration: 1s;
        --animation-iteration-count: infinite;
        --animation-fill-mode: both;
      }
      @keyframes jump {
        0% {
          transform: translateY(0%);
        }
        50% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0%);
        }
      }
      .animate-none {
        animation-name: none;
      }
      .animate-jump {
        animation-name: jump;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .group:hover .group-hover\\:animation-none {
        animation-name: none;
      }
      .group:hover .group-hover\\:animation-jump {
        animation-name: jump;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-fast {
        --animation-duration: 1s;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
      }
      .animate-medium {
        --animation-duration: 2s;
        animation-duration: 2s;
        animation-duration: var(--animation-duration);
      }
      .animate-slow {
        --animation-duration: 3s;
        animation-duration: 3s;
        animation-duration: var(--animation-duration);
      }
      .hover\\:animation-fast:hover {
        --animation-duration: 1s;
        animation-duration: 1s;
        animation-duration: var(--animation-duration);
      }
      .hover\\:animation-medium:hover {
        --animation-duration: 2s;
        animation-duration: 2s;
        animation-duration: var(--animation-duration);
      }
      .hover\\:animation-slow:hover {
        --animation-duration: 3s;
        animation-duration: 3s;
        animation-duration: var(--animation-duration);
      }
      .animate-linear {
        animation-timing-function: linear;
      }
      .animate-ease {
        animation-timing-function: ease;
      }
      .animate-delay-none {
        animation-delay: 0s;
      }
      .animate-delay-1s {
        animation-delay: 1s;
      }
      .active\\:animation-delay-none:active {
        animation-delay: 0s;
      }
      .active\\:animation-delay-1s:active {
        animation-delay: 1s;
      }
      .animate-once {
        --animation-iteration-count: 1;
        animation-iteration-count: 1;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-infinite {
        --animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .focus\\:animation-once:focus {
        --animation-iteration-count: 1;
        animation-iteration-count: 1;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .focus\\:animation-infinite:focus {
        --animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-normal {
        animation-direction: normal;
      }
      .animate-reverse {
        animation-direction: reverse;
      }
      .hover\\:animation-normal:hover {
        animation-direction: normal;
      }
      .hover\\:animation-reverse:hover {
        animation-direction: reverse;
      }
      .animate-fill-none {
        --animation-fill-mode: none;
        animation-fill-mode: none;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .animate-fill-both {
        --animation-fill-mode: both;
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .active\\:animation-fill-none:active {
        --animation-fill-mode: none;
        animation-fill-mode: none;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .active\\:animation-fill-both:active {
        --animation-fill-mode: both;
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .hover\\:animation-fill-none:hover {
        --animation-fill-mode: none;
        animation-fill-mode: none;
        animation-fill-mode: var(--animation-fill-mode);
      }
      .hover\\:animation-fill-both:hover {
        --animation-fill-mode: both;
        animation-fill-mode: both;
        animation-fill-mode: var(--animation-fill-mode);
      }
      @media (min-width: 640px) {
        .sm\\:animation-linear {
          animation-timing-function: linear;
        }
        .sm\\:animation-ease {
          animation-timing-function: ease;
        }
        .sm\\:animation-normal {
          animation-direction: normal;
        }
        .sm\\:animation-reverse {
          animation-direction: reverse;
        }
        .sm\\:hover\\:animation-normal:hover {
          animation-direction: normal;
        }
        .sm\\:hover\\:animation-reverse:hover {
          animation-direction: reverse;
        }
      }
    `);
  });
});

test('durations and delays defined as numbers are translated to ms', () => {
  return generatePluginCss({
    theme: {
      animations: {
        'modal-open': {
          from: {
            opacity: 0,
            transform: 'scale(0.75)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      animationDuration: {
        'default': 2000,
        '0.5s': 500,
        '1s': 1000,
        '1.5s': 1500,
        '2s': 2000,
      },
      animationTimingFunction: {},
      animationDelay: {
        '0.5s': 500,
        '1s': 1000,
        '1.5s': 1500,
        '2s': 2000,
      },
      animationIterationCount: {},
      animationDirection: {},
      animationFillMode: {
        'none': 'none',
        'both': 'both',
      },
    },
    variants: {
      animations: [],
      animationDuration: [],
      animationTimingFunction: [],
      animationDelay: [],
      animationIterationCount: [],
      animationDirection: [],
      animationFillMode: [],
      animationPlayState: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      *, *::before, *::after {
        --animation-duration: 2000ms;
        --animation-iteration-count: infinite;
      }
      @keyframes modal-open {
        from {
          opacity: 0;
          transform: scale(0.75);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .animate-none {
        animation-name: none;
      }
      .animate-modal-open {
        animation-name: modal-open;
        animation-duration: 2000ms;
        animation-duration: var(--animation-duration);
        animation-iteration-count: infinite;
        animation-iteration-count: var(--animation-iteration-count);
      }
      .animate-0\\.5s {
        --animation-duration: 500ms;
        animation-duration: 500ms;
        animation-duration: var(--animation-duration);
      }
      .animate-1s {
        --animation-duration: 1000ms;
        animation-duration: 1000ms;
        animation-duration: var(--animation-duration);
      }
      .animate-1\\.5s {
        --animation-duration: 1500ms;
        animation-duration: 1500ms;
        animation-duration: var(--animation-duration);
      }
      .animate-2s {
        --animation-duration: 2000ms;
        animation-duration: 2000ms;
        animation-duration: var(--animation-duration);
      }
      .animate-delay-0\\.5s {
        animation-delay: 500ms;
      }
      .animate-delay-1s {
        animation-delay: 1000ms;
      }
      .animate-delay-1\\.5s {
        animation-delay: 1500ms;
      }
      .animate-delay-2s {
        animation-delay: 2000ms;
      }
      .animate-fill-none {
        animation-fill-mode: none;
      }
      .animate-fill-both {
        animation-fill-mode: both;
      }
      .animate-running {
        animation-play-state: running;
      }
      .animate-paused {
        animation-play-state: paused;
      }
    `);
  });
});
