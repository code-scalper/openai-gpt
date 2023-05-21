import MenuSortItem from './MenuSortItem'
import type { MenuSortType } from './interface'
import classNames from 'classnames'

interface MenuSortProps {
  menuSortList: MenuSortType
}

const defaultProps = {
  menuSortList: [
    { label: 'MENU1', href: '/', categoryClass: 'MENU_1' },
    { label: 'MENU2', href: '/', categoryClass: 'MENU_2' },
    { label: 'MENU3', href: '/', categoryClass: 'MENU_3' },
    { label: 'MENU4', href: '/', categoryClass: 'MENU_4' }
  ]
}

const MenuMobileList = ({ menuSortList }: MenuSortProps) => {
  const listWrapperClass = classNames('flex flex-col text-gray-300')
  const className = 'mt-5 ml-2'
  return (
    <div>
      <ul className={listWrapperClass}>
        {menuSortList.map((sortItem, index: number) => (
          <MenuSortItem key={index} sortItem={sortItem} className={className} />
        ))}
      </ul>
    </div>
  )
}

MenuMobileList.defaultProps = defaultProps

export default MenuMobileList
