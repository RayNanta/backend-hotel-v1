import React from 'react'
import styles from "../style";
import {Footer, Hero, Navbar, Header, Search } from '../components/LandingPage'
import { ListKamar } from '../components/Cari Kamar'

const CariKamar = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`gray-bg ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>  

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <Hero />
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Search />
          <ListKamar />
        </div>
      </div>

      <div className={`gray-bg mt-20 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>  
    </div>
  )
}

export default CariKamar