import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import styles from '../ui/styles.module.css';

export default function Contact() {
  return (
    <div className={styles.dropAni}>
      <h1>
        Contact Me
      </h1>
      <div className="flex flex-col gap-y-10 text-white px-20 mt-20 items-center">
        <Image
          src={lychee1}
          alt="Picture of Ivy Wong"
          width="300"
          height="auto"
        />
        <div className="text-xl w-fit">
          Ivy Wong
        </div>
        <div className="w-fit transition transform hover:scale-110">
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
        <div className="w-fit transition transform hover:scale-110">
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