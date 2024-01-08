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
      </div>
        <p className={styles.bgText}>
          Hi I&#39;m Ivy!
          <br/>
          Welcome to my website!
        </p>
    </main>
  )
}
