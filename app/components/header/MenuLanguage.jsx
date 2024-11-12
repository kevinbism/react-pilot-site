import '@/styles/header/_menu-language.scss';

const MenuLanguage = () => {
  return (
    <>
      <nav
        className="menu-lang"
        aria-labelledby="language-navigation"
      >
        <span className="menu-lang__label">
          it <i className="fa-solid fa-chevron-down menu-lang__icon" />
        </span>
        <ul className="menu-lang__row">
          <li className="menu-lang__item">ita</li>
          <li className="menu-lang__item">eng</li>
        </ul>
      </nav>
    </>
  );
};

export default MenuLanguage;
