import { Properties } from "./properties";
import { FetchProperties } from "../utils/fetch-properties";

export const PropertiesContainer = ({ firstProperties }) => {

    const callAPI = async () => {
        try {
            firstProperties.map(async (property) => {
                const response = await fetch(`https://preprod.kitlenid.fr/api/transport?lon=${property.Longitude}&lat=${property.Latitude}`);
                const data = await response.json();
                console.log(data);
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    callAPI();

    // async function fetch() {
    //     const properties = await FetchProperties(12, 24);
    // }

    // const handleClickNext = () => {
    //     fetch();
    // }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-3 gap-5 ">
                <Properties properties={firstProperties} />
            </div>

            <div className="w-full w- flex justify-end text-right mt-3">
                <button
                    className="block bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-3 py-1 rounded"
                >Next</button>
            </div>
        </div>
    )
}