import React, { useMemo } from 'react'
import { Table, FixedTable } from '@/components'
import type { ColumnsInterface } from '@/lib/interface/uiInterface/TableInterface'
import { useTableRecoilState } from '@/lib/hooks'

interface ListBoxProps {
  headers: ColumnsInterface[]
  items: any[]
  height: number
  theme: string | undefined
}

const ListDataTable = ({ headers, items, height, theme }: ListBoxProps) => {
  const { fixedItems, tableState } = useTableRecoilState()

  const fixedHeaders: ColumnsInterface[] = useMemo(() => {
    let columns: ColumnsInterface[] = []
    tableState.fixedOptions.forEach((option) => {
      const fixedHeader: any = headers.find(
        (header) => header.key === option.key
      )
      if (fixedHeader !== undefined) {
        columns.push(fixedHeader)
      }
    })
    return columns
  }, [tableState.fixedOptions])
  const hiddenHeaders: ColumnsInterface[] = useMemo(() => {
    const hiddenKeys: any = tableState.hiddenOptions.map((option) => option.key)
    return headers.filter((header) => {
      return !hiddenKeys.includes(header.key)
    })
  }, [tableState.hiddenOptions])

  return (
    <div className='mt-0'>
      {/* {fixedItems.length > 0 && (
        <FixedTable
          headers={fixedHeaders}
          minCellWidth={120}
          items={fixedItems}
          height={height}
          theme={theme}
          forFixed={true}
        />
      )} */}
      <Table
        headers={hiddenHeaders}
        minCellWidth={120}
        items={items}
        height={height}
        theme={theme}
      />
    </div>
  )
}

export default ListDataTable
