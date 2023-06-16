import { useState } from "react";
import CountryCard from "./components/CountryCard";
import useFetch from "./hooks/useFetch";
import { Country, SortType } from "./types";
import Sort from "./components/Sort";
import Pagination from "./components/Pagination";
import LoadingCard from "./components/LoadingCard";

function App() {
  const [sortValue, setSortValue] = useState<SortType>("Name ascending");
  const [lithuania, setLithuania] = useState(false);
  const [oceania, setOceania] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(4);

  const { data, isLoading } = useFetch(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );

  const lithuaniaArea: number | undefined = data?.find(
    (item) => item.name === "Lithuania"
  )?.area;

  switch (sortValue) {
    case "Name ascending":
      data?.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Name descending":
      data?.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  const filteredCountries = data?.filter((item: Country) => {
    if (oceania && lithuania) {
      return item.region === "Oceania" && item.area < lithuaniaArea!;
    }

    if (oceania) {
      return item.region === "Oceania";
    }

    if (lithuania) {
      return item.area < lithuaniaArea!;
    }

    return true;
  });

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = filteredCountries?.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  return (
    <div className="bg-green-200 min-h-screen h-full p-5">
      <h1 className="text-black text-3xl my-3">Countries</h1>
      <div className="flex justify-between items-end mb-4">
        <div className="flex justify-between items-start gap-3">
          <div className="flex items-center gap-1">
            <label>Countries smaller than Lithuania</label>
            <input
              type="checkbox"
              checked={lithuania}
              onChange={() => {
                if (!lithuania) setCurrentPage(1);
                setLithuania((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center gap-1">
            <label>Countries in Oceania</label>
            <input
              type="checkbox"
              checked={oceania}
              onChange={() => {
                if (!oceania) setCurrentPage(1);
                setOceania((prev) => !prev);
              }}
            />
          </div>
        </div>
        <Sort setSortValue={setSortValue} />
      </div>
      <div className="flex flex-col gap-3">
        {isLoading
          ? [...Array(6)].map(() => <LoadingCard />)
          : currentCountries?.map((item) => (
              <CountryCard
                key={item.name}
                name={item.name}
                region={item.region}
                area={item.area}
              />
            ))}
      </div>
      <Pagination
        totalCountries={filteredCountries?.length}
        countriesPerPage={countriesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
