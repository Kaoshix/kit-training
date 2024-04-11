import Image from "next/image"

export const PropertyImage = ({ property }) => {
    return (
        <Image
            src={`/images/${property.Picture}`}
            alt={property.Name}
            width={150}
            height={150}
            className="rounded-lg aspect-square object-cover"
        />
    )
}