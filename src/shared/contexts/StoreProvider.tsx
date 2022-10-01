import React, { useContext, useState } from 'react'

export const GeneralContext = React.createContext<{
  code: string
  setCode: React.Dispatch<React.SetStateAction<string>>
} | null>(null)

export const StoreProvider = ({ children }: { children: any }) => {
  const [code, setCode] = useState('')

  return <GeneralContext.Provider value={{ code, setCode }}>{children}</GeneralContext.Provider>
}

export const useGeneralContext = () => {
  const context = useContext(GeneralContext)
  if (context === null) {
    throw new Error('useGeneralContext must be used within a StoreProvider')
  }
  return context
}
