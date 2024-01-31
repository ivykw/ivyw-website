import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import lychee2 from '../assets/lychee2.jpg';
import styles from '../ui/styles.module.css';

export default function info() {
  return (
    <div className={styles.dropAni}>
      <div className="text-white text-4xl">
        About Me
      </div>
      <div className="grid grid-cols-2 mt-20 gap-10 justify-items-center items-center text-white px-20">
          <Image
            src={lychee1}
            alt="samoyed puppy with toy"
            height="300"
            width="auto"
          />
        <p>
          Welcome to my about section! I started my professional career being a quality control labrat at a biopharmaceutical company.
          I've always had a bit of regret not going into computer science when I was in college - I went the "maybe I can be a doctor" route like many
          others have. Surprise! I'm not a doctor.<br /><br />
          It wasn't until I had to move to a pretty small town that I decided to take a leap and joined a coding bootcamp. I learned Javascript, React,
          Node.js, and used both relational and non-relational databases. It was challenging but fun, and it all came together when I created my first
          full stack app during my 3-day MVP sprint - a <a href="https://github.com/ivykw/Recipe-Keeper"><u>recipe keeper</u></a>! Despite its child-like
          color scheme, I was still amazed I was able to create it from scratch!<br /><br />
          So here I am now, hoping to continue to learn new skills and be able to create something!
        </p>
      <div>
          <p>
            In my free time I enjoy baking and crocheting (yes, I have been called grandma several times!). Now that I think about it, I guess it's not
            not a surprise I like the feeling of creating... the sense of satisfaction of making something that make people happy is something I appreciate
            a lot.
          </p>
        </div>
        <Image
            src={lychee2}
            alt="samoyed laying down on couch"
            height="300"
            width="auto"
          />
      </div>
    </div>
  )
}