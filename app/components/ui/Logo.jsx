import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className, src, width, height }) => {
  return (
    <>
      <Link
        href="/"
        className={className}
      >
        <Image
          className={`${className}__img`}
          src={src}
          alt="logo"
          width={width}
          height={height}
        />
      </Link>
    </>
  );
};

export default Logo;
