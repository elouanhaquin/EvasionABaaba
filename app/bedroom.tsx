import CallToAction, { Ibutton } from "./callToAction";
import styles from "./page.module.css";

interface Ibedroom {
    title: string,
    p1: string,
    p2: string,
    img: string,
    color: string,
    positive: string[],
    button: Ibutton
}


export default function Bedroom(p_bedroom: Readonly<Ibedroom>) {
    return (
        <div className="h-4/5 flex w-4/5 m-auto pt-6 pb-6" id='Presentation' >

            <div className=" mt-6 w-full grow " >
                <h3 className=" mb-4 font-bold text-xl " >
                    {p_bedroom.title}
                </h3>
                <img src={p_bedroom.img} alt={"vue depuis la  " + p_bedroom.title} className=" " />
            </div>
            <div className="w-11/12 mt-16 ">
                <p className={"ml-2 text-justify text-sm   text-" + p_bedroom.color}>
                    {p_bedroom.p1}
                    <br />
                    <br />
                    {p_bedroom.p2}
                </p>
                <h3 className={"m-2 mt-4 text-justify text-xl " + styles.title + " text-" + p_bedroom.color +''} >
                    Les plus
                </h3>
                <ul>
                    {p_bedroom.positive.map(positif =>
                        <li className="ml-2 text-justify text-sm" key={positif}>
                           - {positif}
                        </li>
                    )}

                </ul>



                <CallToAction {...p_bedroom.button}></CallToAction>
            </div>

        </div>

    );
}
