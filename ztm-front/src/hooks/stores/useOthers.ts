import { useOthersStore } from '../../stores'
import { useStore } from 'outstated'

export const useOthers = () => useStore(useOthersStore)
