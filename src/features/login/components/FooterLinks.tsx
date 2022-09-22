import { Link } from "react-router-dom"
import "../pages/SignIn/signIn.scss"

export const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="/login/recover-password">Esqueci minha senha</Link>
      <Link to="/">Criar conta</Link>
      <Link to="/">Ajuda</Link>
    </div>
  )
}