import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../../shared/assets/Logo.svg'
import { getAuthUrl } from '../../shared/services/buttonServices'

export const Login = () => {
  const [urlButton, setUrlButton] = useState<string>('')

  const getLinkButton = async () => {
    try {
      const result: AxiosResponse<any, any> = await getAuthUrl()

      if (result) {
        setUrlButton(result.data)
        console.log(result.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getLinkButton()
  })

  return (
    <Container>
      <InfoContainer>
        <TitleInfoContainer>Speed up your invoice process</TitleInfoContainer>
        <SubTitleInfoContainer>
          Hi, I’m inbot, I can help you manage the invoice process of your employess
        </SubTitleInfoContainer>
      </InfoContainer>

      <InfoLogged>
        <ImageBot src={Logo} />
        <TitleLogin>Login in to Inbotces</TitleLogin>
        <a
          href={urlButton}
          style={{
            alignItems: 'center',
            color: '#000',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            display: 'inline-flex',
            fontFamily: 'Lato, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            height: '48px',
            justifyContent: 'center',
            textDecoration: 'none',
            width: '256px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '20px', width: '20px', marginRight: '12px' }}
            viewBox="0 0 122.8 122.8"
          >
            <path
              d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
              fill="#e01e5a"
            ></path>
            <path
              d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
              fill="#36c5f0"
            ></path>
            <path
              d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
              fill="#2eb67d"
            ></path>
            <path
              d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
              fill="#ecb22e"
            ></path>
          </svg>
          Sign in with Slack
        </a>

        <p style={{ fontSize: '13px', margin: '0', paddingTop: '16px' }}>
          By signing in, I agree to{' '}
          <a href="/" style={{ color: '#0E6E50' }}>
            Terms and Conditions
          </a>
        </p>
      </InfoLogged>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 100%;
`

const InfoContainer = styled('div')`
  height: 100vh;
  background-color: #0e6e50;
  width: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 200px;
`

const TitleInfoContainer = styled('p')`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 72px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  padding-bottom: 20px;
`

const SubTitleInfoContainer = styled('p')`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  text-align: center;
  letter-spacing: 0.75px;

  color: #ffffff;
`

const InfoLogged = styled('div')`
  background-color: white;
  width: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImageBot = styled('img')`
  width: 84px;
  height: 149px;
`

const TitleLogin = styled('p')`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  text-align: center;
  letter-spacing: 0.75px;
  padding-top: 20px;
  padding-bottom: 16px;

  color: #000000;
`
