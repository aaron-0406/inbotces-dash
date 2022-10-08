import { Dropdown, Input, Menu, MenuProps, Select, Space } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { API } from '../../shared/utils/constant/api'
import Box from '@mui/material/Box'
import { Button } from '../Button'
import CardTemplate from './CardTemplate';
import { DownOutlined } from '@ant-design/icons';
import Drawer from '@mui/material/Drawer'
import HeaderTemplate from './HeaderTemplate'
import axios from 'axios'
import styled from 'styled-components'

export interface IFormInput {
    location: string;
    template: string | undefined;
    description: string | undefined;
  }

const { TextArea : TextAreaStyled } = Input;
const { Option } = Select;

export const TemplateForm = () => {
  const [state, setState] = useState({ right: false })
  const { register, handleSubmit, setValue } = useForm<IFormInput>();
  const [template, setTemplate] = useState([]);
  const [variables, setVariables] = useState<{label:string, key: string}[]>([]);
  
  const [textTemplate, setTextTemplate] = useState('');

    useEffect(()=> {
        const getTemplates = async () => {
            try {
                const {data} = await axios.get(`${API}/template`);
                setTemplate(data)
            } catch (error) {
                console.log(error)
            }
        }
        getTemplates();
    },[])

    useEffect(()=> {
      const getTemplatesVariables = async () => {
          try {
              const {data} = await axios.get(`${API}/template/variables`);
              console.log(createMenu(data));
              setVariables(createMenu(data))
          } catch (error) {
              console.log(error)
          }
      }
      getTemplatesVariables();
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
    /*try {
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
    }*/
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setValue('location', value);
  };

  const list = (anchor: 'right') => (
    <Box
      sx={{ width: 380, margin: 2 }}
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
      <div style={{zIndex: 2}}>
      <Dropdown overlay={menu}>
        <Button style={{width:'100%', fontFamily:'SF Pro Tex'}} type={'dashed'}>
          <Space>
            Avalaible Variables
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      </div>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InfoDrawer>Template</InfoDrawer>
        <TextArea {...register("template")} onChange={(e)=>{
          setTextTemplate(e.target.value);
          setValue('template',e.target.value);
        }} value={textTemplate} />
        <InfoDrawer>Select Location</InfoDrawer>
        <Select {...register("location", {value : "PE" })} size='small' defaultValue="PE" style={{width: "100%"}} onChange={handleChange}>
            <Option value='PE'>PE</Option>
            <Option value='USA'>USA</Option>
            <Option value='SV'>SV</Option>
        </Select>
        <InfoDrawer>Description</InfoDrawer>
        <TextArea {...register("description")} onChange={(e)=> setValue('description',e.target.value) }/>
        <Section>
            <CancelButton onClick={toggleDrawer(anchor, false)}>Cancel</CancelButton>
            <SaveButton onClick={handleSubmit(onSubmit)}>Save</SaveButton>
        </Section>
      </Form>
    </Box>
  )

  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e.key);
    setTextTemplate(`${textTemplate} ${e.key}`)
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={variables}
    />
  );
  
    const createMenu = (data: any) => {
      var keys = Object.keys(data);
      const items = []
      for (const k of keys) {
        items.push({
          label: k,
          key: data[k]
        });
      }
      return items;
    }

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
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} style={{position:'relative', zIndex:1}}>
        {list('right')}
      </Drawer>

      {
        template.map(item => {
            return (
                <CardTemplate template={item}/>
            )
        })
      }
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
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  /* identical to box height, or 157% */

  color: #000000;
`

/*const Input = styled('input')`
  width: 100%;
`*/

const TextArea = styled(TextAreaStyled)`
  //width: 100%;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  letter-spacing: 0.25px;
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
