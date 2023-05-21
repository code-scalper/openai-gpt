import { useRecoilState } from 'recoil'
import { LAYOUT_STATE } from '@/components/layouts/base/utils/_base_stores'

const useLayoutRecoilState = () => {
  const [layoutState, setLayoutState] = useRecoilState(LAYOUT_STATE)
  return { layoutState, setLayoutState }
}

export default useLayoutRecoilState
