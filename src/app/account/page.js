"use client"
import Image from 'next/image'
import styles from './account.module.css'

export default function Account() {
    const handleDeleteAccount = async () => {
        const res = await fetch('/api/account', {
            method: 'POST',
            body: JSON.stringify({ id, username }),
            headers: {"Content-Type" : "application/json"}
        });
        if (res.ok) {
            signOut();
        }
    }
    return(
        <main className={styles["main-account"]}>
            <section className={styles["account-sect"]}>
                <h1 className={styles["account-pag__title"]}>Account</h1>
                <div className='simple-border' />
                <div className={styles["account-image-container"]}>
                    <Image
                     className={styles["account__image"]}
                     src="/image/Fpgz6SRXsAAuiHy.jpg"
                     alt="Your Profile Picture"
                     fill
                     quality={100}
                     priority={true}
                     sizes='(max-width: 300px) 100vw, (max-width: 250px) 80vw, (max-width: 200px) 70vw'
                     draggable="false"
                     loading='eager'
                     decoding='async'
                     />
                </div>
                <div className={styles["account-information-container"]}>
                    <div className=''>
                        <p className=''> Username: {'Nothing'}</p>
                        <p className=''> Fullname: {'Nothing'} </p>
                        <p className=''> Email: {'Nothing'} </p>
                        <div className={styles['description-container']}>
                            <h3 className={styles['description-title']}>Descripcion</h3>
                            <div className='simple-border spacing' />
                            <p className={styles['description-text']}>Este es el texto de la descripción.</p>
                        </div>
                        <p className={styles['date-text']}> La cuenta fue creada en: "Insert date"</p>
                    </div>
                </div>
                <div className='simple-border spacing' />
                <section className={styles['account-configuration']}>
                    <p> This is where you can view and manage your account information. The changes may take a little time, so be patient</p>
                    <div className={styles['btn-config-container']}>
                        <button
                         className={`${styles['btn']} ${styles['btn--primary']}`}
                         type='submit'
                        >
                            Edit Information
                        </button>
                        <button
                         className={`${styles['btn']} ${styles['btn--secondary']}`}
                         type='submit'
                         onClick={handleDeleteAccount()}
                         >
                            Delete Account
                         </button>
                    </div>
                </section>
            </section>
        </main>
    )
}