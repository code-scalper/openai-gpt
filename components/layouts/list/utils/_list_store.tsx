import { v1 } from 'uuid'
import { atom, selector } from 'recoil'
import type { FetchDataInterface } from '@/lib/interface'
import { $_lib_fetchData } from '@/lib/commonUtils/apiHandler'
const LIST_STATE = atom({
  key: `listState${v1()}`,
  default: {
    interaction: {
      dialogDisplay: false
    },
    id: '',
    endPoint: '',
    getListUrl: '',
    getListParam: {},
    basicOptions: {
      getListRenderFunction: null
    },
    searchOptions: [],
    selectedItemIndex: -1,
    selectedMatchValue: { subject: '', content: '', writer: '', time: '' },
    listItems: [],
    listItemRenderFunction: null
  }
})

const LIST_SEARCH_STATE = atom({
  key: `listSearchState${v1()}`,
  default: {}
})

// const LIST_ITEMS = selector({
//   key: `listItems${v1()}`,
//   get: async ({ get }) => {
//     const listState = get(LIST_STATE)
//     const { getListParam, getListUrl } = listState

//     if (getListUrl === '') return null

//     const fetchOption: FetchDataInterface = {
//       url: getListUrl,
//       method: 'get',
//       params: getListParam
//     }
//     const res = await $_lib_fetchData(fetchOption)
//     if (res && res.status === 200 && res.data) {
//       console.log(res.data, 'res data')
//       return res.data
//     }

//     return null
//   }
// })

// const SAVE_ITEMS = selector({
//   key: `tableStats${v1()}`,
//   get: ({ get }: any) => {
//     const items = get(TABLE_ITEMS)
//     const totalItems = items.length
//     const commitItems = items.filter((item: any) => item.commitId)

//     return {
//       totalItems,
//       commitItems
//       //   totalChangedItems
//     }
//   }
// })

export { LIST_STATE, LIST_SEARCH_STATE }
