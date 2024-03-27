import { Cedarville_Cursive } from "next/font/google";
import Image from 'next/image'
const cedarville = Cedarville_Cursive({weight:"400", subsets: ["latin"]});

export default function Footer() {
    return (
        <footer className="bg-teal-600  mt-32">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="" className={cedarville.className}>
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white  ">Evasion à Baaba</span>
                        </a>
                        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100 sm:text-center ">© 2023 <a href="#" className="hover:underline">Evasion à Baaba™</a>. All Rights Reserved.
          </span>
      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-200  ">Liens utiles</h2>
                            <ul className="text-gray-200  font-medium">
                                <li className="mb-4">
                                    <a href="#Informations" className="hover:underline">Informations</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#Reserver" className="hover:underline">Les Chambres</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#Contact" className="hover:underline">Réserver</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-16 w-2/3">
                            <img src="logo-nc.svg" alt=" Logo de la nouvelle-calédonie" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>



    );
}
