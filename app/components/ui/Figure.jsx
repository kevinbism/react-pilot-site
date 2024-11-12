import Image from 'next/image';

const Figure = ({ src, alt, width, height, loading, className }) => {
  return (
    <>
      <figure className={className}>
        <picture>
          <Image
            className={`${className}__img`}
            src={src}
            alt={alt || 'Villa Grey'}
            width={width || 1024}
            height={height || 768}
            loading={loading || 'lazy'}
          />
        </picture>
      </figure>
    </>
  );
};

export default Figure;
