import Link from 'next/link'
import Icon from '@/components/ui/icons'
import { useEffect, useState } from 'react'
import type { MenuItemInterface, MenuChildInterface } from './interface'
import classNames from 'classnames'
import { useLayoutRecoilState, useMenuRecoilState } from '@/lib/hooks'
interface MenuItemProps {
  menu: MenuItemInterface
}

const MenuItemChildren = ({ menu }: MenuItemProps) => {
  const { menuState, setMenuState } = useMenuRecoilState()
  const { layoutState } = useLayoutRecoilState()
  const [activated, setActivated] = useState(false)

  const toggleActive = () => {
    setActivated((prev) => !prev)
  }

  useEffect(() => {
    if (menuState.currentMenuItem === menu) {
      setActivated(true)
    }
  }, [menu, menuState.currentMenuItem])

  const activeIcon = activated ? (
    <Icon name='ChevronDownIcon' color='#fff' />
  ) : (
    <Icon name='ChevronRightIcon' color='#fff' />
  )

  const wrapperClass = classNames(
    'flex flex-row  hover:bg-indigo-900 p-2 relative',
    {
      'justify-center': !layoutState.opened
    }
  )

  const childListWrapperClass = classNames('flex-col  flex  bg-zinc-700', {
    'h-full': activated,
    'h-0 overflow-hidden': !activated
  })
  const handleMenuClick = (
    menu: MenuItemInterface,
    child: MenuChildInterface
  ) => {
    setMenuState((prev) => {
      return { ...prev, currentMenuItem: menu, currentMenuChildItem: child }
    })
  }

  const childLiClass = (child: MenuChildInterface) => {
    return classNames('hover:bg-indigo-900 text-xs', {
      'bg-indigo-900': menuState.currentMenuChildItem === child
    })
  }

  return (
    <div className='w-full'>
      <div className={wrapperClass} onClick={toggleActive}>
        <Icon name={menu.icon} size='sm' color='#fff' />

        {layoutState.opened && (
          <span className='ml-3 flex flex-row justify-between  w-full items-center text-sm'>
            {menu.label}

            <span>{activeIcon}</span>
          </span>
        )}
      </div>
      <ul className={childListWrapperClass}>
        {menu?.children?.map((child, index) => (
          <li
            onClick={() => {
              handleMenuClick(menu, child)
            }}
            key={index}
            className={childLiClass(child)}
          >
            <Link
              className='p-2 pl-4 h-full w-full block'
              href={`${menuState.currentHref}${menu.href}${child.href}`}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuItemChildren
