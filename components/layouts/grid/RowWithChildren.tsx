import classNames from 'classnames'
import { useState, useEffect } from 'react'
import Col from './Col'

interface RowProps {
  items: any[]
  gap?: number
  cols?: number
  rows?: number
  colSpan?: number[]
  rowSpan?: number[]
  wrap?: boolean
  className?: string
}

const defaultProps = {
  items: [],
  gap: 1,
  cols: 3,
  rows: 1,
  colSpan: [],
  rowSpan: [],
  wrap: false,
  className: ''
}

const Row = ({
  items,
  gap,
  cols,
  rows,
  colSpan,
  rowSpan,
  wrap,
  className
}: RowProps) => {
  const [gridClass, setGridClass] = useState<string>('')
  const generateChildClass = (index: number) => {
    let addClass = ''
    if (
      rowSpan !== undefined &&
      rowSpan.length > 0 &&
      rowSpan[index] !== undefined
    ) {
      addClass = `${addClass} row-span-${rowSpan[index]}`
    }
    if (
      colSpan !== undefined &&
      colSpan.length > 0 &&
      colSpan[index] !== undefined
    ) {
      addClass = `${addClass} col-span-${colSpan[index]}`
    }
    // console.log(addClass, 'addClass')
    return classNames(addClass)
  }
  useEffect(() => {
    setGridClass((prev) => {
      return classNames('grid-flow-row-dense grid gap-y-2', {
        'gap-x-1': gap === 1,
        'gap-x-2': gap === 2,
        'gap-x-3': gap === 3,
        'gap-x-4': gap === 4,
        'gap-x-5': gap === 5,
        'gap-x-6': gap === 6,
        'gap-x-7': gap === 7,
        'gap-x-8': gap === 8,
        'gap-x-9': gap === 9,
        'gap-x-10': gap === 10,
        'grid-cols-1': cols === 1,
        'grid-cols-2': cols === 2,
        'grid-cols-3': cols === 3,
        'grid-cols-4': cols === 4,
        'grid-cols-5': cols === 5,
        'grid-cols-6': cols === 6,
        'grid-cols-7': cols === 7,
        'grid-cols-8': cols === 8,
        'grid-cols-9': cols === 9,
        'grid-cols-10': cols === 10,
        'grid-cols-11': cols === 11,
        'grid-cols-12': cols === 12,
        'grid-rows-1': rows === 1,
        'grid-rows-2': rows === 2,
        'grid-rows-3': rows === 3,
        'grid-rows-4': rows === 4,
        'grid-rows-5': rows === 5,
        'grid-rows-6': rows === 6,
        'grid-rows-7': rows === 7,
        'grid-rows-8': rows === 8,
        'grid-rows-9': rows === 9,
        'grid-rows-10': rows === 10,
        'grid-rows-11': rows === 11,
        'grid-rows-12': rows === 12
      })
    })
  }, [cols, rows, gap, rowSpan, colSpan, wrap])

  return (
    <div className={gridClass}>
      {items.map((item: any, index: number) => (
        <Col key={index} className={generateChildClass(index)}>
          {item}
        </Col>
      ))}
    </div>
  )
}

Row.defaultProps = defaultProps

export default Row
