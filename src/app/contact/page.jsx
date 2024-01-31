import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import styles from '../ui/styles.module.css';

export default function resume() {
  return (
    <div className={styles.dropAni}>
      <div className="flex flex-col gap-y-10 text-white px-20 mt-20 items-center">
        <div className="text-3xl">
          Contact Me
        </div>
          <Image
            src={lychee1}
            alt="Picture of Ivy Wong"
            width="300"
            height="auto"
          />
        <div className="text-xl w-fit">
          Ivy Wong
        </div>
        <div className="w-fit">
          <a href="https://www.linkedin.com/in/ivy-k-wong/">
            <div className="flex flex-row space-x-5">
              <Image
                src={linkedin}
                alt="LinkedIn Logo"
                width="35"
                height="auto"
              />
              <div>
                linkedin.com/in/ivy-k-wong
              </div>
            </div>
          </a>
        </div>
        <div className="w-fit">
          <a href="https://github.com/ivykw">
          <div className="flex flex-row space-x-5">
              <div className="bg-white rounded-sm">
                <Image
                  src={github}
                  alt="LinkedIn Logo"
                  width="35"
                  height="auto"
                />
              </div>
              <div>
                github.com/ivykw
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}