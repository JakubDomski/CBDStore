import styles from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () =>{
        return(
            <div className={styles.container}>
                <Image src='/img/cannaStore.png' alt="" layout="fixed" objectFit="contain" width="100px" height="120px" className={styles.img}/>
                <div className={styles.content}>
                    <div className={styles.service}>
                        <h1 className={styles.heading}>Obsługa</h1>
                        <ul className={styles.list}>
                            <li className={styles.listElement}>Regulamin</li>
                            <li className={styles.listElement}>Polityka prywatności</li>
                        </ul>
                    </div>
                    <div className={styles.info}>
                        <h1 className={styles.heading}>Informacje</h1>
                        <ul className={styles.list}>
                            <li className={styles.listElement} >O CBD</li>
                            <li className={styles.listElement}>Badania</li>
                            <li className={styles.listElement}>O Nas</li>
                        </ul>
                    </div>
                    <div className={styles.help}>
                        <h1 className={styles.heading}>Potrzebujesz wsparcia?</h1>
                        <ul className={styles.list}>
                            <li className={styles.listElement}>Skontaktuj się z nami!</li>
                            <li className={styles.listElement}>info@CousinsCouisine.com</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
}

export default Footer