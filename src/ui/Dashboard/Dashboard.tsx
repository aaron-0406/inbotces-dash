import LogoImg from '../../shared/images/image.png'
import styled from 'styled-components';

export const Dashboard = () => {
  return (
    <DashboardStyled>
        <LogoImage src={LogoImg} />
        <TextLogo>Inbotces</TextLogo>
    </DashboardStyled>
  )
}

const DashboardStyled = styled('div')`
    height: 100vh;
    width: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #D9D9D9;
    background-color: white;
`

const LogoImage = styled('img')`
    height: 53.19px;
    width: 40px;
`

const TextLogo = styled('p')`
    margin: 0;
    font-family: 'Rokkitt';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
`