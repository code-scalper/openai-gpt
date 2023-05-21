import { v1 } from 'uuid'
import { atom } from 'recoil'

const LAYOUT_STATE = atom({
  key: `layoutState${v1()}`,
  default: {
    isSidebarReadyToOver: false,
    opened: true,
    mobileMenuOpened: false,
    isMobile: false,
    isTablet: false,
    isLoading: false
  }
})

const THEME_STATE = atom({
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
})

export { LAYOUT_STATE, THEME_STATE }
