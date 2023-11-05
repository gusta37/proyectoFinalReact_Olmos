import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="NavBar has-background-primary">           

            <img className='logo_img' src={logo} alt="logo" /> 

            <Link to='/'>
                <h3 className="logo_text">Eco-Moda</h3>
            </Link>            

            <div className='Categories'>
                <NavLink to={`/category/hombres`} className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({isActive}) => isActive ? 'navbar-item is-tab is-active' : 'nav-bar-item is-tab'}`}>Hombres</NavLink>
                <NavLink to={`/category/mujeres`} className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({isActive}) => isActive ? 'navbar-item is-tab is-active' : 'nav-bar-item is-tab'}`}>Mujeres</NavLink>
                <NavLink to={`/category/ninos`} className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({isActive}) => isActive ? 'navbar-item is-tab is-active' : 'nav-bar-item is-tab'}`}>Niños</NavLink>
                <NavLink to={`/category/ninas`} className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({isActive}) => isActive ? 'navbar-item is-tab is-active' : 'nav-bar-item is-tab'}`}>Niñas</NavLink>
                <NavLink to={`/category/bebes`} className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({isActive}) => isActive ? 'navbar-item is-tab is-active' : 'nav-bar-item is-tab'}`}>Bebés</NavLink>
            </div>

            <CartWidget/>
        </nav>
    )
}

 export default NavBar;