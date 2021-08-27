import { useStore } from 'outstated'
import { usePlacesStore } from 'stores'

export const usePlaces = () => useStore(usePlacesStore)
