import '@/styles/footer/_footer.scss';
import Logo from '../ui/Logo';
import footerLogo from '@/../public/images/logo.png';
import Address from './Address';
import Social from './Social';
import MenuFooter from './MenuFooter';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper flex">
          <Logo
            className="footer-logo"
            src={footerLogo}
          />

          <div className="footer-inner">
            <Address />
            <Social />
          </div>

          <MenuFooter />
        </div>

        <div className="footer-bottom flex flex-jc-sb flex-ai-c">
          <span className="footer-bottom__iva">P.IVA 02191210463</span>
          <div className="footer-blast">
            <a
              href="https://www.blastness.com"
              className="footer-blast__link"
              target="_blank"
              rel="noreferrer"
              aria-label="Website by Blastness"
            >
              Website by Blastness
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
