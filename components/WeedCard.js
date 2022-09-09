import Image from "next/image";
import styles from "../styles/WeedCard.module.css";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`} passHref>
                <Image src={pizza.img} alt="" width="500" height="500" />
            </Link>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>{pizza.prices[0]}zł - {pizza.prices[pizza.prices.length -1]}zł</span>
            <span className={styles.desc}>{pizza.description}</span>
        </div>
    );
};
export default PizzaCard;