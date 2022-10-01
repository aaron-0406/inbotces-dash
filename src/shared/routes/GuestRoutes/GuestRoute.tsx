import { Outlet } from 'react-router'
//import { LoginProvider } from '../../contexts/LoginProvider'
import paths from '../paths'
import RedirectRoute from '../RedirectRoute'

export const GuestRoute = () => {
  if (false) {
    return <RedirectRoute pathname={paths.general.home} />
  }

  return (
    <>
      <Outlet />
      {/* <LoginProvider></LoginProvider> */}
    </>
  )
}
