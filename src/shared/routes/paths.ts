/**
 * Paths configuration for routing
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  root: '/',
  error: '/error',
  general: {
    home: '/home',
    setting: '/setting',
    notFound: '/not-found',
  },
  guest: {
    login: '/login',
    loginCallback: '/login/callback',
  },
}
