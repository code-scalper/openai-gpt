import { useInfoRecoilState, useLayoutRecoilState } from '@/lib/hooks'
import Icon from '@/components/ui/icons'

const MenuMobileHeader = () => {
  const { infoState } = useInfoRecoilState()
  const { setLayoutState } = useLayoutRecoilState()
  const toggleOpened = () => {
    setLayoutState((prev) => {
      return { ...prev, mobileMenuOpened: !prev.mobileMenuOpened }
    })
  }
  return (
    <div className=''>
      <div className='flex justify-end'>
        <span
          onClick={toggleOpened}
          className='hover:text-theme-info-hover cursor-pointer'
        >
          <Icon name='XMarkIcon' />
        </span>
      </div>
      <div>{infoState.systemTitle}</div>
    </div>
  )
}

export default MenuMobileHeader
