import { Skeleton } from "antd";
import styled from 'styled-components';

export const SkeltonUserList = ({ quantity }: { quantity: number }) =>{
  const quant = Array.from(Array(quantity));
return (
    <>
      {
      quant.map((item,id) => {
        return(
          <TableItemMember key={id}>
            <Section>
              <Skeleton.Avatar active={true} shape='circle' size={'small'} />
              <Skeleton.Input  active={true} size={'small'} />
            </Section>
            <Section>
              <Skeleton.Input  active={true} size={'small'} />
            </Section>
            <Section>
              <Skeleton.Input  active={true} size={'small'} />
            </Section>
            <Section>
              <Skeleton.Input  active={true} size={'small'} />
            </Section>
            <Section>
              <Skeleton.Input  active={true} size={'small'} />
            </Section>
            <Section>
              <Skeleton.Button  active={true} size={'small'} />
            </Section>
          </TableItemMember>
        )
      })
      }
    </>
  )
}


const TableItemMember = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding-block: 10px;
  justify-content: center;
`

const Section = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`