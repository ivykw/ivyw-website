import Image from 'next/image';
import lychee1 from '../assets/lychee1.jpg';
import lychee2 from '../assets/lychee2.jpg';
import styles from '../ui/styles.module.css';

export default function info() {
  return (
    <div className={styles.aboutDrop}>
    <div className="grid grid-cols-2 gap-20 justify-items-center items-center">
        <Image
          src={lychee1}
          alt="samoyed puppy with toy"
          height="300"
        />
      <p className="text-white px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus congue metus. Proin lacinia rhoncus interdum. Vivamus ac porttitor tortor. Curabitur sapien justo, vulputate vel dolor sed, auctor aliquam tellus. Maecenas in mauris est. Quisque quis vehicula lectus, a maximus nisi. Ut a quam ac felis dictum ornare vitae at nisl. Donec lobortis vitae tortor in vestibulum. Donec vitae malesuada quam, sed rutrum mi. Duis in sollicitudin lorem. Praesent rutrum, urna et condimentum porta, lorem arcu dapibus mi, eget pretium sem elit sed nibh.</p>
      <p className="text-white px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus congue metus. Proin lacinia rhoncus interdum. Vivamus ac porttitor tortor. Curabitur sapien justo, vulputate vel dolor sed, auctor aliquam tellus. Maecenas in mauris est. Quisque quis vehicula lectus, a maximus nisi. Ut a quam ac felis dictum ornare vitae at nisl. Donec lobortis vitae tortor in vestibulum. Donec vitae malesuada quam, sed rutrum mi. Duis in sollicitudin lorem. Praesent rutrum, urna et condimentum porta, lorem arcu dapibus mi, eget pretium sem elit sed nibh.</p>
      <Image
          src={lychee2}
          alt="samoyed laying down on couch"
          height="300"
        />
    </div>
    </div>
  )
}