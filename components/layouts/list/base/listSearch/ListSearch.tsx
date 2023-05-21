import React, { useMemo, useEffect } from 'react'

// components
import ListSearchHeader from './ListSearchHeader'
import ListSearchInput from './ListSearchInput'

// libs
import { useLayoutRecoilState, useListRecoilState } from '@/lib/hooks'

// utils
import type { SearchOptionInterface } from '../../utils/_list_interfaces'
import { $_list_style_headerWrapper } from '../../utils/_list_style'

interface ListSearchProps {
  theme: string | undefined
  searchOptions: SearchOptionInterface[]
}

const ListSearch = ({ theme = 'doc', searchOptions }: ListSearchProps) => {
  const { layoutState } = useLayoutRecoilState()
  const { initializeListSearchState } = useListRecoilState()

  useEffect(() => {
    initializeListSearchState(searchOptions)
  }, [])

  const arrangeOption: { cols: number; gap: number } = useMemo(() => {
    const cols: number = layoutState.isMobile ? 2 : layoutState.isTablet ? 3 : 4
    const gap: number = layoutState.isMobile ? 1 : layoutState.isTablet ? 3 : 5
    return { cols, gap }
  }, [layoutState.isMobile, layoutState.isTablet])

  return (
    <div className={$_list_style_headerWrapper(theme)}>
      <ListSearchHeader theme={theme} />
      <ListSearchInput
        arrangeOption={arrangeOption}
        searchOptions={searchOptions}
      />
    </div>
  )
}
export default ListSearch
