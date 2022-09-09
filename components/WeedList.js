import styles from "../styles/WeedList.module.css";
import WeedCard from './WeedCard'

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Poznaj nasze najlepsze produkty</h1>
            <p className={styles.desc}>
                Starannie wyselekcjonowane produkty najwyższej jakości to właśnie moto naszej fimy.<br/> Jesteśmy pewni że zaspokoimy nawet najbardziej wybrednych klientów.
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <WeedCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;