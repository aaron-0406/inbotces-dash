import RavnLogo from '../../shared/images/ravn_logo.png'
import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
        <ImageLogo src={RavnLogo}/>
        <TextLogo>Ravn Development</TextLogo>
    </Container>
  )
}

const Container = styled('div')`
    width: 100%;
    height: 72px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #D9D9D9;
`

const ImageLogo = styled('img')`
    width: 40px;
    height: 40px;
`

const TextLogo = styled('p')`
    margin: 0;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */
    text-align: center;
    letter-spacing: 1px;
    /* Neutral/dark */
    color: #3A3E41;
`
