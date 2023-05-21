import {
  Row,
  Input,
  InputDate,
  InputSelect,
  InputSelectPlant
} from '@/components'

// utils
import { _list_style_bodyWrapper } from '../../utils/_list_style'
import {
  type SearchOptionInterface,
  type ArrangeOptionInterface
} from '../../utils/_list_interfaces'
import { TYPES } from '../../utils/_list_constants'

interface ListSearchInputProps {
  arrangeOption: ArrangeOptionInterface
  searchOptions: SearchOptionInterface[]
}

interface DynamicInputFormInterface {
  search: SearchOptionInterface
}
const DynamicInputForm = ({ search }: DynamicInputFormInterface) => {
  const { label, key, options, type } = search
  if (type === TYPES.NUMBER) {
    return <Input label={label} type='number' />
  } else if (type === TYPES.TEXT) {
    return <Input label={label} />
  } else if (type === TYPES.DATE_RANGE) {
    return <InputDate label={label} type='range' />
  } else if (type === TYPES.DATE) {
    return <InputDate label={label} />
  } else if (type === TYPES.SELECT) {
    return <InputSelect label={label} options={options ?? []} />
  } else if (type === TYPES.SELECT_PLANT) {
    return <InputSelectPlant label={label} options={options ?? []} />
  }
  return <></>
}

const ListSearchInput = ({
  arrangeOption,
  searchOptions
}: ListSearchInputProps) => {
  return (
    <div className={_list_style_bodyWrapper}>
      <Row cols={arrangeOption.cols} gap={arrangeOption.gap} colSpan={[1, 1]}>
        {searchOptions.map((search, index) => (
          <div key={index}>
            <DynamicInputForm search={search} />
          </div>
        ))}
      </Row>
    </div>
  )
}

export default ListSearchInput
