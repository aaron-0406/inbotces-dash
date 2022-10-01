import {Button} from 'antd';
import styled from 'styled-components';

interface ButtonInterface {
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  disable?: boolean;
}

const ButtonD = styled(Button)<ButtonInterface>`
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : 'white'};
  cursor: pointer;
  height: calc(24px + 2vmin);
  width: calc(71px + 2vmin);
  border-radius: ${props => (props.border ? props.border : '8px')};
  color: ${props => (props.textColor ? props.textColor : 'black')};
  border-color: ${props =>
    props.borderColor ? props.borderColor : 'white'};

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  font-feature-settings: 'pnum' on, 'lnum' on;

  /*:hover {
    background-color: ${props =>
      props.disable ? '' : 'white'};
    color: ${props => (props.disable ? '' : 'white')};
  }*/
`;

export default ButtonD;
