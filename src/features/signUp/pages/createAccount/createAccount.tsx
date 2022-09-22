import { AppBar } from "../../../../components/appBar/AppBar"
import PageContainer from "../../../../components/PageContainer"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import { createAccountHeader } from "../../components/createAccountHeader"

export const createAccount = () => {
  return (
    <PageContainer>
      <ProcessPageLayout 
        appBar={<AppBar />}
        header={''}
        main={''}
        footer={''}
      />  
    </PageContainer>
  )
}