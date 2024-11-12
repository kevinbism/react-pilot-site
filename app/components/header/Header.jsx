import Logo from '../ui/Logo';
import BookButton from './BookButton';
import GalleryTop from './GalleryTop';
import Hamburger from './Hamburger';
import MenuLanguage from './MenuLanguage';
import MenuHeader from './MenuHeader';
import Qr from './Qr';
import ArrowScroll from './ArrowScroll';
import { HeaderProvider } from '@/context/HeaderContext';
import altLogo from '@/../public/images/altlogo.png';
import logo from '@/../public/images/logo.png';
import '@/styles/header/_header.scss';

const Header = () => {
  return (
    <HeaderProvider>
      <header className="header">
        <MenuHeader />
        <Qr />
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
        <ArrowScroll />
      </header>
    </HeaderProvider>
  );
};

export default Header;
