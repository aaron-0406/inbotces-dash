import styled from 'styled-components';

interface ButtonInterface {
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  disable?: boolean;
}

const Button = styled('button')<ButtonInterface>`
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : 'white'};
  cursor: pointer;
  margin: 5px;
  height: calc(20px + 2vmin);
  width: calc(120px + 2vmin);
  border-radius: ${props => (props.border ? props.border : '0px')};
  color: ${props => (props.textColor ? props.color : 'black')};
  border-color: ${props =>
    props.borderColor ? props.borderColor : 'white'};

  :hover {
    background-color: ${props =>
      props.disable ? '' : 'white'};
    color: ${props => (props.disable ? '' : 'white')};
  }
`;

export default Button;
