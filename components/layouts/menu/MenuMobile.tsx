import MenuMobileList from './MenuMobileList'
import MenuMobileHeader from './MenuMobileHeader'
import { Setting, Notification, Information, Favorite } from '@/components'
import classNames from 'classnames'

const MenuMobile = () => {
  const wrapperClass = classNames(
    'transition-all border h-screen sidebar px-2 pt-5 flex justify-between items-between flex-col border border-solidh-full bg-zinc-800 border-none outline-none text-gray-400 overflow-y-auto  w-80',
    {}
  )

  return (
    <div
      className={wrapperClass}
      style={{ transition: 'width 300ms cubic-bezier(0.2,0,0,1) 2s' }}
    >
      <div>
        <MenuMobileHeader />
        <MenuMobileList />
      </div>
      <div className=' border-t-2 border-gray-700 pt-2 flex flex-row justify-end'>
        <Favorite />
        <Information />
        <Setting />
      </div>
    </div>
  )
}

export default MenuMobile
