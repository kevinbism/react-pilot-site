import { v4 as uuidv4 } from 'uuid';

const SelectQr = ({
  nameId,
  numberOptions,
  defaultValue,
  labelName,
  PluralLabelName,
  fromZero,
}) => {
  const options = Array.from({ length: numberOptions }, (_, index) =>
    fromZero ? index : index + 1
  );

  return (
    <>
      <select
        name={nameId}
        id={nameId}
        className="qr-select"
        defaultValue={defaultValue}
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
    </>
  );
};

export default SelectQr;
