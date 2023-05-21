import { Button } from '@/components'
import {
  $_list_style_header,
  _list_style_searchTitle
} from '../../utils/_list_style'
const ListSearchHeader = ({ theme }: { theme: string }) => {
  return (
    <div className={$_list_style_header(theme)}>
      <p className={_list_style_searchTitle}>
        <span>Search</span>
      </p>
      <Button label='search' />
    </div>
  )
}

export default ListSearchHeader
