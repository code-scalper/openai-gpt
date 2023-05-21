import { v1 } from 'uuid'
import { atom } from 'recoil'
const MENU_STATE = atom({
  key: `menuState${v1()}`,
  default: {
    isInitialMenuSet: false,
    currentSort: 'SAMPLE',
    currentHref: '/sample',
    currentMenuItem: {},
    currentMenuChildItem: {},
    currentList: [],
    sortList: [
      { label: 'Sample', href: '/sample', sortCode: 'SAMPLE' },
      { label: 'PSM', href: '/psm', sortCode: 'PSM' },
      { label: 'MOC', href: '/moc', sortCode: 'MOC' },
      { label: 'ESH', href: '/esh', sortCode: 'ESH' },
      { label: 'System', href: '/system', sortCode: 'SYSTEM' }
    ],
    list: {
      SAMPLE: [],
      PSM: [],
      MOC: [],
      ESH: [],
      SYSTEM: []
    },

    // to be deleted and should fetch from the server
    rawMenuList: [
      {
        href: '/',
        label: 'Home',
        icon: 'HomeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 0,
        parent: null,

        menuCode: 'SAMPLE_001'
      },
      {
        href: '/component',
        label: 'Components',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 1,
        parent: null,

        menuCode: 'SAMPLE_002'
      },
      {
        href: '/table',
        label: 'Table',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 0,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_003'
      },
      {
        href: '/gridSystem',
        label: 'Grid System',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 1,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_004'
      },
      {
        href: '/form',
        label: 'Form',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 2,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_005'
      },
      {
        href: '/tabs',
        label: 'Tabs',
        icon: 'CalendarIcon',
        sortCode: 'SAMPLE',
        sortOrder: 3,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_007'
      },
      {
        href: '/processGauge',
        label: 'Process Gauage',
        icon: 'CalendarIcon',
        sortCode: 'SAMPLE',
        sortOrder: 4,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_008'
      },
      {
        href: '/three',
        label: '3D Model',
        icon: 'CalendarIcon',
        sortCode: 'SAMPLE',
        sortOrder: 5,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_009'
      },
      {
        href: '/drawingEditor',
        label: 'Drawing Editor',
        icon: 'CalendarIcon',
        sortCode: 'SAMPLE',
        sortOrder: 6,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_010'
      },
      {
        href: '/dialog',
        label: 'Dialog',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 4,
        parent: 'SAMPLE_002',
        menuCode: 'SAMPLE_010'
      },
      {
        href: '/examples',
        label: 'Sample Page',
        icon: 'CalendarIcon',
        sortCode: 'SAMPLE',
        sortOrder: 2,
        parent: null,

        menuCode: 'SAMPLE_006'
      },
      {
        href: '/listPage1',
        label: 'List Base',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 0,
        parent: 'SAMPLE_006',
        menuCode: 'SAMPLE_007'
      },
      {
        href: '/listPage2',
        label: 'List Horizontal',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 1,
        parent: 'SAMPLE_006',
        menuCode: 'SAMPLE_008'
      },
      {
        href: '/listPage3',
        label: 'List Tabs',
        icon: 'CakeIcon',
        sortCode: 'SAMPLE',
        sortOrder: 1,
        parent: 'SAMPLE_006',
        menuCode: 'SAMPLE_009'
      },

      {
        href: '/',
        label: 'PSM',
        icon: 'HomeIcon',
        sortCode: 'PSM',
        sortOrder: 0,
        parent: null,
        menuCode: 'PSM_001'
      },
      {
        href: '/',
        label: 'PSM2',
        icon: 'HomeIcon',
        sortCode: 'PSM',
        sortOrder: 1,
        parent: null,
        menuCode: 'PSM_002'
      },
      {
        href: '/',
        label: 'MOC',
        icon: 'HomeIcon',
        sortCode: 'MOC',
        sortOrder: 0,
        parent: null,
        menuCode: 'MOC_001'
      },
      {
        href: '/',
        label: 'MOC2',
        icon: 'HomeIcon',
        sortCode: 'MOC',
        sortOrder: 1,
        parent: null,
        menuCode: 'MOC_002'
      },
      {
        href: '/',
        label: 'ESH',
        icon: 'HomeIcon',
        sortCode: 'ESH',
        sortOrder: 0,
        parent: null,
        menuCode: 'ESH_001'
      },
      {
        href: '/',
        label: 'ESH2',
        icon: 'HomeIcon',
        sortCode: 'ESH',
        sortOrder: 1,
        parent: null,
        menuCode: 'ESH_001'
      },
      {
        href: '/masterInformation',
        label: '기준정보',
        icon: 'InformationCircleIcon',
        sortCode: 'SYSTEM',
        sortOrder: 0,
        parent: null,
        menuCode: 'SYSTEM_001'
      },
      {
        href: '/plant',
        label: 'Plant',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 1,
        parent: 'SYSTEM_001',
        menuCode: 'SYSTEM_002'
      },
      {
        href: '/department',
        label: 'Department',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 2,
        parent: 'SYSTEM_001',
        menuCode: 'SYSTEM_003'
      },
      {
        href: '/process',
        label: 'Process',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 3,
        parent: 'SYSTEM_001',
        menuCode: 'SYSTEM_003'
      },
      {
        href: '/maintenance',
        label: '시스템 운영',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 0,
        parent: null,
        menuCode: 'SYSTEM_004'
      },
      {
        href: '/menus',
        label: '메뉴관리',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 0,
        parent: 'SYSTEM_004',
        menuCode: 'SYSTEM_005'
      },
      {
        href: '/authentications',
        label: '권한관리',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 1,
        parent: 'SYSTEM_004',
        menuCode: 'SYSTEM_006'
      },
      {
        href: '/users',
        label: '이용자관리',
        icon: 'HomeIcon',
        sortCode: 'SYSTEM',
        sortOrder: 2,
        parent: 'SYSTEM_004',
        menuCode: 'SYSTEM_007'
      }
    ]
  }
})

export { MENU_STATE }
