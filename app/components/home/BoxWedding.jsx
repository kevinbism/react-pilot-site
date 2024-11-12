import '@/styles/components/home/_box-wedding.scss';
import Figure from '@/components/ui/Figure';

const BoxWedding = () => {
  return (
    <section className="box box-wedding">
      <Figure
        src="https://picsum.photos/1920/768?random=7"
        className="box-wedding-image"
        width={1920}
      />
      <div className="box-wedding-inner box-sized flex">
        <Figure
          src="https://picsum.photos/1024/768?random=8"
          className="box-wedding-image"
        />
        <div className="box-wedding-content">
          <h2 className="box-wedding-content__title title">Le tue nozze in riva al mare</h2>
          <div className="box-wedding-content__text text p-rel">
            Un giorno così speciale ha bisogno di una cornice romantica, come solo il mare può
            regalare.
          </div>
          <a
            href="test"
            target="_self"
            className="box-wedding-content__link link"
          >
            scopri la nostra proposta
            <i className="fa-regular fa-angle-right link__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BoxWedding;
