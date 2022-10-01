import styled from 'styled-components';

interface PropsCardTemplate{
    template: 
    {template: string,
        location: string,
        description: string,
    } | undefined
}

export default function CardTemplate({template}:PropsCardTemplate) {
  return (
    <Container>
        <TemplateInfo>
            {template?.template}
        </TemplateInfo>
        <AllInfo>
            {template?.location}
        </AllInfo>
        <AllInfo>
            {template?.description}
        </AllInfo>
    </Container>
  )
}

const Container = styled('div')`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding-block: 10px;

  background-color: #fafafa;
`

const TemplateInfo = styled('p')`
    margin: 0;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    /* or 154% */

    letter-spacing: 0.25px;

    /* Neutral/dark */

    color: #3A3E41;
`

const AllInfo = styled('p')`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    /* or 182% */

    text-align: center;
    letter-spacing: 1px;

    /* Neutral / 7 */

    color: #8C8C8C;
`