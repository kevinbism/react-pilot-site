'use client';
import '@/styles/header/_book-button.scss';
import { useHeader } from '@/context/HeaderContext';

const BookButton = () => {
  const { isBookOpen, toggleBook } = useHeader();

  return (
    <div
      className={`book-button ${isBookOpen ? 'book-button--open' : ''}`}
      onClick={toggleBook}
      onKeyDown={e => e.key === 'Enter' && toggleBook()}
    >
      <span className="book-button__label flex flex-ai-c flex-jc-sb">
        prenota l&apos;hotel <i className="fa-light fa-calendar book-button__icon" />
      </span>
      <span className="book-button__label book-button__label--close flex flex-ai-c flex-jc-sb">
        chiudi <i className="fa-sharp fa-light fa-xmark book-button__icon" />
      </span>
    </div>
  );
};

export default BookButton;
