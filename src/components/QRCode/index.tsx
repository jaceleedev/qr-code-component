import Image from 'next/image';
import styles from './index.module.css';

function QRCode() {
  return (
    <article className={styles['qr-code']}>
      <figure>
        <Image
          src={'/images/image-qr-code.png'}
          alt="QR code image"
          width={288}
          height={288}
          className={styles['qr-code__image']}
        />
        <figcaption className="sr-only">QR code image</figcaption>
      </figure>

      <div className={styles['qr-code__content']}>
        <h1 className={styles['qr-code__heading']}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles['qr-code__body']}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
}

export default QRCode;
