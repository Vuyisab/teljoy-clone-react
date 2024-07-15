import { useState } from 'react';
import './MenuDropdown.scss';

interface MenuDropdownProps {
  title: string;
  items: Array<string>;
}

const MenuDropdown = ({ title, items }: MenuDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <a className="dropdown-toggle" onClick={toggleDropdown}>
        {title}
        <span className="dropdown-arrow"></span>
      </a>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuDropdown;
