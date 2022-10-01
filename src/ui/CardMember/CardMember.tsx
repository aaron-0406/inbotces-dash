import Bot from '../../shared/assets/Logo.svg'
import { Button } from '../Button'
import styled from 'styled-components'

interface CardMemberProps {
  nameUser: string
  country: string
}

export const CardMember = ({ nameUser, country }: CardMemberProps) => {
  return (
    <TableItemMember>
      <Section>
        <Avatar src={Bot} />
        <NameTitle>{nameUser}</NameTitle>
      </Section>
      <Info>Developer</Info>
      <Info>{country}</Info>
      <Info>9 USD</Info>
      <Info>298:49:14</Info>
      <Section>
        <Button textColor="#389E0D" backgroundColor="#B7EB8F">
          Approved
        </Button>
      </Section>
    </TableItemMember>
  )
}

const TableItemMember = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding-block: 10px;
`

const Section = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 99px;
`

const NameTitle = styled('p')`
  margin: 0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */

  letter-spacing: 0.75px;

  /* Neutral/dark */
  margin-left: 8px;
  color: #3a3e41;
`

const Info = styled('p')`
  margin: 0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  /* identical to box height, or 182% */

  text-align: center;
  letter-spacing: 1px;

  /* Neutral / 7 */

  color: #8c8c8c;
`
