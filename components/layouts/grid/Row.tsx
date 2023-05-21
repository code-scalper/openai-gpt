import { isValidElement } from 'react'

import RowWithChild from './RowWithChild'
import RowWithChildren from './RowWithChildren'

interface RowProps {
  children: any | any[]
  gap?: number
  cols?: number
  rows?: number
  colSpan?: number[]
  rowSpan?: number[]
  wrap?: boolean
  className?: string
}

const defaultProps = {
  children: [],
  gap: 1,
  cols: 3,
  rows: 1,
  colSpan: [],
  rowSpan: [],
  wrap: false,
  className: ''
}

const Row = ({
  children,
  gap,
  cols,
  rows,
  colSpan,
  rowSpan,
  wrap,
  className
}: RowProps) => {
  return (
    <>
      {isValidElement(children) ? (
        <RowWithChild
          item={children}
          gap={gap}
          cols={1}
          rows={1}
          colSpan={colSpan}
          rowSpan={rowSpan}
          className={className}
        ></RowWithChild>
      ) : (
        <RowWithChildren
          items={children}
          gap={gap}
          cols={cols}
          rows={rows}
          colSpan={colSpan}
          rowSpan={rowSpan}
          className={className}
        ></RowWithChildren>
      )}
    </>
  )
}

Row.defaultProps = defaultProps

export default Row
