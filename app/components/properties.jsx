import { Property } from "./property"

export const Properties = ({ properties }) => {

    return (
        <>
            {properties && properties.map((property, index) => (
                <Property key={index} property={property} />
            ))}
        </>
    )
}