import {
  useRecoilState,
  useRecoilCallback,
  useRecoilValue,
  useRecoilValueLoadable
} from 'recoil'
import {
  LIST_STATE,
  LIST_SEARCH_STATE
} from '@/components/layouts/list/utils/_list_store'
import { TABLE_ITEMS } from '@/components/ui/table/utils/_table_store'
import type { SearchOptionInterface } from '@/lib/interface'

import { $_lib_fetchData, $_lib_generateTree } from '@/lib/commonUtils'
import type { FetchDataInterface } from '@/lib/interface'
import { TYPES } from './_list_constants'

const useListRecoilState = () => {
  const [listState, setListState] = useRecoilState(LIST_STATE)
  const [listSearchState, setListSearchState] =
    useRecoilState(LIST_SEARCH_STATE)

  const initializeListSearchState = useRecoilCallback(
    ({ snapshot, set }) =>
      async (searchOptions: SearchOptionInterface[]) => {
        const param: any = {}
        searchOptions.forEach((search) => {
          param[search.key] = null
        })

        set(LIST_SEARCH_STATE, param)
      }
  )

  const mapListSearchState = useRecoilCallback(
    ({ snapshot, set }) =>
      async (key: string, value) => {
        const listSearchSnapshot: any = await snapshot.getPromise(
          LIST_SEARCH_STATE
        )
        const tempListSearch = structuredClone(listSearchSnapshot)
        tempListSearch[key] = value

        set(LIST_SEARCH_STATE, tempListSearch)
      }
  )

  const generateRenderData = (data: any, renderFunction: string) => {
    switch (renderFunction) {
      case TYPES.GENERATE_TREE_MENU:
        return $_lib_generateTree(data, 'parentMenuId', 'menuId')
      default:
        return data
    }
  }

  const getListItems = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const listState = await snapshot.getPromise(LIST_STATE)
        const { getListUrl, getListParam } = listState
        console.log('getList item work!!!', getListUrl, getListParam)
        if (getListUrl !== '') {
          const fetchOption: FetchDataInterface = {
            url: getListUrl,
            method: 'get',
            params: getListParam
          }

          const response = await $_lib_fetchData(fetchOption)

          if (response?.status === 200 && response?.data?.length > 0) {
            let data = response.data
            if (listState.basicOptions.getListRenderFunction !== null) {
              data = generateRenderData(
                data,
                listState.basicOptions.getListRenderFunction
              )
            }

            set(LIST_STATE, {
              ...listState,
              listItems: data
            })
            set(TABLE_ITEMS, data)
          }
        }
      },
    []
  )

  return {
    getListItems,
    listState,
    setListState,
    listSearchState,
    setListSearchState,
    mapListSearchState,
    initializeListSearchState
  }
}

export default useListRecoilState
