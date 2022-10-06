import './appBar.scss';
import logo from "../../_assets/logo.svg";
import close from "../../_assets/close.svg"
import { Link, useLocation } from 'react-router-dom';

interface Value {
  arg?: boolean;
}

export const AppBar = ({arg = true}: Value) => {
  const button = arg;
  let route = "/home";
  const location = useLocation();

  if(arg) {
    if (location.pathname == "/create/concluded" || location.pathname == "/create" || location.pathname == "/create/permission") {
      route = "/"
    }
  }

  return (
    <div id="top-bar">
      <img src={logo} alt="logo Genyus" />
      {button && 
        <Link to={route} >
          <button className="btn btn-close" >
            <img src={close} alt="fechar" />
            <span>Fechar</span>
          </button>
        </Link>
      }
    </div>
  )
}