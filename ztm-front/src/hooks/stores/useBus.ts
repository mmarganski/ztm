import { useBusStore } from '../../stores'
import { useStore } from 'outstated'

export const useBus = () => useStore(useBusStore)
