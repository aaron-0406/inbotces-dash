import { Button } from '../Button'
import { DatePicker } from 'antd'
import styled from 'styled-components'

export default function NavBarFilter() {
  const { RangePicker } = DatePicker

  return (
    <Container>
      <Title>Members</Title>
      <Section>
        <Section>
          <Button type="dashed"> Filter</Button>
        </Section>
        <Section>
          <RangePicker />
        </Section>
      </Section>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Section = styled('div')`
    display: flex;
    align-items: center;
    margin-right: 10px;
    visibility: hidden;
`

const Title = styled('p')`
  margin: 0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  padding: 8px;
`
