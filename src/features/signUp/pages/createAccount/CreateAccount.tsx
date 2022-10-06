import { useState } from "react"
import InputMask from "react-input-mask"
import { AppBar } from "../../../../components/appBar/AppBar"
import { BackButton } from "../../../../components/buttons/BackButton"
import { NextButton } from "../../../../components/buttons/NextButton"
import PageContainer from "../../../../components/PageContainer"
import ProcessPageFooter from "../../../../components/ProcessPageFooter"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import { CreateAccountHeader } from "../../components/AccountHeader/CreateAccountHeader"

import "./createAccount.scss"

export const CreateAccount = () => {
  const [inputValue, setInputValue] = useState('')

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
                <input 
                  type="text" 
                  id="clientFullName" 
                  placeholder="Marlon Mendes" 
                  autoComplete="off" 
                  required 
                  minLength={10}
                  maxLength={60}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                  }}
                />
              </div>

              <div>
                <label htmlFor="clientCPF">Qual é o seu CPF?</label>
                <InputMask 
                    mask="999.999.999-99"
                    placeholder="000-000-000.00"
                    required
                    name="clientCPF"
                    id="clientCPF"
                    autoComplete="off"  
                    onChange={(e) => {
                      setInputValue(e.target.value)
                    }}
                />              
              </div>

              <div>
                <label htmlFor="clientBirthDate">Qual é a sua data de nascimento?</label>
                <InputMask 
                  mask="99/99/9999" 
                  id="clientBirthDate" 
                  autoComplete="off" 
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>

              <div>
                <label htmlFor="clientEmail">Qual é o seu E-mail?</label>
                <input type="email" id="clientEmail" autoComplete="off" placeholder="marlonmendes@gmail.com" required/>
              </div>
              
              <div>
                <label htmlFor="cellphoneNumber">Qual é o seu número de telefone para contato?</label>
                <InputMask 
                  mask="(99) 99999-9999"
                  id="cellphoneNumber" autoComplete="off" placeholder="(85) 99400-4747" required/>
              </div>
              
              <div>
                <label htmlFor="password">Crie uma senha</label>
                <input 
                  type="password" 
                  id="password" 
                  required  
                  autoComplete="off" 
                  pattern="[A-Za-z0-9]{8-20}" 
                  placeholder="kayquedias04"
                />
              </div>
            </form>
          </div>
        }
        footer={
            <ProcessPageFooter acess="/create/permission" buttonNext={<NextButton />} buttonBack={<BackButton/>}/>
        }/>  
    </PageContainer>
  )
}