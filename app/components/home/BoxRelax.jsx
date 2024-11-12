import Figure from '@/components/ui/Figure';
import '@/styles/components/home/_box-relax.scss';

const BoxRelax = () => {
  return (
    <>
      <section className="box box-relax">
        <Figure
          src="https://picsum.photos/1200/768?random=6"
          className="box-relax-image"
          width={1200}
        />
        <div className="box-relax-inner flex box-sized flex-wrap-mobile">
          <h2 className="box-relax-content__title title">Per soddisfare la necessità di relax</h2>
          <div className="box-relax-content">
            <div className="box-relax-content__text text p-rel">
              I Bagni sono il completamento naturale della Villa e della Dimora portando in spiaggia
              lo stile che ci contraddistingue. Le tende, realizzate per soddisfare la necessità di
              relax e intimità sono dedicate ai nostri ospiti.
            </div>
            <a
              href="test"
              target="_self"
              className="box-relax-content__link link"
            >
              scopri la spiaggia
              <i className="fa-regular fa-angle-right link__icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxRelax;
