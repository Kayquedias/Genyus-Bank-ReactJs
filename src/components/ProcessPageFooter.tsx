import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./buttons/buttons.scss"

interface Props {
  buttonNext?: JSX.Element;
  buttonBack?: JSX.Element;
  children?: HTMLAnchorElement | HTMLElement | JSX.Element | React.ReactNode;
}

const ProcessPageFooter = ({buttonNext, buttonBack, children}: Props) => {
  return (
    <>
      {children ? '' : <div className="foo-container">
        {buttonBack}
        <Link to="/card-address/success" >{buttonNext}</Link>
      </div>}
      {children}
    </>
  )
}

export default ProcessPageFooter;