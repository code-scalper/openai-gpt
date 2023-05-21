import { useMemo, useRef, useEffect, useState, useCallback } from 'react'
import loadable from '@loadable/component'

// components
import ListSearch from './listSearch/ListSearch'
import ListDataTable from './ListDataTable'
import ListHeader from './ListHeader'
import ListUtils from './listUtils/ListUtils'
import ListEditTools from './listUtils/ListEditTools'
import { BaseDialog } from '@/components'

// utils
import type {
  SearchOptionInterface,
  BasicOptionInterface,
  DialogOptionInterface,
  ColumnsInterface
} from '@/lib/interface'
import { useListRecoilState, useTableRecoilState } from '@/lib/hooks'

interface ListPageProp {
  headers: ColumnsInterface[]
  items: any[]
  searchOptions: SearchOptionInterface[]
  dialogOptions: DialogOptionInterface
  basicOptions: BasicOptionInterface
}

const ListPage = ({
  headers,
  items,
  searchOptions,
  dialogOptions,
  basicOptions = {
    name: 'temp',
    theme: 'doc',
    id: 'temp',
    showTitle: true,
    endPoint: '/'
  }
}: ListPageProp) => {
  // list, table global state
  const { listState, setListState, getListItems } = useListRecoilState()
  const { tableState, filteredItems } = useTableRecoilState()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    // setTableItems((prev) => {
    //   return items
    // })
  }, [])

  useEffect(() => {
    getListItems()
  }, [listState])

  const listTopRef = useRef<HTMLDivElement>(null)
  const listDataTableHeight = useMemo(() => {
    if (mounted) {
      const total: number =
        listTopRef.current?.ownerDocument.body.clientHeight ?? 600
      const top: number = listTopRef.current?.clientHeight ?? 100
      const height = total - top - 60
      return height

      //  listTopRef.current.clientHeight
    }
    return 300
  }, [mounted])

  const handleClose = useCallback(
    (data: any) => {
      setListState((prev: any) => {
        return {
          ...prev,
          interaction: { ...prev.interaction, dialogDisplay: false }
        }
      })
      console.log('close', data)
    },
    [setListState]
  )
  const handleCustomEvent = useCallback((data: any) => {
    console.log('custom event')
  }, [])
  const dialogHandler = useMemo(() => {
    return {
      ...dialogOptions,
      open: listState.interaction.dialogDisplay,
      onClose: handleClose,
      onCustomEvent: handleCustomEvent
    }
  }, [listState.interaction.dialogDisplay, handleClose, handleCustomEvent])

  const DialogContent = loadable(
    async () => await import(`@/components/dialogs/${dialogOptions.component}`),
    {
      fallback: <div>로딩중입니다</div>
    }
  )

  return (
    <div className='pb-5'>
      <div ref={listTopRef}>
        {basicOptions.showTitle !== false && <ListHeader />}

        <ListSearch searchOptions={searchOptions} theme={basicOptions.theme} />
      </div>
      {tableState.isEditMode ? (
        <ListEditTools headers={headers} items={items} />
      ) : (
        <ListUtils headers={headers} items={items} />
      )}

      <ListDataTable
        headers={headers}
        items={filteredItems}
        height={listDataTableHeight}
        theme={basicOptions.theme}
      />
      <BaseDialog dialogOption={dialogHandler}>
        <DialogContent />
      </BaseDialog>
    </div>
  )
}

export default ListPage
