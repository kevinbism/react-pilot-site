import styles from '@/styles/header/Hamburger.module.scss';

const Hamburger = () => {
  return (
    <div className={`${styles.hamburger} flex flex-ai-c`}>
      <div className={styles['hamburger-box']}>
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
      </div>
    </div>
  );
};

export default Hamburger;
