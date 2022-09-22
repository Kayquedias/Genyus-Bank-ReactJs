import "./buttons.scss"
import arrowRight from "../../_assets/arrow-right.svg"

export const NextButton = () => {
  return (
    <button className="btn buttons">Próximo <img src={arrowRight} alt="seta diereita" /></button>
  )
}