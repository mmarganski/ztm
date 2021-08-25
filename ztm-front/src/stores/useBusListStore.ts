import { useState } from 'react'

export const useBusListStore = () => {
    const [busList, setBusList] = useState<Record<string, string>>({})

    return {
        busList,
        setBusList
    }
}
