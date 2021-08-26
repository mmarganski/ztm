import { usePlacesStore } from '../../stores'
import { useStore } from 'outstated'

export const usePlaces = () => useStore(usePlacesStore)
