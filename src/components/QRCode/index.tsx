import Image from 'next/image';
import styles from './index.module.css';

function QRCode() {
  return (
    <div className={styles['qr-code']}>
      <Image
        src={'/images/image-qr-code.png'}
        alt="QR code"
        width={288}
        height={288}
        className={styles['qr-code__image']}
      />
      <div className={styles['qr-code__text-box']}>
        <h1 className={styles['qr-code__heading']}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles['qr-code__body']}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QRCode;
