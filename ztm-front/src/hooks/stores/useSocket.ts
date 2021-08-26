import { useSocketStore } from '../../stores'
import { useStore } from 'outstated'

export const useSocket = () => useStore(useSocketStore)
