import CallToAction from "./callToAction";

export default function LandingDiv() {
    return (
        <div className="h-full flex w-4/5 m-auto mt-24 lg:mt-36 pb-6" id='Presentation' >
            <div className="m-6  w-full grow hidden md:block " >
                <img src="/photo-cover.webp" alt="Cocotiers vus depuis le gîte" className=" "/>
            </div>
            <div className="w-11/12  ">
                <h3 className="mt-6 mb-8 md:font-bold font-medium text-xl " >
                    Découvrez la Nouvelle Calédonie Autrement ...
                </h3>
                <p className="ml-2 text-justify">
                    Bienvenue dans un havre de paix préservé, où chaque lever de soleil révèle un paysage époustouflant et chaque brise marine transporte son lot de découvertes. Immergez-vous dans une expérience authentique au cœur de la nature luxuriante, entre lagon cristallin et forêts tropicales.
                    <br/>
                    <br/>
                    Offrez-vous une escapade inoubliable où chaque instant est une invitation à explorer, à apprendre et à vous émerveiller. Venez vivre la Nouvelle-Calédonie sous un nouvel angle, où l'aventure et la sérénité se conjuguent pour créer des souvenirs intemporels.
                </p>

                <CallToAction text="Réserver mon expérience" url="#" color='bg-teal-400'></CallToAction>
            </div>
            
        </div>

    );
}
