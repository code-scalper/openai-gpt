import MenuItem from './MenuItem'
import classNames from 'classnames'
import { useLayoutRecoilState, useMenuRecoilState } from '@/lib/hooks'
interface MenuProps {
  menuName?: string
}

const defaultProps = {
  menuName: 'Sample'
}

const MenuList = ({ menuName }: MenuProps) => {
  const { layoutState, setLayoutState } = useLayoutRecoilState()
  const { menuState } = useMenuRecoilState()

  const listWrapperClass = classNames('', {
    'p-2': !layoutState.opened
  })

  const handleMouseEnter = () => {
    if (layoutState.isSidebarReadyToOver) {
      setLayoutState((prev) => {
        return { ...prev, opened: true }
      })
    }
  }

  return (
    <div>
      {/* {!layoutState.isMobile && (
        <div className={menuNameWrapperClass}>
          {layoutState.opened && <span>{menuName}</span>}
          <Toggle toggleOpened={toggleOpened} openState={layoutState.opened} />
        </div>
      )} */}

      <ul className={listWrapperClass} onMouseEnter={handleMouseEnter}>
        <MenuItem menuList={menuState.currentList} />
      </ul>
    </div>
  )
}

MenuList.defaultProps = defaultProps

export default MenuList
