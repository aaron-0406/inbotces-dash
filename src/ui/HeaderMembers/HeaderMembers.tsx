import styled from 'styled-components';

export const HeaderMembers = () => {
    return(
        <TableContainer>
            <Title align='left'>Name</Title>
            <Title>Role</Title>
            <Title>Location</Title>
            <Title>Wage Amount</Title>
            <Title>Total Time</Title>
            <Title>Status</Title>
        </TableContainer>
    )
}

const Title = styled('h1')<{ align?: string }>`
  margin: 0;
  font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    /* identical to box height, or 160% */
    text-align: center;
    letter-spacing: 0.75px;

    padding: 8px;
    /* Neutral/dark */

    color: #3A3E41;
`;

export const TableContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding-block: 10px;
  border-top: 1px solid #FAFAFA ;
  border-bottom: 1px solid #FAFAFA  ;
  background-color: #FAFAFA;
  padding: 0px 24px;

  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
`;