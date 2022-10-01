import { CardMember } from '../CardMember/CardMember'
import { HeaderMembers } from '../HeaderMembers/HeaderMembers'
import NavBarFilter from '../NavBarFilter/NavBarFilter'
import styled from 'styled-components'
import { AxiosResponse } from 'axios'
import { getUsersAxios } from '../../shared/services/usersServices'
import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const result: AxiosResponse<any, any> = await getUsersAxios()
      if (result) {
        setUsers(result.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <NavBarFilter />
      <HeaderMembers />
      <Scroll>
        {users.map((user: any) => {
          return <CardMember nameUser={user.name} country={user.country} />
        })}
      </Scroll>
    </Container>
  )
}

const Container = styled('div')`
  margin: 40px;
  background-color: white;
  height: calc(100vh - 162px);
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`

const Scroll = styled('div')`
  height: calc(100vh - 250px);
  overflow: auto;
  text-align: justify;
`
