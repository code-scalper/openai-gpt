import Link from 'next/link'
import Icon from '@/components/ui/icons'
import MenuItemChildren from './MenuItemChildren'
import type { MenuItemList } from './interface'
import classNames from 'classnames'
import { useLayoutRecoilState, useMenuRecoilState } from '@/lib/hooks'
interface MenuItemProps {
  menuList: MenuItemList
}
const MenuItem = ({ menuList }: MenuItemProps) => {
  const { layoutState } = useLayoutRecoilState()
  const { menuState } = useMenuRecoilState()
  const wrapperClass = classNames('flex flex-row', {
    'justify-center': !layoutState.opened
  })

  return (
    <>
      {menuList.map((menu, index) => (
        <li
          className='mb-2 flex flex-row items-center  cursor-pointer text-sm
          '
          key={index}
        >
          {menu.children !== undefined && menu.children.length > 0 ? (
            <MenuItemChildren menu={menu} />
          ) : (
            <div className='w-full hover:bg-indigo-900 p-2'>
              <div className={wrapperClass}>
                <Icon name={menu.icon} size='sm' color='#fff' />

                {layoutState.opened && (
                  <Link
                    href={`${menuState.currentHref}${menu.href}`}
                    className='ml-3 flex flex-row justify-between  w-full items-center'
                  >
                    {menu.label}
                  </Link>
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </>
  )
}

export default MenuItem
