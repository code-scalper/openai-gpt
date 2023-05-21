// components
import { Setting, Notification, Information, Favorite } from '@/components'
import MenuSort from '@/components/layouts/menu/MenuSort'
import MenuMobile from '@/components/layouts/menu/MenuMobile'
import MenuHamburger from '@/components/layouts/menu/MenuHamburger'
import classNames from 'classnames'

// utils
import { useLayoutRecoilState } from '@/lib/hooks'
import {
  _base_style_headerWrapper,
  _base_style_headerInnerWrapper,
  _base_style_logoTitle,
  _base_style_logoSubTitle
} from './utils/_base_styles'
import { LABELS } from './utils/_base_constants'

const BaseHeader = () => {
  const { layoutState } = useLayoutRecoilState()
  const iconWrapper = 'flex flex-row h-full items-center'
  const mobileMenuWrapper = classNames(
    'transition-all z-20',
    'fixed',
    'h-screen',
    'top-0',
    {
      'right-0': layoutState.mobileMenuOpened,
      '-right-80': !layoutState.mobileMenuOpened
    }
  )
  return (
    <div className={_base_style_headerWrapper}>
      <div className={_base_style_headerInnerWrapper}>
        <h1 className={_base_style_logoTitle}>
          {/* <Image src="/images/logo.png" alt="logo" width="100" height="44" /> */}
          {LABELS.SITE_NAME}{' '}
          <span className={_base_style_logoSubTitle}>Logo</span>
        </h1>
        <div
          className={`${
            layoutState.isMobile || layoutState.isTablet ? 'hidden' : ''
          }`}
        >
          <MenuSort />
        </div>
      </div>

      <div
        className={classNames(iconWrapper, {
          hidden: layoutState.isMobile || layoutState.isTablet
        })}
      >
        <Notification items={[]} />
        <Favorite />
        <Information />
        <Setting />
      </div>
      <div
        className={classNames(iconWrapper, {
          hidden: !layoutState.isMobile && !layoutState.isTablet
        })}
      >
        <MenuHamburger />
        <div className={mobileMenuWrapper}>
          <MenuMobile />
        </div>
      </div>
    </div>
  )
}

export default BaseHeader
