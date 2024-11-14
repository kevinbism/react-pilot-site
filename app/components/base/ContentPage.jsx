import '@/styles/components/base/_content-page.scss';
import Link from 'next/link';
import Subtitle from '../ui/Subtitle';
import Text from '../ui/Text';

const ContentPage = () => {
  return (
    <>
      <section className="page">
        <div className="page-breadcrumb">
          <ul className="page-breadcrumb__row flex flex-wrap flex-jc-c">
            <li className="page-breadcrumb__item">
              <Link href="/">Home</Link>
            </li>
            <li className="page-breadcrumb__item">
              <Link href="/villa-dimora">Villa & Dimora</Link>
            </li>
          </ul>{' '}
        </div>
        <div className="page-wrapper mar-auto">
          <Subtitle
            tag="h1"
            className="page__title"
          >
            La <em>Villa</em> è un luogo speciale, pensato per un ritiro esclusivo e confortevole al
            tempo stesso.
          </Subtitle>
          <Text className="page__text">
            <p>
              Villa Grey &egrave; un luogo speciale in cui godere del{' '}
              <strong>lusso di sentirsi a casa propria</strong>, circondati piacevolmente da colori
              e luci che creano un&rsquo;atmosfera di <strong>naturale</strong>{' '}
              <strong>armonia</strong> e <strong>serenit&agrave;.</strong> Una residenza
              accogliente, una <strong>villa novecentesca</strong> ristrutturata dalla famiglia
              Larini per accogliere con tutti i <strong>comfort</strong> senza perdere per questo il
              fascino delle cose belle di un tempo. Lasciatevi coinvolgere in un&rsquo;
              <strong>esperienza unica</strong> di cui ricorderete ogni dettaglio.
              <br />
              <br />
              <strong>Luogo di culto della bellezza</strong> e <strong>cura dei dettagli</strong>,
              in cui ogni particolare &egrave; stato sapientemente studiato, &egrave; in perfetto
              stile <strong>Villa Grey</strong>, con cui condivide alcuni spazi comuni e buone
              abitudini. Vi accoglier&agrave; con le sue <strong>camere</strong>, una diversa
              dall&rsquo;altra, ciascuna con la sua <strong>unicit&agrave;</strong> e{' '}
              <strong>atmosfera riconoscibile.</strong>
              <br />
              <br />
              Una grande collezione privata, con elementi comuni che giocano a creare il{' '}
              <strong>massimo del comfort</strong>, un insieme di dettagli che si concretizzano in
              un&rsquo;<strong>ospitalit&agrave; unica, speciale,</strong> a prescindere dalle
              dimensioni e dai dettagli che impreziosiscono ciascuna camera.
              <br />
              <br />
              La collezione si presenta in <strong>6 forme differenti</strong>, pronte ad
              accogliervi nella loro unicit&agrave; con un&rsquo;ampiezza che va dai 15 ai 38{' '}
              <span>m</span>
              <sup>2</sup>: camere Classic, Superior, Deluxe, Junior Suite, Luxury Suite, Family
              Suite.
            </p>
          </Text>
        </div>
      </section>
    </>
  );
};

export default ContentPage;
