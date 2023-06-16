import { Country } from "../types";

const CountryCard = ({ name, area, region }: Country) => {
  return (
    <div
      className="border-2 flex flex-col items-start p-2 px-4
     justify-center bg-green-300"
    >
      <span>Country: {name}</span>
      <span>Region: {region}</span>
      <span>Area: {area}</span>
    </div>
  );
};

export default CountryCard;
