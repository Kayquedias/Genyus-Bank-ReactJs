import { AppBar } from "../../../../components/appBar/AppBar"
import { BackButton } from "../../../../components/buttons/BackButton"
import { NextButton } from "../../../../components/buttons/NextButton"
import PageContainer from "../../../../components/PageContainer"
import ProcessPageFooter from "../../../../components/ProcessPageFooter"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import { TextPix } from "../../components/text-pix/TextPix"
import "./transfersPixKey.scss"

export const TransfersPixKey = () => {
    return (
      <PageContainer>
          <ProcessPageLayout 
          appBar={<AppBar/>}
          header={<TextPix/>}
          main={(
            <>
            <div className="box-pix-transferens-value">
              <input 
              name="input-pix-transferens"
              className="input-pix-transferens"
              type="radio" />
              <label className="box-pix-choose">
                <strong>E-mail:</strong> <br/>
                marlonmendes.pix@gmail.com
              </label>
            </div>

            <div className="box-pix-transferens-value">
              <input
              name="input-pix-transferens"
              className="input-pix-transferens"
              type="radio" />
              <label className="box-pix-choose">
              <strong>Número de Celular: </strong><br/>
              (85) 99400-4747
              </label>
            </div>

            <div className="box-pix-transferens-value">
              <input
              name="input-pix-transferens"
              className="input-pix-transferens"
              type="radio" />
              <label className="box-pix-choose">
                <strong>CPF:</strong> <br/>
                123.456.789-00
              </label>
            </div>

            <div className="box-pix-transferens-value">
              <input
              name="input-pix-transferens"
              className="input-pix-transferens"
              type="radio" 
              />

              <label className="box-pix-choose">
                <strong>Chave Aleatória:</strong> <br/>
                f217c691-do3e-7268-654b-af477bbbww11
              </label>
            </div>

            </>
          )}
          footer={<ProcessPageFooter
          acess="/TranfersValue"
          buttonNext={<NextButton/>}
          buttonBack={<BackButton/>} />}/>
      </PageContainer>
    )
}