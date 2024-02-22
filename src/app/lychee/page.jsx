import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import lychee2 from '../assets/lychee2.jpg';
import lychee3 from '../assets/lychee3.jpg';
import lychee4 from '../assets/lychee4.jpg';
import lychee5 from '../assets/lychee5.jpg';
import lychee6 from '../assets/lychee6.jpg';
import styles from '../ui/styles.module.css';


export default function Lychee() {

  const images = [
    {
      source: lychee1,
      description: "Chomping on her squeaky squirrel."
    },
    {
      source: lychee2,
      description: "Fluffy loaf laying down."
    },
    {
      source: lychee3,
      description: "Close-up of her fluffy face."
    },
    {
      source: lychee4,
      description: "Lychee splayed on the floor."
    },
    {
      source: lychee5,
      description: "Lazing on the couch."
    },
    {
      source: lychee6,
      description: "Laying on the bed."
    }
  ];

  const displayPics = images.map((image, index) =>
    <div key={index}>
      <div className="transition transform hover:scale-110">
        <Image
          src={image.source}
          alt="samoyed dog"
          width="400"
          height="auto"
        />
        <p className="text-center">{image.description}</p>
      </div>
    </div>
  )

  return (
    <div className={styles.dropAni}>
      <div className="text-center">
        <h1>Lychee&apos;s Page</h1><br />
        <p>I have a page dedicated to my dog Lychee because people can never seem to get enough of her fluffy face!</p><br />
      </div>
      <div className="text-center flex flex-col place-items-center gap-y-12">
        {displayPics}
      </div>
    </div>
  )
}