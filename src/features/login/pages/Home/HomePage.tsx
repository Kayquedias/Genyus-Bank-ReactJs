import { HomeBar } from "../../../../components/homeBar/HomeBar";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { Balance } from "../../components/balance/Balance";
import { images } from "../../constants/images";
import { SeeMoreServices } from "../../components/seeMoreServices/SeeMoreServices";

import "./homePage.scss";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <PageContainer>
          <ProcessPageLayout 
            appBar={<HomeBar />}
            header={<Balance />}
            main={
              <div id="container-services">
                <Link to="/TransfersPixKey">
                  <div className="card-service tranfers">
                    <img src={images.tranfers} alt="transferência" />
                    <p>Transferência</p>
                  </div>
                </Link>
                <Link to="/">
                <div className="card-service recharge">
                  <img src={images.recarga} alt="Recarga" />
                  <p>Recarga</p>
                </div>
                </Link>
                <Link to="/card">
                <div className="card-service bank-card">
                  <img src={images.card} alt="Cartão" />
                  <p>Cartão</p>
                </div>
                </Link>
              </div>
            }
            footer={<SeeMoreServices />}
          />
      </PageContainer>
    </div>
  )
}