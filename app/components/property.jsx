import { PropertyCard } from "./property-card";
import { PropertyImage } from "./property-image";
import { PropertyDescription } from "./property-description";

export const Property = ({ property }) => {
    return (
        <PropertyCard>
            <PropertyImage property={property} />
            <PropertyDescription property={property} />
        </PropertyCard>
    )
}