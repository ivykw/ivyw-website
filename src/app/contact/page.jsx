import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function resume() {
  return (
    <div className="w-3/5 flex flex-col space-y-5 text-white px-20">
      <div>
        Contact Information
      </div>
      <Image
        src={lychee1}
        alt="Picture of Ivy Wong"
        height="250"
        width="auto"
      />
      <div>
        Ivy Wong
      </div>
      <div className="w-fit">
        <a href="https://www.linkedin.com/in/ivy-k-wong/">
          <div className="flex flex-row space-x-5">
            <span>
              <Image
                src={linkedin}
                alt="LinkedIn Logo"
                width="35"
                height="auto"
              />
            </span>
            <span>
              linkedin.com/in/ivy-k-wong/
            </span>
          </div>
        </a>
      </div>
      <div className="w-fit">
        <a href="https://github.com/ivykw">
        <div className="flex flex-row space-x-5">
            <span className="bg-white rounded-sm">
              <Image
                src={github}
                alt="LinkedIn Logo"
                width="35"
                height="auto"
              />
            </span>
            <span>
              github.com/ivykw
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}