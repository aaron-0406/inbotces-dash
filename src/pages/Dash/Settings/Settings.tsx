import styled from 'styled-components'
import { Dashboard } from '../../../ui/Dashboard/Dashboard'
import { Header } from '../../../ui/Header/Header'
import { TemplateForm } from '../../../ui/Template/Template'

export const Settings = () => {
  return (
    <Container>
      <Dashboard />
      <Container style={{ flexDirection: 'column' }}>
        <Header />
        <TemplateForm />
      </Container>
    </Container>
  )
}

const Container = styled('div')`
  width: 100%;
  display: flex;
`
