import {SubmitHandler, useForm} from 'react-hook-form';
import { useEffect, useState } from 'react'

import { API } from '../../shared/utils/constant/api';
import Box from '@mui/material/Box'
import { Button } from '../Button'
import Drawer from '@mui/material/Drawer'
import HeaderTemplate from './HeaderTemplate'
import axios from 'axios'
import styled from 'styled-components'

enum LocationEnum {
    PE = "PE",
    USD = "USA",
    SV = "SV"
  }
export interface IFormInput {
    location: LocationEnum | undefined;
    template: string | undefined;
    description: string | undefined;
  }

export const TemplateForm = () => {
  const [state, setState] = useState({ right: false })
  const { register, handleSubmit } = useForm<IFormInput>();
  
    useEffect(()=> {
        const getTemplates = async () => {
            try {
                const {data} = await axios.get(`${API}/template`)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getTemplates();
    },[])

  const toggleDrawer = (anchor: 'right', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    console.log(data)
    try {
        const resp = await axios.post(`${API}/template/`, {
            template: data.template,
            location: data.location,
            description: data.description
        })
        if(!resp){
            return console.log("error")
        }
        toggleDrawer('right', false);
    } catch (error) {
        console.log(error)
    }
  };

  const list = (anchor: 'right') => (
    <Box
      sx={{ width: 340, margin: 2 }}
      role="presentation"
    >
      <TitleDrawer>New Template</TitleDrawer>
      <Divider />
      <InfoDrawer>Custom Templates</InfoDrawer>
      <InfoDrawer>
        Inbot will help you to speed up invoices process. Just create your template and I will sent a reminder with
        accurate info to each of your employees on the day you choose. They only will have to copy and paste the
        information.
      </InfoDrawer>
      <br />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InfoDrawer>Location</InfoDrawer>
        <Select {...register("location")}>
            <Option value={'PE'}>PE</Option>
            <Option value={'USA'}>USA</Option>
            <Option value={'SV'}>SV</Option>
        </Select>
        <InfoDrawer>Template</InfoDrawer>
        <Input {...register("template")} type={'text'} />
        <InfoDrawer>Description</InfoDrawer>
        <TextArea {...register("description")}>Enter text here....</TextArea>
        <Section>
            <CancelButton onClick={toggleDrawer(anchor, false)}>Cancel</CancelButton>
            <SaveButton onClick={handleSubmit(onSubmit)}>Save</SaveButton>
        </Section>
      </Form>
    </Box>
  )

  return (
    <Container>
      <TextInfo>Custom Templates</TextInfo>
      <TextInfo>
        Inbot will help you to speed up invoices process. Just create your template and I will sent a reminder with
        accurate info to each of your employees on the day you choose. They only will have to copy and paste the
        information.{' '}
      </TextInfo>
      <Section>
        <>Template</>
        <CreateTemplateButton onClick={toggleDrawer('right', true)}>Create new Template</CreateTemplateButton>
      </Section>
      <HeaderTemplate />
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </Container>
  )
}

const Form = styled('form')`
`

const Section = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 6px;
`

const Container = styled('div')`
  margin: 40px;

  padding: 5px;

  display: flex;
  flex-direction: column;

  margin: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  letter-spacing: 0.75px;

  /* Neutral/dark */

  color: #3a3e41;
`

const CreateTemplateButton = styled(Button)`
  width: 172px;
  height: 32px;

  /* Gray/gray-1 */

  background: #ffffff;
  /* Gray / gray-5 */

  border: 1px solid #d9d9d9;
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  /* Gray / gray-9 */

  color: #262626;
`

const TextInfo = styled('p')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #000000;
`

const TitleDrawer = styled('p')`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: 1px;

  color: #000000;
`

const Divider = styled('div')`
  height: 1px;

  /* Surface/Default */

  background: #ffffff;
  /* Divider/Bottom */

  box-shadow: inset 0px -1px 0px #e1e3e5;
`

const InfoDrawer = styled('p')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #000000;
`

const Select = styled('select')`
  width: 100%;
`

const Option = styled('option')``

const Input = styled('input')`
  width: 100%;
`

const TextArea = styled('textarea')`
  width: 100%;
`

const CancelButton = styled(Button)`
  width: 150px;
  height: 30px;

  /* Gray/gray-1 */

  background: #ffffff;
  /* Gray / gray-5 */

  border: 1px solid #d9d9d9;
  border-radius: 8px;
`

const SaveButton = styled(Button)`
  width: 150px;
  height: 30px;

  /* Gray/gray-1 */

  background: #0e6e50;
  border-radius: 8px;
  color: white;
`
