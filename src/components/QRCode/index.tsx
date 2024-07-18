import Image from 'next/image';

function QRCode() {
  return (
    <div>
      <Image
        src={'/images/image-qr-code.png'}
        alt="QR code"
        width={288}
        height={288}
      />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QRCode;
