// import { Urbanist, Raleway } from '@next/font/google'
import classNames from 'classnames'

// const urbanist = Urbanist({
//   weight: '100',
//   subsets: ['latin']
// })
// const urbanistMd = Urbanist({
//   //   weight: '500',
//   subsets: ['latin']
// })
// const raleway = Raleway({
//   weight: '100',
//   subsets: ['latin']
// })
// BaseLayout
const _base_style_wrapper = classNames(
  //  urbanistMd.className,
  'text-theme-text-primary  h-screen w-screen overflow-hidden flex flex-col'
)
const _base_style_innerWrapper = classNames(
  // urbanistMd.className,
  'h-full w-full  justify-start overflow-hidden flex flex-row'
)

const _base_style_spinner =
  'fixed flex justify-center items-center w-screen h-screen bg-black/40'

// BaseHeader
const _base_style_headerWrapper =
  'border-b text-theme-text-secondary border-theme-header-border bg-theme-header w-full p-2   flex flex-row justify-between  items-center border-solidh-full'
const _base_style_headerInnerWrapper = classNames(
  'flex flex-row h-full items-center justify-items-end'
)

// const _logoTitle = classNames(raleway.className, ' text-md w-64 p-2 font-thin')
// const _logoSubTitle = classNames(urbanist.className, 'font-thin')
const _base_style_logoTitle = classNames(' text-md w-64 p-2 font-thin')
const _base_style_logoSubTitle = classNames('font-thin')

// BaseSideBar
const _sidebarWrapper =
  'text-theme-text-secondary h-full border-r border-theme-sidebar-border   bg-theme-sidebar sidebar px-2 py-5 bg-light flex justify-between flex-col    outline-none overflow-y-auto '
const _themeWrapper = ''

// Base Content
const _base_style_contentWrapper =
  'h-full w-full bg-theme-content outline-none overflow-auto flex flex-col'

export {
  _base_style_wrapper,
  _base_style_innerWrapper,
  _base_style_spinner,
  _base_style_logoTitle,
  _base_style_logoSubTitle,
  _base_style_headerWrapper,
  _base_style_headerInnerWrapper,
  _sidebarWrapper,
  _themeWrapper,
  _base_style_contentWrapper
}
