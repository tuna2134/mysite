import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Main() {
  return (
    <div className={styles.container}>
      <h1 className="text-2xl">tuna2134 offical site</h1>
      <Image src="/CFF333B2-75CC-487A-87A5-F58F0276F610.jpeg" alt="icon" width={16} height={16}/>
      
      <h2 className="text-xl">work</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>RT Bot</h3>

          <a href="https://rt-bot.com">website</a>
        </div>
        <div className={styles.card}>
          <h3>google-custom-search</h3>
          <a href="https://github.com/tuna2134/google-custom-search">github</a>
        </div>
      </div>
    </div>
  )
}
