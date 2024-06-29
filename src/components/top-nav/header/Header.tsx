import MenuDropdown from '../../common/menu-dropdown/MenuDropdown';
import './Header.less';

const Header = () => {
  const shopItems = [
    'Televisions & Entertainment',
    'Home & Kitchen Appliances',
    'Electronics',
    'Beds & Furniture',
    'Fitness & Beauty',
    'Outdoors',
  ];

  const profileItems = ['Wishlist', 'Login/Register'];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#shop">
              <MenuDropdown title={'Shop'} items={shopItems} />
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">
              <MenuDropdown title={'My Profile'} items={profileItems} />
            </a>
          </li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-logo">BazaJoy</div>
      </nav>
    </header>
  );
};

export default Header;
