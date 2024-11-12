import Logo from '../ui/Logo';
import BookButton from './BookButton';
import GalleryTop from './GalleryTop';
import Hamburger from './Hamburger';
import MenuLanguage from './MenuLanguage';
import altLogo from '@/../public/images/altlogo.png';
import logo from '@/../public/images/logo.png';
import '@/styles/header/_header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="header-top-wrapper p-rel flex flex-ai-c">
            <Hamburger />
            <MenuLanguage />
            <Logo
              className="header-logo"
              src={altLogo}
            />
            <BookButton />
          </div>
        </div>
        <Logo
          className="header-logo"
          src={logo}
        />
        <GalleryTop />

        <div className="header-arrow">
          <i className="fa-thin fa-angle-down header-arrow__icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
