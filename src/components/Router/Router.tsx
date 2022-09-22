import SignIn from "../../features/login/pages/SignIn/SignIn";
import { SignInRoutes } from "../../features/login/constants/routes";
import { CardRoutes } from "../../features/card/constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardSolicitar } from "../../features/card/pages/CardSolicitar/CardSolicitar";
import CardAddress from "../../features/card/pages/CardEntrega/CardAddress";
import { CardSuccess } from "../../features/card/pages/CardSuccess/CardSuccess";
import { HomePage } from "../../features/login/pages/Home/HomePage";
import { RecoverPasswordRoutes } from "../../features/recoverPassword/constants/routes";
import { InformClientData } from "../../features/recoverPassword/pages/clientData/InformClientData";
import { TranfersRoutes } from "../../features/transference/constants/routes";
import { TransfersPixKey } from "../../features/transference/pages/transferences/TransfersPixKey" 
import { TransfersValue } from "../../features/transference/pages/transfarences-value/TransfersValue";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={SignInRoutes.signIn}
          element={<SignIn />}
        >
         <Route
          path={RecoverPasswordRoutes.clientCPF}
          element={<InformClientData />}
          /> 
        </Route>
        <Route
          path={SignInRoutes.homePage}
          element={<HomePage />}
        />
        <Route
          path={CardRoutes.card}
          element={<CardSolicitar />}
        />
        <Route
          path={CardRoutes.cardDeliver}
          element={<CardAddress />}
        />
        <Route
          path={CardRoutes.cardDeliverSuccess}
          element={<CardSuccess />}
        />
        <Route
          path={TranfersRoutes.transfers}
          element={<TransfersPixKey />}
        />        
        <Route
          path={TranfersRoutes.transfersValue}
          element={<TransfersValue />}
        />        
        <Route
          path={CardRoutes.cardDeliverSuccess}
          element={<CardSuccess />}
        />
      </Routes>
    </BrowserRouter>
  )
}