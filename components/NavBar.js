
import styles from "../styles/Navbar2.module.css"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";



const Navbar2 = ()=>{
    const router = useRouter();

    const [isActive, setIsActive] = useState(false);

    const contentClassname = isActive
        ? `${styles["active"]} ${""}`
        : "";

    const [isActive2, setIsActive2] = useState(false);

    const contentClassname2 = isActive2
        ? `${styles["active"]} ${""}`
        : "";



    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.list}>
                <div   className={styles.indicator}>
                    <div className={styles.corners}></div>
                </div>
                <li>
                    <a href="#" onClick={() => setIsActive(!isActive)} className={contentClassname} >
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div className={styles.text}>Home</div>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsActive2(!isActive2)} className={contentClassname2} >
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div className={styles.text}>Profil</div>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsActive(!isActive)} className={contentClassname}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div className={styles.text}>Produkty</div>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsActive(!isActive)} className={contentClassname} >
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div className={styles.text}>Koszyk</div>
                    </a>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar2;

