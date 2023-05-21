import { useMemo } from 'react'
import classNames from 'classnames'
interface ListHeader {
  label: string
  key: any
  width?: number
  role: any
}
interface ParamType {
  subject: string
  content: string
  writer: string
  time: string
}
interface ListViewListItemProps {
  item: any
  listHeader: ListHeader[]
  handleItemClicked: (arg0: number, arg1: ParamType) => void
  index: number
  isActive?: boolean
}

const ListViewListItem = ({
  item,
  listHeader,
  index,
  handleItemClicked,
  isActive = false
}: ListViewListItemProps) => {
  const USING_KEYS_UNION = {
    subject: 'subject',
    content: 'content',
    writer: 'writer',
    time: 'time'
  } as const
  type USING_KEYS = (typeof USING_KEYS_UNION)[keyof typeof USING_KEYS_UNION]
  type HeaderKey = [
    keyof typeof USING_KEYS_UNION,
    keyof typeof USING_KEYS_UNION,
    keyof typeof USING_KEYS_UNION,
    keyof typeof USING_KEYS_UNION
  ]

  const matchedValue = useMemo(() => {
    const keys: HeaderKey = ['subject', 'content', 'writer', 'time']
    const filteredHeader = listHeader.filter((li) => keys.includes(li.role))
    const param: ParamType = { subject: '', content: '', writer: '', time: '' }
    filteredHeader.forEach((header) => {
      const { role, key }: { role: USING_KEYS; key: string } = header
      const val = item[key]
      if (val !== null && val !== undefined) {
        param[role] = val
      }
    })
    return param
  }, [item, listHeader])

  const liClass = classNames(
    'text-xs p-2 border border-b-theme-border-content border-t-0 cursor-pointer',
    {
      'bg-theme-doc': isActive
    }
  )

  return (
    <li
      onClick={() => {
        handleItemClicked(index, matchedValue)
      }}
      className={liClass}
    >
      <div className='mt-1'>
        <p className='text-base'>{matchedValue.subject}</p>
      </div>
      <div>
        <p className='text-theme-content-border line-clamp-2'>
          {matchedValue.content}
        </p>
      </div>
      <div className='flex justify-between mt-2'>
        <p>{matchedValue.writer}</p>
        <p className='text-theme-content-border'>{matchedValue.time}</p>
      </div>
    </li>
  )
}

export default ListViewListItem
