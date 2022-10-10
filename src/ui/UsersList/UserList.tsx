import { useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'
import { CardMember } from '../CardMember/CardMember'
import { HeaderMembers } from '../HeaderMembers/HeaderMembers'
import NavBarFilter from '../NavBarFilter/NavBarFilter'
import { SkeltonUserList } from './SkeletonUserList'
import { getUsersAxios } from '../../shared/services/usersServices'
import styled from 'styled-components'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    try {
      const result: AxiosResponse<any, any> = await getUsersAxios()
      if (result) {
        setUsers(result.data)
        setLoading(false)
      }
    } catch (e) {
      console.log(e)
      setLoading(false)
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
        {
        loading ?
        <SkeltonUserList quantity={9}/>
        :
        users.map((user: any, id) => {
          return (
            <CardMember
              key={id}
              nameUser={user.name}
              country={user.country}
              wageAmount={user.wage}
              totalTime={user.totalTime}
              status={user.status}
            />
          )
        })
        }
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
