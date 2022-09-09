import Head from 'next/head'

import styles from '../styles/Home.module.css'
import PizzaList from "../components/WeedList";
import NavBar from "../components/NavBar"
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import axios from "axios";
import Navbar2 from "../components/Navbar2";

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeedShop</title>
        <meta name="description" content="Best weed shop in the World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div />
        <Navbar2/>
        <Slider/>
        <PizzaList pizzaList={pizzaList} />
        <Newsletter/>
        <Footer/>
    </div>
  )
}
export const getServerSideProps = async ()=>{
const res = await axios.get("http://localhost:3000/api/products")
    return {
    props:{
        pizzaList:res.data,
    }
    }
}