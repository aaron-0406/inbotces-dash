import { BrowserRouterProps, Routes } from 'react-router-dom'

export const AppSwitch = ({ children, ...props }: BrowserRouterProps) => {
  return <Routes {...props}>{children}</Routes>
}
