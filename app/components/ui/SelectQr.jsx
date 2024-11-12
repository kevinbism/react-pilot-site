'use client';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const SelectQr = ({
  nameId,
  numberOptions,
  value, // Passa il valore come prop per il controllo esterno
  labelName,
  PluralLabelName,
  fromZero,
}) => {
  const [selectedValue, setSelectedValue] = useState(value); // stato locale per il valore selezionato
  const options = Array.from({ length: numberOptions }, (_, index) =>
    fromZero ? index : index + 1
  );

  const handleChange = event => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const text = selectedOption.dataset.text;
    const value = selectedOption.value;

    // Trova gli elementi e aggiorna il loro contenuto
    const parentElement = event.target.closest('.qr__item');
    if (parentElement) {
      const titleElement = parentElement.querySelector('.qr-label__title');
      const numberElement = parentElement.querySelector('.qr-label__number');

      if (titleElement) titleElement.textContent = text;
      if (numberElement) numberElement.textContent = value;
    }

    setSelectedValue(value); // aggiorna lo stato del valore selezionato
  };

  return (
    <select
      name={nameId}
      id={nameId}
      className="qr-select"
      value={selectedValue}
      onChange={handleChange} // Aggiungi l'evento onChange
    >
      {options.map(option => (
        <option
          data-text={option === 1 ? labelName : PluralLabelName}
          value={option}
          key={uuidv4()}
        >
          {option} {option === 1 ? labelName : PluralLabelName}
        </option>
      ))}
    </select>
  );
};

export default SelectQr;
