# odds-table

## Project info
Project made for excercise using Vue CLI.

### Additional comments for excercise task
* The task explicitily said about sliding the container without the first column, but as the the consesnus column is like a summary for whole segment, I decided to exclude it as well from sliding and leave it fixed.
* Data for odds table is generated randomly to demonstrate calculations for consensus and best values.
* There was a feedback button presented only on mobile screen - I didn't treat it as part of task.
* Taken into account:
** Lighthouse report optimization
** WCAG, mainly keyboard (TAB) navigation, aria aspects and abbreviations
** Merging small images into sprite
** HTML semantics
* Posssible future TODO optimizations:
** REM-based calculations for breakpoints
** shadow-like element suggesting sliding container interaction
** paint times optimization (criticalCSS etc)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

