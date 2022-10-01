import { Outlet } from 'react-router-dom'
/* import MainLayout from '../../../ui/Layouts/MainLayout' */
import storage from '../../utils/storage'
import paths from '../paths'
import RedirectRoute from '../RedirectRoute'

export const ProtectedRoute = () => {
  if (!true) {
    storage.clear()
    return <RedirectRoute pathname={paths.guest.login} />
  }

  return (
    <>
      <Outlet />
      {/* <MainLayout>
      </MainLayout> */}
    </>
  )
}
