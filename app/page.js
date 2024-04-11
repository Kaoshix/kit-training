import { convertCsvToJson } from "./utils/convert-csv-to-json";
import { PropertiesContainer } from "./components/properties-container";

export default async function Home() {

  const propertiesFetched = await convertCsvToJson();
  const firstProperties = propertiesFetched.slice(0, 12);

  return (
    <main className="min-h-screen mx-auto text-card-text bg-bg-color py-10">
      <PropertiesContainer firstProperties={firstProperties} />
    </main>
  );
}
