'use client'
import { useEffect, useState } from "react";
import CallToAction from "./callToAction";
import styles from "./page.module.css";

const days = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

export default function Reservation() {
    const [selectedBedroom, setSelectedBedroom] = useState<string[]>([])
    const [selectedDay, setSelectedDay] = useState<string[]>([])
    const [childCount, setChildCount] = useState(0)
    const [dateStart, setDateStart] = useState<Date>()
    const [price, setPrice] = useState(0)


    function addElementToArrayIfDoesntExist(p_stringToAdd: string, p_arr: string[], p_state: any) {
        if (p_arr.includes(p_stringToAdd))
            p_state(p_arr.filter(f => f != p_stringToAdd))
        else
            p_state([...p_arr, p_stringToAdd])
    }

    function computePrice() {
        if (dateStart && selectedBedroom.length > 0 && selectedDay.length > 0) {
            let _price = childCount * 1000
            _price += (selectedBedroom.length * selectedDay.length * 5000)
            _price += (selectedDay.filter(d => d === "Samedi").length * 2000)
            _price += (selectedDay.filter(d => d === "Dimanche").length * 2000)
            setPrice(_price)
        }
    }

    useEffect(() => {
        computePrice()
    }, [dateStart, childCount, selectedBedroom, selectedDay])


    useEffect(() => {
        if (childCount > selectedBedroom.length) {
            setChildCount(childCount - 1)
        }
    }, [childCount, selectedBedroom])

 

    return (
        <div className="h-4/5  w-4/5 m-auto mt-32 pb-6" id='Contact' >

            <div className=" mt-6 mb-4 w-full grow " >
                <h3 className="  font-bold text-xl " >
                    {"Réserver"}
                </h3>
            </div>

            <div className="w-full " >
                <h4>
                    Chambre à réserver
                </h4>
                <div className="flex flex-col md:flex-row space-y-5  md:space-y-0 md:space-x-32 mt-6">
                    <button className={"rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 hover:bg-teal-100 " + (selectedBedroom.includes('Poingam') ? " bg-teal-400  " : " bg-white")} onClick={() => addElementToArrayIfDoesntExist("Poingam", selectedBedroom, setSelectedBedroom)}>
                        Poingam
                    </button>
                    <button className={" rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 hover:bg-teal-100 " + (selectedBedroom.includes('Taanlo') ? " bg-teal-400  " : " bg-white")} onClick={() => addElementToArrayIfDoesntExist("Taanlo", selectedBedroom, setSelectedBedroom)}>
                        Taanlo
                    </button>
                    <button className={"rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 hover:bg-teal-100 " + (selectedBedroom.includes('Yenghebane') ? " bg-teal-400  " : " bg-white")} onClick={() => addElementToArrayIfDoesntExist("Yenghebane", selectedBedroom, setSelectedBedroom)}>
                        Yenghebane
                    </button>
                </div>
                <div className="w-full flex" >
                    <div className="w-full md:w-4/6">
                        <h4 className="mt-8">
                            Nombre d'enfants (au maximum un par chambre)
                        </h4>
                        <div className="flex-col md:flex-row space-y-5 md:space-x-32  mt-6">
                            <input value={childCount} max={selectedBedroom.length} min={0} onChange={e => setChildCount(Number.parseInt(e.target.value))} type="number" placeholder="Nombre d'enfants" className="bg-white w-full  md:w-1/3 focus:outline-none rounded-md p-4 border-2 border-teal-500 ">
                            </input>
                        </div>
                    </div>

                </div>
                <div className="w-full flex">
                    <div className="w-full ">
                        <h4 className="mt-8">
                            Semaine de la réservation
                        </h4>
                        <div className="flex space-x-8 mt-6 ">
                            <input type="date" onChange={e => setDateStart(new Date("" + e.target.value))} placeholder="Nombre d'enfants" className="bg-white focus:outline-none rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 ">
                            </input>
                        </div>

                    </div>
                </div>
               
                <div className="w-full flex">
                    <div className="w-full ">
                        <h4 className="mt-8">
                            Sélectionnez les jours que vous souhaitez réserver
                        </h4>

                        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-16  md:mt-6">
                            {days.map(day =>
                                <button key={day} className={" rounded-md p-4 border-2 border-teal-500 w-full  h-full hover:bg-teal-100 " + (selectedDay.includes(day) ? " bg-teal-400  " : " bg-white")} onClick={() => addElementToArrayIfDoesntExist(day, selectedDay, setSelectedDay)}>
                                    {day}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row ">
                    <div className="w-full md:w-1/2">
                        <h4 className="mt-8">
                            Prénom
                        </h4>
                        <input type="text" placeholder="Votre prénom" className="bg-white mt-6 rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 focus:outline-none ">
                        </input>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h4 className="mt-8">
                            Nom
                        </h4>
                        <input type="text" placeholder="Votre nom" className="bg-white mt-6 rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 focus:outline-none ">
                        </input>
                    </div>

                </div>
                <div className="">
                    <h4 className="mt-8">
                        Email
                    </h4>
                    <input type="mail" placeholder="Votre email" className="bg-white mt-6 rounded-md p-4 border-2 border-teal-500 w-full md:w-1/3 focus:outline-none">
                    </input>
                </div>
                <div className="w-full flex">
                    <div className="w-4/6">
                        <h4 className="mt-8">
                            Prix estimé (à payer sur place)
                        </h4>
                        <div className="flex space-x-4 mt-6 text-2xl font-bold text-teal-500">
                            {price} XPF
                        </div>
                    </div>
                </div>
                <CallToAction text="Réserver votre expérience" url="" color='bg-teal-400' ></CallToAction>
            </div>

        </div>


    );
}
