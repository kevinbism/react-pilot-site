import { v4 as uuidv4 } from 'uuid';
import '@/styles/header/_gallery-top.scss';

const GalleryTop = () => {
  // Numero di immagini da mostrare
  const imageCount = 5;

  // Genera un array con URL unici per ciascuna immagine
  const images = Array.from(
    { length: imageCount },
    (_, index) => `https://picsum.photos/1920/1080?random=${index + 1}`
  );

  return (
    <>
      <section className="gallery">
        {images.map((src, index) => (
          <figure
            className={`gallery-image ${index === 0 ? 'active' : ''}`}
            key={uuidv4()}
          >
            <picture>
              <img
                src={src}
                alt={`Random room ${index + 1}`}
                className="gallery-image__img"
              />
            </picture>
          </figure>
        ))}

        <div className="gallery-arrow gallery-arrow--prev">
          <i className="fa-thin fa-angle-left gallery-arrow__icon" />
        </div>
        <div className="gallery-arrow gallery-arrow--next">
          <i className="fa-thin fa-angle-right gallery-arrow__icon" />
        </div>
      </section>
    </>
  );
};

export default GalleryTop;
