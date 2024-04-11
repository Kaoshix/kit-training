import csv from 'csvtojson';

export const convertCsvToJson = async () => {
    const csvFilePath = process.cwd() + '/app/datas/properties.csv';

    const jsonArray = await csv().fromFile(csvFilePath);

    return jsonArray;
}