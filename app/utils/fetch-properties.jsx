import { convertCsvToJson } from "./convert-csv-to-json";

export const FetchProperties = async (startIndex, endIndex) => {

    const propertiesFetched = await convertCsvToJson();
    const nextProperties = propertiesFetched.slice(startIndex, endIndex);

    return nextProperties;
}