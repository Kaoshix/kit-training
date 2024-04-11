export const PropertyCard = ({ children }) => {
    return (
        <div className="flex gap-3 bg-white rounded-lg shadow-sm py-4 px-3 border-2 border-card-border">
            {children}
        </div>
    )
}