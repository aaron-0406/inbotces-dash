import React from 'react'
import AppRouter from '../shared/routes/AppRouter'
import GlobalStyle from '../ui/styles/global/globalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <AppRouter />
      </div>
    </>
  )
}
