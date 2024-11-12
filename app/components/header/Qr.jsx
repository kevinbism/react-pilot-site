'use client';
import '@/styles/header/_qr.scss';
import { useHeader } from '@/context/HeaderContext';
import Form from 'next/form';
import SelectQr from '../ui/SelectQr';

const Qr = () => {
  const { isQrOpen } = useHeader();

  return (
    <div className={`qr ${isQrOpen ? 'qr--open' : ''}`}>
      <Form
        action="https://www.blastnessbooking.com/reservations/risultato.html"
        id="qr-form"
        className="qr-form"
      >
        <input
          type="hidden"
          name="id_albergo"
          value="25150"
        />
        <input
          type="hidden"
          name="dc"
          value="2938"
        />
        <input
          type="hidden"
          name="id_stile"
          value="19121"
        />
        <input
          type="hidden"
          name="lingua_int"
          value="ita"
        />
        <input
          type="hidden"
          name="gg"
          id="gg"
          value=""
        />
        <input
          type="hidden"
          name="mm"
          id="mm"
          value=""
        />
        <input
          type="hidden"
          name="aa"
          id="aa"
          value=""
        />
        <input
          type="hidden"
          name="notti_1"
          id="notti_1"
          value="1"
        />

        <ul className="qr__row center">
          <li className="qr__item">
            <div className="qr__item qr__item--dates center">
              <span className="qr-label__title">Arrivo</span>
              <label
                htmlFor="in"
                className="qr-label"
              >
                <span className="qr-d qr-d-in">12</span>
                <span className="qr-m qr-m-in">Apr</span>
                <span className="qr-y qr-y-in">2023</span>
                <i className="fa-thin fa-arrow-down qr-label__icon" />
              </label>
            </div>
            <div className="qr__item qr__item--dates center">
              <span className="qr-label__title">Partenza</span>
              <label
                htmlFor="out"
                className="qr-label"
              >
                <span className="qr-d qr-d-out">13</span>
                <span className="qr-m qr-m-out">Apr</span>
                <span className="qr-y qr-y-out">2023</span>
                <i className="fa-thin fa-arrow-down qr-label__icon" />
              </label>
            </div>
            <input
              className="qr-input"
              type="text"
              id="calendario"
              data-mindate="2025-04-04"
              readOnly
            />
          </li>
          <li className="qr__item">
            <span className="qr-label__title">Adulti</span>
            <label
              htmlFor="tot_adulti"
              className="qr-label flex flex-ai-c flex-jc-c"
            >
              <span
                className="qr-label__number"
                id="numero_adulti_qr"
              >
                2
              </span>{' '}
              <i className="fa-thin fa-arrow-down qr-label__icon" />
            </label>
            <SelectQr
              nameId="tot_adulti"
              numberOptions={10}
              value={2}
              labelName="Adulto"
              PluralLabelName="Adulti"
            />
          </li>
          <li className="qr__item">
            <span className="qr-label__title">Camera</span>
            <label
              htmlFor="tot_camere"
              className="qr-label flex flex-ai-c flex-jc-c"
            >
              <span
                className="qr-label__number"
                id="numero_camere_qr"
              >
                1
              </span>{' '}
              <i className="fa-thin fa-arrow-down qr-label__icon" />
            </label>
            <SelectQr
              nameId="tot_camere"
              numberOptions={5}
              value={1}
              labelName="Camera"
              PluralLabelName="Camere"
            />
          </li>
          <li className="qr__item">
            <span className="qr-label__title">Bambini</span>
            <label
              htmlFor="tot_bambini"
              className="qr-label flex flex-ai-c flex-jc-c"
            >
              <span
                className="qr-label__number"
                id="numero_bambini_qr"
              >
                0
              </span>{' '}
              <i className="fa-thin fa-arrow-down qr-label__icon" />
            </label>
            <SelectQr
              nameId="tot_bambini"
              numberOptions={5}
              value={0}
              labelName="Bambino"
              PluralLabelName="Bambini"
              fromZero={true}
            />
          </li>
          <li className="qr__item qr__item--code">
            <input
              className="qr-code"
              id="generic_codice"
              type="text"
              name="generic_codice"
              placeholder="Codice promo"
            />
          </li>
          <li className="qr__item qr__item--book">
            <button
              className="qr-book flex flex-ai-c flex-jc-sb mar-auto"
              type="submit"
            >
              Prenota <i className="fa-light fa-calendar qr-label__icon" />
            </button>
          </li>
          <li className="qr__item qr__item--mod center">
            <a
              href="https://www.blastnessbooking.com/reservations/cancel_modify.html?lingua_int=ita&id_albergo=25150&dc=2938&id_stile=19121"
              className="qr-link"
            >
              modifica/cancella prenotazione
            </a>
          </li>
        </ul>
      </Form>
    </div>
  );
};

export default Qr;
