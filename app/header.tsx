import { Cedarville_Cursive } from "next/font/google";
const cedarville = Cedarville_Cursive({weight:"400", subsets: ["latin"]});

export default function HeaderPage() {
    return (
        <header className="fixed top-0 bg-white z-50 w-full drop-shadow-md">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full">
                <div className="flex flex-wrap justify-between items-center w-full">
                    <a href="" className={cedarville.className} role="title">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-teal-600  ">Evasion à Baaba</span>
                    </a>
                    
                    <div className="hidden md:flex align-middle" >
                        <ul className="md:flex md:flex-row gap-x-8 mt-4 font-medium mr-16 align-middle mb-4" >
                            <li>
                                <a href="#Presentation" className="block py-2 pr-4 pl-3 color-teal-500  lg:p-0 " aria-current="page">Présentation</a>
                            </li>
                            <li>
                                <a href="#Informations" className="block py-2 pr-4 pl-3 color-[#02757C] lg:p-0 ">Informations</a>
                            </li>
                            <li>
                                <a href="#Reserver" className="block py-2 pr-4 pl-3 color-[#02757C] lg:p-0  ">Réserver</a>
                            </li>
                            <li>
                                <a href="#Contact" className="block py-2 pr-4 pl-3 color-[#02757C] lg:p-0 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}
