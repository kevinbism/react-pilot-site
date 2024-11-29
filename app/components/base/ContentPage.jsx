import '@/styles/components/base/_content-page.scss';
import Link from 'next/link';
import Subtitle from '../ui/Subtitle';
import Text from '../ui/Text';

const ContentPage = ({ titleBreadcrumb, title, children, url }) => {
  return (
    <>
      <section className="page">
        <div className="page-breadcrumb">
          <ul className="page-breadcrumb__row flex flex-wrap flex-jc-c">
            <li className="page-breadcrumb__item">
              <Link href="/">Home</Link>
            </li>
            <li className="page-breadcrumb__item">
              <Link href={url}>{titleBreadcrumb}</Link>
            </li>
          </ul>
        </div>
        <div className="page-wrapper mar-auto">
          <Subtitle
            tag="h1"
            className="page__title"
          >
            {title}
          </Subtitle>
          <Text className="page__text">{children}</Text>
        </div>
      </section>
    </>
  );
};

export default ContentPage;
