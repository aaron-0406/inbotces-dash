import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Modal, message } from 'antd'
import axios, { AxiosError } from 'axios';

import { API } from '../../shared/utils/constant/api';
import { Button } from '../Button';
import styled from 'styled-components';
import { useState } from 'react';

export interface TemplateInterface{
    template: string,
    location: string,
    description: string,
    uuid: string
}
interface PropsCardTemplate{
    template: TemplateInterface,
    reload : () => void;
    edit: (template:TemplateInterface ) => void;
}

export default function CardTemplate({template, reload, edit}:PropsCardTemplate) {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);


    const handleOk = async() => {
        setConfirmLoading(true);
        await removeItem();
        reload();
        setConfirmLoading(false);
        setOpen(false);
      };

      const removeItem = async () => {
        try {
            const {status } = await axios.delete(`${API}/template/${template?.uuid}`)
            if (status === 200) {
                message.success('The item has been removed')
            }
        } catch (error) {
            const err = error as AxiosError;
            message.success(err.message)
        }
      }
 
  return (
    <Container>
        <TemplateInfo>
            {template.template}
        </TemplateInfo>
        <AllInfo>
            {template.location}
        </AllInfo>
        <SectionDescription>
            <AllInfo>
                {template.description}
            </AllInfo>
            <SectionAction>
                <Button borderColor='transparent' style={{padding: 5}} onClick={() => edit(template)}>
                    <EditOutlined />
                </Button>
                <Button borderColor='transparent' style={{padding: 5}} onClick={()=>setOpen(true)} >
                    <DeleteOutlined />
                </Button>
            </SectionAction>
        </SectionDescription>

        <Modal
            title="Do you Want to delete these items?"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={()=>setOpen(false)}
        >
            <p>This item will be removed </p>
        </Modal>
    </Container>
  )
}

const Container = styled('div')`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding-block: 10px;

  background-color: #fff;
`

const TemplateInfo = styled('p')`
    margin: 24px;
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
    margin: 5px;
    color: #8C8C8C;
`

const SectionDescription = styled('div')`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 14px;
`

const SectionAction = styled('div')`
    display: flex;
    flex-direction: row;
    width: 20%;
    margin-right: 5px;
`