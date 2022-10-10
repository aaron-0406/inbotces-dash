import { InputNumber, Modal, message } from 'antd'
import axios, { AxiosError } from 'axios'

import { API } from '../../shared/utils/constant/api'
import Bot from '../../shared/assets/Logo.svg'
import { Button } from '../Button'
import { EditOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useState } from 'react'

interface CardMemberProps {
  nameUser: string
  country: string
  wageAmount: string
  totalTime: string
  status: string,
  uuid: string,
  reload: () => void
}

export const CardMember = ({ nameUser, country, wageAmount, totalTime, status, uuid, reload }: CardMemberProps) => {
  
  const textColor = status.charAt(0) === 'P' ? 'black' : '#389E0D';
  const bgColor = status.charAt(0) === 'P' ? '#D9D9D9' : '#B7EB8F';

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [wage, setWage] = useState(parseInt(wageAmount));

  const updateWage = async() => {
    setConfirmLoading(true);
    console.log(`${API}/team-member/${uuid}`);
    try {
      const {status } = await axios.put(`${API}/team-member/${uuid}`, {
        wage
      })
      if(status === 200) {
        message.success('Wage update successful');
        reload();
        setModalOpen(false);
      }
    } catch (error) {
      const err = error as AxiosError;
      message.error(err.message)
    }
    setConfirmLoading(false);

  }
  
  const onChange = (value: number | null) => {
    setWage(value === null ? 3 : value); 
  };

  return (
    <TableItemMember>
      <Section>
        <Avatar src={Bot} />
        <NameTitle>{nameUser}</NameTitle>
      </Section>
      <Info>Developer</Info>
      <Info>{country}</Info>
      <Section>
        <Info>{wageAmount} USD</Info>
        <Button borderColor='transparent' style={{padding: 5}} onClick={() => setModalOpen(true)}>
            <EditOutlined />
        </Button>
      </Section>
      <Info>{totalTime}</Info>
      <Section>
        <Button textColor={textColor} backgroundColor={bgColor} shape='round'>
          {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
        </Button>
      </Section>

      <Modal
        title={`Update Wage for ${nameUser}`}
        centered
        visible={modalOpen}
        onOk={() => updateWage()}
        confirmLoading={confirmLoading}
        onCancel={() => {
          setModalOpen(false);
          setWage(parseInt(wageAmount));
        }}
      >
        <InputNumber min={1} max={50} onChange={onChange} value={wage} addonAfter="$" />
      </Modal>
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Avatar = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 99px;
  margin-left: 8px;
`

const NameTitle = styled('p')`
  margin: 0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  width: 80%;
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
