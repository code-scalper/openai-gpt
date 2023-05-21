import ListViewListItem from './ListViewListItem'
import { useListRecoilState } from '@/lib/hooks'
import { useCallback } from 'react'

interface ListViewListProps {
  items: any[]
  listHeader: any[]
}
interface SelectedMatchValueType {
  subject: string
  content: string
  writer: string
  time: string
}

const ListViewList = ({ items, listHeader }: ListViewListProps) => {
  const { listState, setListState } = useListRecoilState()

  const handleItemClicked = useCallback(
    (index: number, selectedMatchValue: SelectedMatchValueType) => {
      console.log(index, 'index clicked')
      setListState((prev) => {
        return { ...prev, selectedItemIndex: index, selectedMatchValue }
      })
    },
    [setListState]
  )

  return (
    <ul className='h-full max-h-full overflow-y-auto'>
      {items.map((item, index) => (
        <ListViewListItem
          key={index}
          item={item}
          index={index}
          isActive={index === listState.selectedItemIndex}
          listHeader={listHeader}
          handleItemClicked={handleItemClicked}
        />
      ))}
    </ul>
  )
}

export default ListViewList
