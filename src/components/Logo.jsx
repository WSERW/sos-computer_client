import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'


const Logo = () => {
  return (
    <Link to='/' className="logo">
      <img src={logo} alt="" />
    </Link>
  )
}

export default Logo