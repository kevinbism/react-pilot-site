import '@/styles/footer/_menu-footer.scss';

const MenuFooter = () => {
  const menuList = [
    'contatti',
    'dati societari',
    'privacy',
    'cookie policy',
    'newsletter',
    'press',
  ];

  return (
    <>
      <nav className="footer-menu">
        <ul className="footer-menu__row flex flex-column flex-wrap">
          {menuList.map(item => (
            <li
              key={item}
              className="footer-menu__item"
            >
              <a
                href={`#${item}`}
                className="footer-menu__link"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuFooter;
