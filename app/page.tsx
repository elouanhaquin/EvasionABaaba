'use client'

import styles from "./page.module.css";
import HeaderPage from "./header";
import LandingDiv from "./LandingDiv";
import Informations from "./Informations";
import Bedroom, { Ibedroom } from "./bedroom";
import Reservation from "./reservation";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { getBedrooms } from "./data/bedroom";

export default function Home() {
  
  const [bedrooms, setBedrooms] = useState<Ibedroom[]>([])


  useEffect(() => {
    getBedrooms().then((_bedrooms) =>{
      setBedrooms(_bedrooms)
      console.log(_bedrooms)
    })

  }, [])

  
  return (
    <main className={styles.main}>
            <HeaderPage/>
            <LandingDiv/>
            <Informations/>

            {bedrooms.map((_bedroom, _i) => 
                <Bedroom key={_bedroom.title}
                title={_bedroom.title}
                img={_bedroom.img}
                color={_bedroom.color}
                button={_bedroom.button}
                positive={_bedroom.positive}
                p2={_bedroom.p2}
                p1={_bedroom.p1}
                cssInversed={_i%2 == 0}
                />
                
            )}

          <Reservation/>
          <Footer/>
          </main>
          );
}
