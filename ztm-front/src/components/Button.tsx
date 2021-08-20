import React from 'react'
import styled from 'styled-components'

type ButtonStylesProps = {
    isActive: boolean
}

type ButtonProps = {
    text: string,
    isSelected: boolean,
    onClick(text: string): void
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text, onClick, isSelected }) => (
    <StyledButton
        onClick={() => onClick(text)}
        isActive={isSelected}
    >
        {text}
    </StyledButton>
)

const StyledButton = styled.button<ButtonStylesProps>`
  font-size: large;
  padding: 5px;
  margin: 5px;
  background-color: ${props => props.isActive ? 'red' : 'white'};
  color: ${props => props.isActive ? 'white' : 'black'};
  border-radius: 10px;
  border: solid 1px black;
  :hover{
    background-color: red;
    color: white;
    cursor: pointer;
  }
`
