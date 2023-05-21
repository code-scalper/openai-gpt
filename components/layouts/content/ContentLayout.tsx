import React from 'react'
import classNames from 'classnames'
interface ContentLayoutProps {
  contentPadding: boolean
  children: React.ReactNode | React.ReactNode[]
  fixed: boolean
}
const ContentLayout = ({
  children,
  contentPadding,
  fixed
}: ContentLayoutProps) => {
  const wrapperClass = classNames('flex-grow max-h-full ', {
    'p-2': contentPadding,
    'overflow-y-hidden': fixed
  })
  return <div className={wrapperClass}>{children}</div>
}

export default ContentLayout
