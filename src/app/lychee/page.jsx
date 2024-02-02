import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import lychee2 from '../assets/lychee2.jpg';
import lychee3 from '../assets/lychee3.jpg';
import lychee4 from '../assets/lychee4.jpg';
import lychee5 from '../assets/lychee5.jpg';

export default function lychee() {
  const pics = [
    {
      source: lychee1,
      description: "Lychee with her squeaky squirrel."
    },
    {
      source: lychee2,
      description: "Close-up of when she was a puppy."
    },
    {
      source: lychee3,
      description: "Rolling around doing doggy yoga."
    },
    {
      source: lychee4,
      description: "Lazing on the couch after a walk."
    },
    {
      source: lychee5,
      description: "Laying on the bed like she owns the entire thing!"
    }
  ];

  const displayPics = pics.map((pic, index) =>
    <div key={index}>
      <Image
        src={pic.source}
        alt="samoyed dog"
        width="400"
        height="auto"
      />
      <p>{pic.description}</p>
    </div>
  )

  return (
    <div>
      <div className="text-center">
        <h1>Lychee&apos;s Page</h1><br />
        <p>I have a page dedicated to my dog Lychee because people can never seem to get enough of her fluffy face!</p><br />
      </div>
      <div className="text-center flex flex-col place-items-center gap-10">
        {displayPics}
      </div>
    </div>
  )
}