import Icon from '@/components/ui/icons'
import classNames from 'classnames'
import { useLayoutRecoilState } from '@/lib/hooks'
import { useCallback } from 'react'

const MenuHamburger = () => {
  // const [isActive, setIsActive] = useState(false)

  // const toggleActive = () => {
  //   setIsActive((prev) => !prev)
  // }

  // useEffect(() => {
  //   //
  // }, [])

  const { setLayoutState } = useLayoutRecoilState()

  const toggleClick = useCallback(() => {
    setLayoutState((prev) => {
      return { ...prev, mobileMenuOpened: !prev.mobileMenuOpened }
    })
  }, [setLayoutState])
  const iconWrapperClass = classNames(
    ' h-10 w-10 flex justify-center items-center   rounded-lg focus:ring-4 focus:outline-none'
  )
  return (
    <div>
      <button
        onClick={toggleClick}
        type='button'
        className='mx-2 relative inline-flex items-center p-0 text-sm font-medium text-center'
      >
        <span className={iconWrapperClass}>
          <Icon name='Bars3Icon' color='info' size='md' />
        </span>
        <span className='sr-only'>Setting</span>
      </button>
    </div>
  )
}

export default MenuHamburger
