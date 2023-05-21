import { useCallback, useEffect, useMemo } from 'react'
import { Icon, Input, InputSelect } from '@/components'
// import { read, utils, writeFileXLSX } from 'xlsx'
import { utils, writeFileXLSX } from 'xlsx'

import { useTableRecoilState } from '@/lib/hooks'
import type {
  SelectOptionsInterface,
  TableStateInterface
} from '@/lib/interface'

// utils
import type { ColumnsInterface } from '@/components/ui/table/utils/_table_interfaces'
import {
  ENTITY_STATUS,
  LABELS
} from '@/components/layouts/list/utils/_list_constants'
import { _list_style_utilWrapper } from '@/components/layouts/list/utils/_list_style'
interface ListUtilsProps {
  headers: ColumnsInterface[]
  items: any[]
}

const ListUtils = ({ headers, items }: ListUtilsProps) => {
  const {
    tableState,
    setTableState,
    commitItems,
    saveItems,
    hiddenOptions,
    emptyHiddenOptions
  } = useTableRecoilState()

  const options = useMemo<SelectOptionsInterface[]>(() => {
    const firstOption = { key: '', label: '전체' }
    const array = [firstOption, ...headers]
    return array.map((h) => {
      return { key: h.key, label: h.label }
    })
  }, [headers])

  /* Fetch and update the state once */

  // const [pres, setPres] = useState([])
  useEffect(() => {
    void (async () => {
      // const f = await (
      //   await fetch('https://sheetjs.com/pres.xlsx')
      // ).arrayBuffer()
      // const wb = read(f) // parse the array buffer
      // console.log(wb)
      // const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      // const data: any = utils.sheet_to_json(ws) // generate objects
      // setPres(data) // update state
      // console.log(pres, data, 'data')
    })()
  }, [])

  // const editIconName = useMemo(()=>{
  //   return tableState.isEditMode ? '': ''
  // },[tableState.isEditMode ])

  /* get state data and export to XLSX */
  const exportFile = useCallback(() => {
    const ws = utils.json_to_sheet(items)
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'Data')
    writeFileXLSX(wb, 'SheetJSReactAoO.xlsx')
  }, [items])

  // filter value
  const handleFilterValue = useCallback(
    (value: string | number) => {
      setTableState((prev: any) => {
        return { ...prev, filterValue: value }
      })
    },
    [setTableState]
  )

  const editTable = useCallback(() => {
    setTableState((prev: TableStateInterface) => {
      return { ...prev, isEditMode: !prev.isEditMode }
    })
  }, [setTableState])

  const saveTableItems = useCallback(() => {
    //  validation...
    void saveItems()
  }, [])

  const createNewItem = useCallback(() => {
    setTableState((prev: any) => {
      return {
        ...prev,
        targetItem: { action: 'createNew', item: {}, index: -1, key: null }
      }
    })
  }, [])

  const handleChange = useCallback(
    (option: SelectOptionsInterface) => {
      const type = option.key !== '' ? 'FILTER_BY_KEY' : 'FILTER_ALL'
      setTableState((prev: any) => {
        return { ...prev, filterState: type, filterKey: option.key }
      })
    },
    [setTableState]
  )

  const commitStatus = useMemo(() => {
    const status = {
      changed: 0,
      deleted: 0,
      created: 0
    }
    commitItems.forEach((c: any) => {
      switch (c.entityStatus) {
        case ENTITY_STATUS.CREATE:
          status.created++
          break
        case ENTITY_STATUS.DELETE:
          status.deleted++
          break
        case ENTITY_STATUS.UPDATE:
          status.changed++
          break
        default:
          break
      }
    })
    return status
  }, [commitItems])

  return (
    <div className={_list_style_utilWrapper}>
      <div className='h-full'>
        <ul className='[&>li]:cursor-pointer [&>li]:mr-1 flex items-center  text-xs'>
          <li onClick={exportFile}>
            <img
              className='w-5 h-5'
              src='/images/excel-icon.png'
              alt='List data with Excel'
            />
          </li>

          <li
            onClick={editTable}
            className='hover:text-theme-primary bg-theme-content rounded text-theme-text=primary  flex items-center px-0 py-0 ml-2'
          >
            <Icon
              name='PencilSquareIcon'
              size='sm'
              className='h-5 w-5 p-[2px]'
            />
            <span>{LABELS.EDIT}</span>
          </li>
          {commitItems.length > 0 ? (
            <li
              onClick={saveTableItems}
              className='hover:text-theme-primary bg-theme-content rounded flex items-center px-0 py-0'
            >
              <Icon
                name='CircleStackIcon'
                size='sm'
                className='h-5 w-5 p-[2px]'
              />
              <span>{LABELS.SAVE}</span>
            </li>
          ) : (
            <li
              onClick={createNewItem}
              className='hover:text-theme-primary-hover bg-theme-content rounded text-theme-primary  flex items-center px-0 py-0'
            >
              <Icon name='PlusIcon' size='sm' className='h-5 w-5 p-[2px]' />
              <span>{LABELS.CREATE}</span>
            </li>
          )}

          <li className='ml-3 text-theme-doc-hover'>
            {hiddenOptions.length > 0 && (
              <span className='[&>span]:text-theme-warn flex items-center'>
                {LABELS.HIDE} <span>{hiddenOptions.length}</span> 건이 있습니다.
                {LABELS.UNDO}는
                <span
                  className='hover:text-theme-primary'
                  onClick={emptyHiddenOptions}
                >
                  <Icon
                    name='ArrowPathIcon'
                    size='sm'
                    className='h-5 w-5 p-[2px]'
                  />
                </span>
                를 클릭해주세요.
              </span>
            )}
          </li>
          <li className='ml-3 text-theme-doc-hover'>
            {commitItems.length > 0 && (
              <span className='[&>span]:text-theme-warn'>
                {LABELS.CHANGE} <span>{commitStatus.changed}</span> 건, 생성
                <span>{commitStatus.created}</span> 건, 삭제
                <span>{commitStatus.deleted}</span> 건 이 있습니다.
              </span>
            )}
          </li>
        </ul>
      </div>
      <div className='flex justify-end'>
        <div className='mr-1'>
          <InputSelect
            defaultAll={true}
            options={options}
            className='w-[130px] block'
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            className='block w-[200px] h-full'
            type='text'
            value={tableState.filterValue}
            onChange={(e) => {
              handleFilterValue(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ListUtils
