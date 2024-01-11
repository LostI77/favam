"use client"
import Nav from '@/components/Nav'
import styles from './page.module.css'
import { Tektur } from 'next/font/google'
import { Icon } from '@iconify/react'
const tektur = Tektur({ subsets: ["latin"], weight: ["400", "500", "600"] })
export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.introductionContainer}>
          <article className={styles["introduction-content"]}>
              <h1 className={`${styles["introduction-title"]} ${tektur.className}`}>
                Favam <Icon icon="material-symbols:account-tree-outline" />
              </h1>
              <p className={`${styles["introduction-text"]} ${tektur.className}`}>
                La app que simplifica tus problemas...
              </p>
            <div className={styles["introduction-other"]}>
                <p className={`${styles["introduction-text"]} ${tektur.className}`}>
                  ¿Como inicio a usar Favam? <br></br>
                  ¡Haz clic en el boton de abajo para comenzar!
                </p>
                <a
                  className={`${styles["startButton"]} ${tektur.className}`}
                  href="/signup"
                  target='_self'
                  rel='opener'
                  >
                    Registrate Ahora
                </a>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
