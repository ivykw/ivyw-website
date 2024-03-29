import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import crochet1 from '../assets/crochet1.jpg';
import styles from '../ui/styles.module.css';

export default function Info() {
  return (
    <div className={styles.dropAni}>
      <h1>
        About Me
      </h1>
      <div className="grid grid-cols-2 mt-20 gap-10 justify-items-center items-center text-white px-20">
          <Image
            src={lychee1}
            alt="samoyed puppy with toy"
            height="fill"
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
            not a surprise I like the feeling of creating something with code... the sense of satisfaction of making something that make people happy is
            something I appreciate a lot.
          </p>
        </div>
        <Image
            src={crochet1}
            alt="Pokemon amigurumi"
            height="fill"
            width="auto"
          />
      </div>
    </div>
  )
}