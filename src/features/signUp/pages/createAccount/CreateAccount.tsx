import { AppBar } from "../../../../components/appBar/AppBar"
import { NextButton } from "../../../../components/buttons/NextButton"
import PageContainer from "../../../../components/PageContainer"
import ProcessPageFooter from "../../../../components/ProcessPageFooter"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import { CreateAccountHeader } from "../../components/AccountHeader/CreateAccountHeader"

import "./createAccount.scss"

export const CreateAccount = () => {
  return (
    <PageContainer>
      <ProcessPageLayout 
        appBar={<AppBar />}
        header={<CreateAccountHeader />}
        main={
          <div className="container-inputs">
            <form action="http://localhost:3000/create">
              <div>
                <label htmlFor="clientFullName">Qual o seu nome completo?</label>
                <input type="text" id="clientFullName" placeholder="Marlon Mendes" autoComplete="off" required/>
              </div>

              <div>
                <label htmlFor="clientCPF">Qual é o seu CPF?</label>
                <input type="number" id="clientCPF" required  autoComplete="off" placeholder="123.456.789-01"/>
              </div>

              <div>
                <label htmlFor="clientBirthDate">Qual é a sua data de nascimento?</label>
                <input type="number" id="clientBirthDate" autoComplete="off" required/>
              </div>

              <div>
                <label htmlFor="clientEmail">Qual é o seu E-mail?</label>
                <input type="email" id="clientEmail" autoComplete="off" placeholder="marlonmendes@gmail.com" required/>
              </div>
              
              <div>
                <label htmlFor="cellphoneNumber">Qual é o seu número de telefone para contato?</label>
                <input type="number" id="cellphoneNumber" autoComplete="off" placeholder="(85) 99400-4747" required/>
              </div>
              
              <div>
                <label htmlFor="password">Crie uma senha</label>
                <input type="password" id="password" required  autoComplete="off" pattern="[A-Za-z0-9]{8-20}" placeholder="kayquedias04"/>
              </div>
            </form>
          </div>
        }
        footer={
          <ProcessPageFooter buttonNext={<NextButton />} />
        }/>  
    </PageContainer>
  )
}