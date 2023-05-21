import type { MenuSortType } from './interface'
import MenuSortItem from './MenuSortItem'

interface MenuSortProps {
  menuSortList: MenuSortType
}

const defaultProps = {
  menuSortList: [
    { label: 'Sample', href: '/sample', sortCode: 'SAMPLE' },
    { label: 'PSM', href: '/psm', sortCode: 'PSM' },
    { label: 'MOC', href: '/moc', sortCode: 'MOC' },
    { label: 'ESH', href: '/esh', sortCode: 'ESH' },
    { label: 'System', href: '/system', sortCode: 'SYSTEM' }
  ]
}

const MenuSort = ({ menuSortList }: MenuSortProps) => {
  return (
    <div>
      <ul className='flex flex-row text-theme-text-secondary'>
        {menuSortList.map((sortItem, index: number) => (
          <MenuSortItem key={index} sortItem={sortItem} />
        ))}
      </ul>
    </div>
  )
}

MenuSort.defaultProps = defaultProps
export default MenuSort
