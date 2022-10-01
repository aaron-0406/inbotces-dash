import { Button } from '../Button'
import { Link } from 'react-router-dom'
import LogoDash from '../../shared/assets/LogoDash.svg'
import paths from '../../shared/routes/paths'
import styled from 'styled-components'

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <LogoImage src={LogoDash} />

      <div style={{ paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Link to={paths.general.home}>
          <StyledButton>M</StyledButton>
        </Link>

        <Link to={paths.general.setting}>
          <StyledButton>S</StyledButton>
        </Link>
      </div>
    </DashboardStyled>
  )
}

const DashboardStyled = styled('div')`
  height: 100vh;
  width: 72px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d9d9d9;
  background-color: white;
`

const LogoImage = styled('img')`
  height: 53.19px;
  width: 40px;
`

const StyledButton = styled(Button)`
  width: 40px;
`
