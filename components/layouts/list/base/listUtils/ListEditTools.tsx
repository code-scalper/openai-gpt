import { Icon } from '@/components'

import { useTableRecoilState } from '@/lib/hooks'

// utils
import { _list_style_utilWrapper } from '../../utils/_list_style'
import type { ColumnsInterface } from '@/components/ui/table/utils/_table_interfaces'

interface ListUtilsProps {
  headers: ColumnsInterface[]
  items: any[]
}

const ListUtils = ({ headers, items }: ListUtilsProps) => {
  const { cancelChangedItems, commitChangedItems, addItems } =
    useTableRecoilState()
  return (
    <div className={_list_style_utilWrapper}>
      <div className='h-full'>
        <ul className='[&>li]:cursor-pointer [&>li]:mr-1 flex items-center text-xs '>
          <li
            onClick={cancelChangedItems}
            className=' bg-theme-danger rounded text-theme-content flex items-center px-2 py-1'
          >
            <Icon
              name='NoSymbolIcon'
              size='sm'
              className='h-5 w-5 text-theme-content  p-[2px]'
            />
            <span>Cancel</span>
          </li>
          <li
            onClick={commitChangedItems}
            className=' bg-theme-success rounded text-theme-content flex items-center px-2 py-1'
          >
            <Icon
              name='CheckIcon'
              size='sm'
              className='h-5 w-5 text-theme-content p-[2px]'
            />
            <span>Commit</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className='[&>li]:cursor-pointer [&>li]:mr-1 flex items-center text-xs '>
          <li
            onClick={() => {
              void addItems(headers)
            }}
            className=' bg-theme-primary rounded text-theme-content flex items-center px-2 py-1'
          >
            <Icon
              name='PlusIcon'
              size='sm'
              className='h-5 w-5 text-theme-content p-[2px]'
            />
            <span>Add New</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListUtils
