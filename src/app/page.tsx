import Image from 'next/image'
import venue from './assets/venue.jpg'
import styles from './ui/styles.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.bgWrap}>
        <Image
          src={venue}
          alt="Culinary Institute of America - Greystone"
          fill
          sizes="100vw"
        />
      </div >
      <div className={styles.bgText}>
        <p className="text-4xl">
          Hi I&apos;m Ivy!
          <br/>
          Welcome to my website!
        </p>
      </div>
      <div className="absolute bottom-0 right-2">
        <p className={styles.bgText}>
          Photographer: Rebecca Skidgel
        </p>
      </div>
    </main>
  )
}
