import './Header.less';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const shopItems = ['Televisions & Entertainment', 'Home & Kitchen Appliances', 'Electronics', 'Beds & Furniture', 'Fitness & Beauty', 'Outdoors'];

  const profileItems = ['Wishlist', 'Login/Register'];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header"  data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">BazaJoy &copy;</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                {
                  shopItems.map(item => (
                    <li><NavLink className="dropdown-item" to={item.replace(' ', '')}>{item}</NavLink></li>
                  ))
                }
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </a>
              <ul className="dropdown-menu">
                {
                  profileItems.map(item => (
                    <li><NavLink className="dropdown-item" to={item.replace(' ', '')}>{item}</NavLink></li>
                  ))
                }
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark btn-outline-secondary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
