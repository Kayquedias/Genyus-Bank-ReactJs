import { AppBar } from "../../../../components/appBar/AppBar";
import { ProcessDescriptionHeader } from "../../../../components/header/ProccessDescriptionHeader";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { Greetings } from "../../components/greetings/Greetings";
import person from "../../../../_assets/person.svg"
import lock from "../../../../_assets/lock.svg"
import confirmed from "../../../../_assets/confirmed.svg"
import visible from "../../../../_assets/visible.svg"
import Button from "../../../../components/Button";
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import { FooterLinks } from "../../components/FooterLinks";
import "./signIn.scss"


function SignIn() {
  return (
    <div>
      <PageContainer>
        <ProcessPageLayout
          appBar={<AppBar arg={false}/>}
          header={
            <ProcessDescriptionHeader component={<Greetings />}/>
          }
          main={
            <form action="/home">
              <div className="cpf-container">
                <label htmlFor="input-cpf">CPF</label>
                <div>
                  <img src={person} alt="perfil" />
                  <input 
                    width={15}  
                    placeholder="000.000.000-00" 
                    type="number" 
                    name="cpf" 
                    id="input-cpf" 
                    required
                    />
                  <img src={confirmed} alt="ok" />
                </div>
              </div>
              <div className="password-container">
                <label htmlFor="input-password">Senha</label>
                <div>
                  <img src={lock} alt="senha" />
                  <input 
                    placeholder="Sua senha" 
                    type="password" 
                    name="password" 
                    id="input-password"
                    required
                  />
                  <img src={visible} alt="visivel" />
                </div>
              </div>
              
              <div className="lembre-de-mim">
                <p>Lembre de mim</p>
                <ul className="tg-list">
                  <li className="tg-list-item">
                    <input type="checkbox" defaultChecked id="cb4" className="tgl tgl-flat" />
                    <label htmlFor="cb4" className="tgl-btn"></label>
                  </li>
                </ul>
              </div>

              <div>
                <Button text="Entrar" widthButton={288}/>
              </div>
            </form>
          }
          footer={
            <ProcessPageFooter>
              <FooterLinks />
            </ProcessPageFooter> 
          }
        />
      </PageContainer>
    
    </div>
    )
  }
  
  export default SignIn;