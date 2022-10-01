import styled from 'styled-components'

export default function HeaderTemplate() {
  return (
    <Container>
        <HeaderInfo>Template</HeaderInfo>
        <HeaderInfo>Location</HeaderInfo>
        <HeaderInfo>Schedule</HeaderInfo>
        <HeaderInfo>Description</HeaderInfo>
    </Container>
  )
}


const Container = styled('div')`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 8px;
    align-items: center;
    padding-block: 10px;

    background-color: #FAFAFA;
`

const HeaderInfo = styled('p')`
    margin: 0;
    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 24px;
/* identical to box height, or 160% */

text-align: center;
letter-spacing: 0.75px;

/* Neutral/dark */

color: #3A3E41;

text-align: center;
` 