import styles from "../styles/Newsletter.module.css"
import Image from "next/image";
const Newsletter = () =>{
   async function handleSubmit (e){
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field =>{
        if (!field.name) return;
        formData[field.name] = field.value;
    })
       console.log(formData);
    }

    return(
        <div className={styles.container}>
            <div className={styles.surveyContainer}>
                <form method="post" onSubmit={handleSubmit} >
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label>
                        <input type="message" name="message" />
                    </p>
                    <button type="submit" />
                </form>
            </div>
            <div className={styles.imgBong}>
                <Image src='/img/bong.png' alt=""  objectFit="contain" width="400vw" height="400vw" />
            </div>
            <div className={styles.imgLicense}>
                <Image src='/img/license.png' alt="" objectFit="contain" width="400vw" height="400vw" />
            </div>

        </div>
    )
}
export default Newsletter