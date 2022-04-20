import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Main() {
  return (
    <div className={styles.container}>
      <nav className="flex">
        <Image src="/CFF333B2-75CC-487A-87A5-F58F0276F610.jpeg" alt="icon" width={30} height={30}/>
        <h1 className="text-2xl">tuna2134 offical site</h1>
      </nav>
      
      <h2 className="text-xl text-center">work</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className="text-lg">RT Bot</h3>

          <a href="https://rt-bot.com">website</a>
        </div>
        <div className={styles.card}>
          <h3 className="text-lg">google-custom-search</h3>
          <div className="flex">
            <Image src="/0C958386-25C4-43EF-9361-B99D10274D90.png" alt="github logo" width={20} height={20}/>
            <a href="https://github.com/tuna2134/google-custom-search">github</a>
          </div>
        </div>
        <div className={styles.card}>
          <h3 className="text-lg">sanic-discord</h3>
          <a href="https://github.com/tuna2134/sanic-discord">github</a>
        </div>
        <div className={styles.card}>
          <h3 className="text-lg">sanic-guide translate</h3>
          <a href="https://github.com/sanic-org/sanic-guide">github</a>
        </div>
      </div>
      <h2 className="text-xl text-center">skill</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className="text-lg">Python</h3>
        </div>
        <div className={styles.card}>
          <h3 className="text-lg">Golf</h3>
        </div>
      </div>
    </div>
  )
}
