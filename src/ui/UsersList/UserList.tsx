import { CardMember } from '../CardMember/CardMember';
import { HeaderMembers } from '../HeaderMembers/HeaderMembers';
import NavBarFilter from '../NavBarFilter/NavBarFilter';
import styled from 'styled-components';

export default function UserList() {
    const quant = Array.from(Array(8));
  return (
    <Container>
        <NavBarFilter />
        <HeaderMembers />
        <Scroll>
            {
            quant.map(() => {
                return <CardMember />
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
    border: 1px solid #D9D9D9;
    border-radius: 8px;
`

const Scroll = styled('div')`
    height: calc(100vh - 250px);
    overflow: auto;
    text-align:justify;
`