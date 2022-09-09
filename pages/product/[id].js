import styles from "../../styles/Product.module.css";
import Image from "next/image";
import {useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2";


const Product = ({ weed }) => {
  const [price, setPrice] = useState(weed.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = weed.prices[sizeIndex] - weed.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const notify = () => toast(`${weed.title} Dodano do koszyka`, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"dark",
  });
  ;

  return (
      <>
      <Navbar2/>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={weed.img} objectFit="contain" layout="fill" alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{weed.title}</h1>
          <span className={styles.price}>{price}pln</span>
          <p className={styles.desc}>{weed.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => handleSize(0)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>1g</span>
            </div>
            <div className={styles.size} onClick={() => handleSize(1)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>5g</span>
            </div>
            <div className={styles.size} onClick={() => handleSize(2)}>
              <Image src="/img/sizeBig.png" layout="fill" alt="" />
              <span className={styles.number}>10g</span>
            </div>
          </div>

          <div className={styles.add}>
            <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                defaultValue={1}
                className={styles.quantity}
            />
            <button className={styles.button} onClick={notify} >
              Add to Cart
            </button>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
          </div>
        </div>
      </div>
        <Footer/>
      </>
  );
};


export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
      `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      weed: res.data,
    },
  };
};

export default Product;