import Image from "next/image";
import Copy from "../../public/icons/copy.svg";
import Crop from "../../public/icons/crop.svg";
import Money from "../../public/icons/money.svg";

export const PropertyDescription = ({ property }) => {
    return (
        <ul>
            <li className="text-lg font-bold text-card-title">{property.Name}</li>
            <li className="text-card-sub-text">{property.PostalCode} {property.City}</li>
            <li>transport en commun à proximité</li>
            <li className="flex gap-2">
                <Image
                    src={Copy}
                    alt="NbPcsIcon"
                    width={17}
                    height={17}
                />
                de {property.NbRoomsMin} à {property.NbRoomsMax} pièces</li>
            <li className="flex gap-2">
                <Image
                    src={Crop}
                    alt="NbPcsIcon"
                    width={17}
                    height={17}
                />
                <span className="text-card-sub-text">A partir de</span> {property.Price} €
            </li>

            <li className="flex gap-2 text-sub-price">
                <Image
                    src={Money}
                    alt="NbPcsIcon"
                    width={17}
                    height={17}
                />
                soit 700 €/mois
            </li>

        </ul>
    )
}