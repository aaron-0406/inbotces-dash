import { Button as ButtonAnt } from 'antd'
import styled from 'styled-components'

interface ButtonInterface {
  backgroundColor?: string
  border?: string
  borderColor?: string
  textColor?: string
  disable?: boolean
}

const Button = styled(ButtonAnt)<ButtonInterface>`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
  //cursor: pointer;
  //border-radius: ${(props) => (props.border ? props.border : '8px')};
  color: ${(props) => (props.textColor ? props.textColor : 'black')};
  border-color: ${(props) => (props.borderColor ? props.borderColor : '')};

  font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
  /* identical to box height, or 200% */

  font-feature-settings: 'pnum' on, 'lnum' on;

  :hover {
    background-color: ${(props) => (props.disable ? '' : props.backgroundColor )};
    color: ${(props) => (props.disable ? '' : props.textColor)};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
  }
`

export default Button
