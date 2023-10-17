import footerLogo from "./asset/logo.png";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer is-flex is-justify-content-space-around is-align-content-center has-background-primary m-0 py-5">
      <div className="footer_logo">
        <Link to="/">
          <img className="footerLogo_img" src={footerLogo} alt="logo" />

          <h3 className="footerLogo_text">Eco-Moda</h3>
        </Link>
      </div>

      <div className="footerCategories">
        <NavLink
          to={`/category/hombres`}
          className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({
            isActive,
          }) => (isActive ? "ActiveOption" : "Option")}`}
        >
          Hombres
        </NavLink>
        <NavLink
          to={`/category/mujeres`}
          className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({
            isActive,
          }) => (isActive ? "ActiveOption" : "Option")}`}
        >
          Mujeres
        </NavLink>
        <NavLink
          to={`/category/ninos`}
          className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({
            isActive,
          }) => (isActive ? "ActiveOption" : "Option")}`}
        >
          Niños
        </NavLink>
        <NavLink
          to={`/category/ninas`}
          className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({
            isActive,
          }) => (isActive ? "ActiveOption" : "Option")}`}
        >
          Niñas
        </NavLink>
        <NavLink
          to={`/category/bebes`}
          className={`btn button m-2 is-large is-responsive is-dark is-outlined is-rounded ${({
            isActive,
          }) => (isActive ? "ActiveOption" : "Option")}`}
        >
          Bebes
        </NavLink>
      </div>

      <div className="footerCreater">
        <p className=""><b>Página creada por Gustavo Olmos</b></p>
      </div>
    </footer>
  );
};

export default Footer;
