import { AppBar } from "../../../../components/appBar/AppBar";
import { BackButton } from "../../../../components/buttons/BackButton";
import { NextButton } from "../../../../components/buttons/NextButton";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { RecoverPasswordHeader } from "../../components/RecoverPasswordHeader";

export function InformClientData() {
  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar />}
        header={<RecoverPasswordHeader />}
        main={
          <>
            <h4>Informe seu CPF</h4>
            <p>Você receberá uma mensagem com um link para troca de senha.</p>

            <label htmlFor="CPF-input">CPF</label>
            <input 
              type="number"
              required
              placeholder="000.000.000-00" 
            />
          </>
        }
        footer={
          <>
            <BackButton />
            <NextButton />
          </>
        }
      />
    </PageContainer>
  )
}