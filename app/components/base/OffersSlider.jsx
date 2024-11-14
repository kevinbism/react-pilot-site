'use client';

import Figure from '@/components/ui/Figure';
import '@/styles/components/base/_offers-slider.scss';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/autoplay';

const OffersSlider = () => {
  return (
    <section className="box box-offers center box-sized">
      <h2 className="box-offers__title title">Speciali offerte, per soggiorni unici</h2>
      <a
        href="test"
        target="_self"
        className="box-offers__link link"
      >
        tutte le offerte
        <i className="fa-regular fa-angle-right link__icon" />
      </a>
      <Swiper
        className="box-offers-slider overflow-hidden"
        modules={[Autoplay]}
        speed={1000}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide className="swiper-slide flex flex-column">
          <Figure
            src="https://picsum.photos/1024/768?random=10"
            alt="Villa Grey"
            width={1024}
            height={768}
            loading="lazy"
            className="box-offers-image"
          />
          <div className="box-offers-content flex flex-column">
            <h4 className="box-offers-content__title title">
              STAY MORE FOR LESS - Soggiorna 4 notti in una Suit...
            </h4>
            <div className="box-offers-content__text text">
              Colazione e servizio spiaggia inclusi! Offerta valida per la Family Suite
              Mansardata,la Suite Vista Mare e la Suite con Giardino Privato solo in alcun...
            </div>
            <a
              href="test"
              target="_self"
              className="box-offers-content__link link"
            >
              scopri
              <i className="fa-regular fa-angle-right link__icon" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex flex-column">
          <Figure
            src="https://picsum.photos/1024/768?random=11"
            alt="Villa Grey"
            width={1024}
            height={768}
            loading="lazy"
            className="box-offers-image"
          />
          <div className="box-offers-content flex flex-column">
            <h4 className="box-offers-content__title title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="box-offers-content__text text">
              Colazione e servizio spiaggia inclusi! Offerta valida per la Family Suite
              Mansardata,la Suite Vista Mare e la Suite con Giardino Privato solo in alcun...
            </div>
            <a
              href="test"
              target="_self"
              className="box-offers-content__link link"
            >
              scopri
              <i className="fa-regular fa-angle-right link__icon" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex flex-column">
          <Figure
            src="https://picsum.photos/1024/768?random=13"
            alt="Villa Grey"
            width={1024}
            height={768}
            loading="lazy"
            className="box-offers-image"
          />
          <div className="box-offers-content flex flex-column">
            <h4 className="box-offers-content__title title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cum!
            </h4>
            <div className="box-offers-content__text text">
              Colazione e servizio spiaggia inclusi! Offerta valida per la Family Suite
              Mansardata,la Suite Vista Mare e la Suite con Giardino Privato solo in alcun...
            </div>
            <a
              href="test"
              target="_self"
              className="box-offers-content__link link"
            >
              scopri
              <i className="fa-regular fa-angle-right link__icon" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex flex-column">
          <Figure
            src="https://picsum.photos/1024/768?random=14"
            alt="Villa Grey"
            width={1024}
            height={768}
            loading="lazy"
            className="box-offers-image"
          />
          <div className="box-offers-content flex flex-column">
            <h4 className="box-offers-content__title title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cum!
            </h4>
            <div className="box-offers-content__text text">
              Colazione e servizio spiaggia inclusi! Offerta valida per la Family Suite
              Mansardata,la Suite Vista Mare e la Suite con Giardino Privato solo in alcun...
            </div>
            <a
              href="test"
              target="_self"
              className="box-offers-content__link link"
            >
              scopri
              <i className="fa-regular fa-angle-right link__icon" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OffersSlider;
