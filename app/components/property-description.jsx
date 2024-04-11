'use client';
import Image from "next/image";
import Copy from "@/public/icons/Copy.svg";
import Crop from "@/public/icons/Crop.svg";
import Money from "@/public/icons/Money.svg";
import Pin from "@/public/icons/Pin.svg";
import axios from "axios";
import { useEffect, useState } from "react";

export const PropertyDescription = ({ property }) => {

    const { Name, PostalCode, City, NbRoomsMin, NbRoomsMax, Price, Longitude, Latitude } = property;

    const [transport, setTransport] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            try {
                axios.get(`https://preprod.kitlenid.fr/api/transport?lon=${Longitude}&lat=${Latitude}`).then((response) => {
                    setTransport(response.data);
                })
            }
            catch (error) {
                console.error(error);
            }
        }
        callAPI();
    }, [])

    return (
        <ul>
            <li className="text-lg font-bold text-card-title">{Name}</li>
            <li className="text-card-sub-text">{PostalCode} {City}</li>
            <li className="flex gap-3">{transport && transport.map((transpo, index) => (
                <span key={index}>{
                    transpo.ligne
                }</span>
            ))}</li>
            <li className="flex gap-2">
                <Image
                    src={Copy}
                    alt="copyIcon"
                    width={17}
                    height={17}
                />
                {NbRoomsMin === NbRoomsMax ? `${NbRoomsMax} pièces` : `de ${NbRoomsMin} à ${NbRoomsMax} pièces`}</li>
            <li className="flex gap-2">
                <Image
                    src={Crop}
                    alt="cropIcon"
                    width={17}
                    height={17}
                />
                <span className="text-card-sub-text">A partir de</span> {Price} €
            </li>

            <li className="flex gap-2 text-sub-price">
                <Image
                    src={Money}
                    alt="moneyIcon"
                    width={17}
                    height={17}
                />
                soit 700 €/mois
            </li>

        </ul>
    )
}