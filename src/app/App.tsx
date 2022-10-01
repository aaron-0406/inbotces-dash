import React from 'react'
import { StoreProvider } from '../shared/contexts/StoreProvider'
import AppRouter from '../shared/routes/AppRouter'
import GlobalStyle from '../ui/styles/global/globalStyles'

export const App = () => {
  return (
    <StoreProvider>
      <GlobalStyle />
      <div className="app">
        <AppRouter />
      </div>
    </StoreProvider>
  )
}
