import { Route } from 'react-router-dom'
import Home from '../../../pages/Dash/Home'
import Login from '../../../pages/Login'
import NotFound from '../../../pages/NotFound'
import AppSwitch from '../AppSwitch'
import { GuestRoute } from '../GuestRoutes/GuestRoute'
import paths from '../paths'
import ProtectedRoute from '../ProtectedRoute'

const AppRouter = () => {
  return (
    <AppSwitch>
      <Route path={paths.general.notFound} element={<NotFound />} />
      <Route element={<GuestRoute />}>
        <Route path={paths.guest.login} element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path={paths.general.home} element={<Home />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </AppSwitch>
  )
}

export default AppRouter
