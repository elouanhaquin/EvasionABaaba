'use client'

import { useEffect, useState } from "react";
import CallToAction, { Ibutton } from "./callToAction";
import { Cedarville_Cursive } from "next/font/google";
const cedarville = Cedarville_Cursive({weight:"400", subsets: ["latin"]});

export interface Ibedroom {
    title: string,
    p1: string,
    p2: string,
    img: string,
    color: string,
    positive: string[],
    button: Ibutton,
    cssInversed?: boolean 
}


export default function Bedroom(p_bedroom: Readonly<Ibedroom>) {
  const [bedroom, setBedrooms] = useState<Ibedroom>(p_bedroom)

  useEffect(() => {
    console.log(bedroom)
  })

  return (
        <div className={"h-4/5 flex w-4/5  pt-6 pb-6 lg:mt-36  "  + ( p_bedroom.cssInversed != undefined && p_bedroom.cssInversed === true ?  " flex-row-reverse m-auto " : " m-auto")} id='Reserver' >

            <div className={" mt-6 w-full grow hidden md:block  "  + ( p_bedroom.cssInversed != undefined && p_bedroom.cssInversed === true ?  " md:ml-32 lg:ml-64" : " mr-32")} >
                <h3 className=" mb-4 font-bold text-xl " >
                    {p_bedroom.title}
                </h3>
                <img src={p_bedroom.img} alt={"vue depuis la  " + p_bedroom.title}  />
            </div>
            <div className="w-11/12 mt-16 ">
            <h3 className=" mb-4 font-bold text-xl  md:hidden block " >
                    {p_bedroom.title}
                </h3>
                <p className={"ml-2 mr-2 text-justify text-sm  " }>
                    {p_bedroom.p1}
                    <br />
                    <br />
                    {p_bedroom.p2}
                </p>
                <h3 className={"m-2 mt-4 text-justify text-2xl  " +cedarville.className + " " + (" text-[#BD9E70]") } >
                    Les plus  
                </h3>
                <ul>
                    {p_bedroom.positive.map(positif =>
                        <li className="ml-2 mr-2 text-justify text-sm" key={positif}>
                           - {positif}
                        </li>
                    )}

                </ul>
                <CallToAction text={p_bedroom.button.text} url={p_bedroom.button.url} color={"bg-[#BD9E70]"}></CallToAction>
            </div>

        </div>

    );
}
