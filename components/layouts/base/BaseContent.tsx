import PropTypes from 'prop-types'
import classNames from 'classnames'

// components
import BaseBreadCrumb from './BaseBreadCrumb'
import ContentLayout from '../content/ContentLayout'

// utils
import { BaseContentProps } from './utils/_base_interfaces'
import { _base_style_contentWrapper } from './utils/_base_styles'

const BaseContent = ({ children, contentPadding, fixed }: BaseContentProps) => {
  return (
    <div className={_base_style_contentWrapper}>
      <BaseBreadCrumb />
      <ContentLayout contentPadding={contentPadding} fixed={fixed}>
        {children}
      </ContentLayout>
    </div>
  )
}

BaseContent.propTypes = {
  children: PropTypes.element
}

export default BaseContent
