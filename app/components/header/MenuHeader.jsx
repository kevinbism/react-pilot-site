'use client';

import '@/styles/header/_menu-header.scss';
import Link from 'next/link';
import { useHeader } from '@/context/HeaderContext';
import { useEffect, useState } from 'react';
import { fetchMenu } from '@/route';

const MenuHeader = () => {
  const { isMenuOpen } = useHeader();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      const items = await fetchMenu();
      setMenuItems(items.menu);
    };
    getMenuItems();
  }, []);

  return (
    <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
      <ul className="menu__row">
        {menuItems.map(({ id, name, url }) => (
          <li
            className="menu__item"
            key={id}
          >
            <Link
              className="menu__link"
              href={url}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuHeader;
