import { AppBar } from "../../../../components/appBar/AppBar";
import { BackButton } from "../../../../components/buttons/BackButton";
import { NextButton } from "../../../../components/buttons/NextButton";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { RecoverPasswordHeader } from "../../components/RecoverPasswordHeader";
import "./clientCPF.scss"
import InputMask from "react-input-mask";

export function ClientCPF() {
  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar />}
        header={<RecoverPasswordHeader />}
        main={
          <>
            <h4 className="headings-standard">Informe seu CPF</h4>
            <p className="paragraph-standard">Você receberá uma mensagem com um link para troca de senha.</p>

            <div className="input-cpf">
              <label htmlFor="CPF-input">CPF</label>
                <InputMask
                  mask="999.999.999-99"
                  placeholder="000-000-000.00"
                  required
                  name="cpf"
                  id="CPF-input"
                />  
            </div>
          </>
        }
        footer={
          <ProcessPageFooter acess="/home" buttonBack={<BackButton/>} buttonNext={<NextButton/>}/>
        }
      />
    </PageContainer>
  )
}