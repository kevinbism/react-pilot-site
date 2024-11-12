'use client';

import '@/styles/header/_menu-header.scss';
import { useHeader } from '@/context/HeaderContext';

const MenuHeader = () => {
  const { isMenuOpen } = useHeader();

  const menuList = [
    'Villa & Dimora',
    'I Bagni',
    'Camere & Suite',
    'Matrimoni',
    'Sitle Forte dei Marmi',
    'Location',
    'Gallery',
    'Offerte',
    "Prenota l'hotel",
  ];

  return (
    <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
      <ul className="menu__row">
        {menuList.map(item => (
          <li
            key={item}
            className="menu__item"
          >
            <a
              href={`#${item}`}
              className="menu__link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuHeader;
