import { v1 } from 'uuid'
const themeState = {
  key: `themeState${v1()}`,
  default: {
    name: 'basic',
    list: [
      {
        name: 'basic',
        etc: null
      },
      {
        name: 'light',
        etc: null
      },
      {
        name: 'extra',
        etc: null
      },
      {
        name: 'dark',
        etc: null
      }
    ]
  }
}

export default themeState
