const Social = () => {
  return (
    <div className="footer-social">
      <ul className="footer-social__row flex">
        <li className="footer-social">
          <a
            className="footer-social__link flex flex-ai-c flex-jc-c"
            href="https://www.facebook.com/villagreyofficial"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook-f footer-social__icon" />
          </a>
        </li>
        <li className="footer-social">
          <a
            className="footer-social__link flex flex-ai-c flex-jc-c"
            href="https://www.instagram.com/villagreyofficial/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram footer-social__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
