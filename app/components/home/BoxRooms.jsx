import '@/styles/components/home/_box-rooms.scss';
import Figure from '@/components/ui/Figure';

const BoxRooms = () => {
  return (
    <section className="box box-rooms">
      <div className="box-rooms-wrapper box-sized flex flex-wrap-mobile">
        <div className="box-rooms-inner p-rel">
          <Figure
            src="https://picsum.photos/1024/768?random=3"
            className="box-rooms-image"
          />
          <Figure
            src="https://picsum.photos/1024/768?random=4"
            className="box-rooms-image"
          />
          <Figure
            src="https://picsum.photos/1024/768?random=5"
            className="box-rooms-image"
          />
        </div>
        <div className="box-rooms-content">
          <h2 className="box-rooms-content__title title">Comfort & Eleganza</h2>
          <div className="box-rooms-content__text text">
            Una grande collezione privata, con elementi comuni che giocano a creare il massimo del
            comfort, un insieme di dettagli che si concretizzano in un&apos;ospitalità unica,
            speciale, a prescindere dalle dimensioni e dai dettagli che impreziosiscono ciascuna
            camera.
          </div>
          <a
            href="test"
            target="_self"
            className="box-rooms-content__link link"
          >
            scopri le camere
            <i className="fa-regular fa-angle-right link__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BoxRooms;
