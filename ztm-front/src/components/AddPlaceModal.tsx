import React, { useState } from 'react'
import styled from 'styled-components'

type ModalProps = {
    isActive: boolean,
    onAddPlace(name: string, radius: number): void,
    onClose(): void
}

export const AddPlaceModal: React.FunctionComponent<ModalProps> = ({
    isActive,
    onAddPlace,
    onClose
}) => {
    const [placeName, setPlaceName] = useState('')
    const [radius, setRadius] = useState('')

    const submitInput = () => {
        onAddPlace(placeName, Number.parseFloat(radius))
        setPlaceName('')
        onClose()
    }

    return (
        isActive ? (
            <>
                <Overlay onClick={onClose}/>
                <Wrapper>
                    <Input
                        placeholder={'Name of your place'}
                        value={placeName}
                        onChange={event => setPlaceName(event.target.value)}
                        onKeyDown={event => event.key === 'Enter' ? submitInput() : null}
                    />
                    <Input
                        placeholder={'radius of influence'}
                        type="number"
                        value={radius}
                        onChange={event => setRadius(event.target.value)}
                        onKeyDown={event => event.key === 'Enter' ? submitInput() : null}
                    />
                    <button onClick={submitInput}>
                        Add Place
                    </button>
                </Wrapper>
            </>
        ): null
    )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: white;
  z-index: 1000;
  margin: 20%
`

const Input = styled.input`
  justify-content: center;
  font-family: monospace;
  margin-bottom: 10px;
`
