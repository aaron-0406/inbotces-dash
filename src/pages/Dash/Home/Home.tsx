import styled from 'styled-components'
import { Dashboard } from '../../../ui/Dashboard/Dashboard'
import { Header } from '../../../ui/Header/Header'
import UserList from '../../../ui/UsersList/UserList'
import queryString from 'query-string'
import { useCallback, useEffect } from 'react'
import { useGeneralContext } from '../../../shared/contexts/StoreProvider'

export const Home = () => {
  const { setCode } = useGeneralContext()

  const getCodeUrl = useCallback(() => {
    const search = queryString.parse(window.location.search) as { code: string }
    if (search && search.code.length) setCode(search.code)
  }, [setCode])

  useEffect(() => {
    getCodeUrl()
  }, [getCodeUrl])

  return (
    <Container>
      <Dashboard />
      <Container style={{ flexDirection: 'column' }}>
        <Header />
        <UserList />
      </Container>
    </Container>
  )
}

const Container = styled('div')`
  width: 100%;
  display: flex;
`
