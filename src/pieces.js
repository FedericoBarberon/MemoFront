import html from './assets/html.svg'
import css from './assets/css.svg'
import javascript from './assets/javascript.svg'
import react from './assets/react.svg'
import vue from './assets/vue.svg'
import angular from './assets/angular.svg'

export const pieces = [
  {
    name: 'HTML',
    img: html
  },
  {
    name: 'CSS',
    img: css
  },
  {
    name: 'JavaScript',
    img: javascript
  },
  {
    name: 'React',
    img: react
  },
  {
    name: 'Vue',
    img: vue
  },
  {
    name: 'Angular',
    img: angular
  }
]
  .flatMap(piece => {
    return [
      {
        ...piece,
        name: `a|${piece.name}`
      },
      {
        ...piece,
        name: `b|${piece.name}`
      }
    ]
  })
