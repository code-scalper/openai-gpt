import { useMemo } from 'react'
import { Button } from '@/components'
import classNames from 'classnames'
interface selectedMatchValueType {
  subject: string
  content: string
  writer: string
  time: string
}
interface ListViewContentProps {
  item?: any
  selectedMatchValue: selectedMatchValueType
  listHeader: any[]
}

const ListViewContent = ({
  item = null,
  selectedMatchValue,
  listHeader
}: ListViewContentProps) => {
  const iterableItem = useMemo(() => {
    interface arrType {
      label: string
      val: any
    }
    const arr: arrType[] = []
    if (item === null) return []
    const keys = ['subject', 'writer', 'time']
    const matchKeys = listHeader
      .filter((li) => keys.includes(li.role))
      .map((li) => li.key)

    for (const [key, value] of Object.entries(item)) {
      if (!matchKeys.includes(key)) {
        const target = listHeader.find((li) => li.key === key)
        const param = { label: target.label, val: value }
        arr.push(param)
      }
    }
    return arr
  }, [item, listHeader])

  const wrapperClass = classNames(
    'max-full h-full min-h-full p-3 overflow-hidden',
    {
      'bg-theme-doc': item === null,
      'bg-theme-content': item !== null
    }
  )

  return (
    <div className={wrapperClass}>
      {item === null ? (
        <div className='h-full flex justify-center items-center'>
          No Content Selected
        </div>
      ) : (
        <div className='h-full pb-24'>
          <div className='w-full'>
            <ul className='flex justify-end'>
              <li className='mr-1'>
                <Button label='Edit' size='xs' />
              </li>
              <li>
                <Button label='Remove' size='xs' />
              </li>
            </ul>
          </div>
          <div className='mt-5'>
            <p className='text-2xl'>{selectedMatchValue.subject}</p>
          </div>
          <div className='mt-1 text-xs text-theme-content-border flex justify-between'>
            <p>{selectedMatchValue.time}</p>
            <p>{selectedMatchValue.writer}</p>
          </div>
          <div className='bg-theme-doc mt-3 p-3 border-theme-doc-border border max-h-full overflow-y-auto '>
            {iterableItem.map((obj, index) => (
              <div key={index} className='flex flex-col mb-3'>
                <span className='text-theme-content-border'>{obj.label}</span>
                <span>{obj.val}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ListViewContent
