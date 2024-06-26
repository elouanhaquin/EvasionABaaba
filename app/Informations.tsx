import Image from 'next/image'
export default function Informations() {
    return (
        <div className="h-full flex mt-16 pb-24 lg:mt-36 " id='Informations' >
            <div className=" flex-col ">
            <div className=" w-4/5 m-auto">
                <h3 className="   w-full ml-0 mt-6 mb-8 font-bold text-xl " >
                    Le Fare Baaba, notre fiertée:
                </h3>
               
            </div>
            <div className="snap-x snap-mandatory flex md:flex-row flex-col flex-wrap w-full m-auto justify-center  ">
                    <img src="/fare-babaa-vu-dock.webp" alt="Fare baba vue depuis le dock" className="md:w-1/4 m-4  transition ease-in-out opacity-50 hover:opacity-100  hover:scale-110" />
                    <img src="/fare-babaa-vu-loin.webp" alt="Fare baba vu de loin" className=" md:w-1/4 m-4 transition ease-in-out opacity-50 hover:opacity-100 hover:scale-110" />
                    <img src="/fare-babaa-vu-mer.webp" alt="Fare baba et sa vue mer" className="md:w-1/4 m-4 transition ease-in-out opacity-50 hover:opacity-100  hover:scale-110" />
                </div>
            </div>
       
        </div>

    );
}
