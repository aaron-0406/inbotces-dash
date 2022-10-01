import styled from 'styled-components'
import { Dashboard } from '../../../ui/Dashboard/Dashboard'
import { Header } from '../../../ui/Header/Header'
import UserList from '../../../ui/UsersList/UserList'

export const Home = () => {
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
