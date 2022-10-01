import { useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'
import { CardMember } from '../CardMember/CardMember'
import { HeaderMembers } from '../HeaderMembers/HeaderMembers'
import NavBarFilter from '../NavBarFilter/NavBarFilter'
import { getUsersAxios } from '../../shared/services/usersServices'
import styled from 'styled-components'

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
          return (
            <CardMember
              nameUser={user.name}
              country={user.country}
              wageAmount={user.wage}
              totalTime={user.totalTime}
              status={user.status}
            />
          )
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
