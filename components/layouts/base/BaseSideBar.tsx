import { useEffect, useCallback } from 'react'
import classNames from 'classnames'

// components
import { Profile, ThemeChanger } from '@/components'
import MenuList from '../menu/MenuList'

// utils
import { useLayoutRecoilState } from '@/lib/hooks'
import { _sidebarWrapper, _themeWrapper } from './utils/_base_styles'

const BaseSideBar = () => {
  const { layoutState, setLayoutState } = useLayoutRecoilState()

  const sidebarWrapperClass = classNames(_sidebarWrapper, {
    'w-20': !layoutState.opened,
    'w-80': layoutState.opened
  })

  const handleSidebarResponsive = useCallback(
    (width: number) => {
      setLayoutState((prev) => {
        const isMobile = width <= 680
        const isTablet = width <= 1024 && width > 680
        return { ...prev, opened: !isTablet && !isMobile, isMobile, isTablet }
      })
    },
    [setLayoutState]
  )
  useEffect(() => {
    window.addEventListener('resize', () => {
      handleSidebarResponsive(window.innerWidth)
    })
  }, [handleSidebarResponsive])

  const handleMouseLeave = () => {
    if (layoutState.isSidebarReadyToOver) {
      setLayoutState((prev) => {
        return { ...prev, opened: false }
      })
    }
  }
  return (
    <div onMouseLeave={handleMouseLeave} className={sidebarWrapperClass}>
      <div>
        <Profile />
        <MenuList />
      </div>
      {layoutState.opened && (
        <div className={_themeWrapper}>
          <ThemeChanger />
        </div>
      )}
    </div>
  )
}

export default BaseSideBar
