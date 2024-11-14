'use client';

import '@/styles/header/_menu-header.scss';
import { useHeader } from '@/context/HeaderContext';
import Link from 'next/link';

const MenuHeader = () => {
  const { isMenuOpen } = useHeader();

  const menuList = [
    { name: 'Villa & Dimora', url: '/villa-dimora' },
    { name: 'I Bagni', url: '/i-bagni' },
    { name: 'Camere & Suite', url: '/camere-suite' },
    { name: 'Matrimoni', url: '/matrimoni' },
    { name: 'Sitle Forte dei Marmi', url: '/sitle-forte-dei-marmi' },
    { name: 'Location', url: '/location' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Offerte', url: '/offerte' },
    { name: "Prenota l'hotel", url: '/prenota-hotel' },
  ];

  return (
    <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
      <ul className="menu__row">
        {menuList.map(({ name: item, url }) => (
          <li
            key={item}
            className="menu__item"
          >
            <Link
              href={`${url}`}
              className="menu__link"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuHeader;
