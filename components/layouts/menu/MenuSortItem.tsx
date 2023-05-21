import type { MenuSortItemType } from './interface'
import classNames from 'classnames'
import { useCallback } from 'react'
import { useMenuRecoilState } from '@/lib/hooks'
interface SortItemProps {
  sortItem: MenuSortItemType
  className?: string
}
const MenuSortItem = ({ sortItem, className = '' }: SortItemProps) => {
  const { menuState, setMenuState } = useMenuRecoilState()
  const handleMenu = useCallback(() => {
    const currentSort = sortItem.sortCode
    const currentHref = sortItem.href
    const { rawMenuList } = menuState

    const parentMenu: any[] = []
    rawMenuList.forEach((raw) => {
      if (raw.parent === null) {
        parentMenu.push({ ...raw })
      }
    })
    rawMenuList.forEach((menu) => {
      if (menu.parent !== null) {
        const parent: any = parentMenu.find(
          (sort) => sort.menuCode === menu.parent
        )
        parent.expand = true
        if (parent !== null && parent !== undefined) {
          if (parent.children === undefined || parent.children === null) {
            parent.children = []
          }
          parent.children.push(menu)
        }
      }
    })
    const sortedMenu = parentMenu.reduce((acc: any, cur) => {
      const sortCode: string = cur.sortCode
      if (acc[sortCode] === undefined) {
        acc[sortCode] = []
      }
      acc[sortCode].push(cur)
      return acc
    }, {})

    const currentList = sortedMenu[currentSort]
    setMenuState((prev) => {
      return {
        ...prev,
        currentList,
        currentSort,
        currentHref,
        list: sortedMenu,
        isInitialMenuSet: true
      }
    })
  }, [setMenuState, sortItem, menuState])

  const liClass = classNames(
    `mr-10 cursor-pointer hover:text-gray-100 ${className} text-sm`
  )
  return (
    <li className={liClass} onClick={handleMenu}>
      {sortItem.label}
    </li>
  )
}

export default MenuSortItem
