import Figure from '@/components/ui/Figure';
import '@/styles/components/home/_box-intro.scss';

const BoxIntro = () => {
  return (
    <>
      <section className="box box-intro box-sized">
        <div className="box-intro__text subtitle mar-auto">
          Villa Grey è <em>stile, passione e gusto per le cose belle</em>.<br />
          Una residenza accogliente, nata dalla ristrutturazione di una villa novecentesca ...
        </div>
        <div className="box-intro-wrapper flex">
          <Figure
            src="https://picsum.photos/1024/768?random=1"
            alt="Villa Grey"
            width={1024}
            height={768}
            loading="lazy"
            className="box-intro-image"
          />
          <div className="box-intro-content">
            <div className="box-intro-content__text text p-rel">
              Protesa verso il mare e con alle spalle uno splendido parco e le{' '}
              <strong>
                <em>Alpi Apuane</em>
              </strong>{' '}
              a fare da sfondo.
              <br />
              Un{' '}
              <strong>
                <em>percorso sensoriale</em>
              </strong>{' '}
              in cui natura e materia creata dall&apos;uomo si fondono, arrichendosi.
            </div>
            <a
              href="test"
              target="_self"
              className="box-intro-content__link link"
            >
              scopri la location
              <i className="fa-regular fa-angle-right link__icon" />
            </a>
          </div>
        </div>
        <div className="box-intro-inner flex">
          <Figure
            src="https://picsum.photos/1024/768?random=2"
            alt="Villa Grey"
            width={1024}
            height={768}
            loading="lazy"
            className="box-intro-image"
          />
          <h2 className="box-intro-inner__title title-light">
            Un&apos;ospitalità
            <br /> confortevole e sincera
          </h2>
        </div>
      </section>
    </>
  );
};

export default BoxIntro;
