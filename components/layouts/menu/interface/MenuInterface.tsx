interface MenuChildInterface {
  href: string
  label: string
}
interface MenuItemInterface {
  href: string
  label: string
  icon: string
  expand?: boolean
  children?: MenuChildInterface[]
}
interface MenuItemList extends Array<MenuItemInterface> {}

interface MenuSortItemType {
  label: string
  href: string
  sortCode: string
}

interface MenuSortType extends Array<MenuSortItemType> {}

export type {
  MenuChildInterface,
  MenuItemInterface,
  MenuItemList,
  MenuSortType,
  MenuSortItemType
}
