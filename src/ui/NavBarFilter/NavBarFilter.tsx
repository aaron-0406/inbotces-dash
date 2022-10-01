import styled from 'styled-components';

export default function NavBarFilter() {
  return (
    <Container>
        <Title>Members</Title>
        <Section>
            <div>
                asd
            </div>
            <div>
                asd
            </div>
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