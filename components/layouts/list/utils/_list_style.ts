import classNames from 'classnames'

// ListSearch
const $_list_style_headerWrapper = (theme: string) => {
  return `flex flex-col mt-2 p-0 border border-theme-${theme}-border`
}

const $_list_style_header = (theme: string) => {
  return classNames(
    `border  text-sm flex justify-between items-center py-1 px-2 outline-none min-w-full`,
    `border-theme-${theme} bg-theme-${theme} text-${
      theme === 'doc' ? 'primary' : 'white'
    }`
  )
}
const _list_style_bodyWrapper = 'p-3'

const _list_style_searchTitle = 'flex items-center h-full justify-center'

// listUtils
const _list_style_utilWrapper =
  'flex w-full h-full justify-between items-center  py-2 pb-1 mt-2 '

export {
  $_list_style_headerWrapper,
  $_list_style_header,
  _list_style_bodyWrapper,
  _list_style_searchTitle,
  _list_style_utilWrapper
}
