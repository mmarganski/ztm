import React from 'react'

type MapProps = {
    activeBusId: number
}

export const Map: React.FunctionComponent<MapProps> = ({ activeBusId }) => (
    <div>
        {activeBusId}
    </div>
)
