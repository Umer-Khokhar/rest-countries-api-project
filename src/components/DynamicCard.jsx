import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountryProvider } from "./FetchContext.jsx";

const DynamicCard = () => {
  const { filteredCards, cards, regionFilter, resetFilters } = useContext(CountryProvider);

  let navigate = useNavigate();

  const handleCardClick = (nameCode) => {
    navigate(`/country/${nameCode}`);
  };

  const filterCardRegion = cards.filter((card) => card.region === regionFilter);
  const cardsToDisplay = regionFilter ? filterCardRegion : filteredCards;
  return (
    <div className="flex flex-wrap w-full md:justify-between gap-8 items-center my-10 justify-center">
      {cardsToDisplay.map((card, index) => (
        <div
          onClick={() => {
            handleCardClick(card.alpha3Code.toLowerCase())
            resetFilters()

          }}
          className="md:w-[18.5rem] shadow-md rounded-md bg-white cursor-pointer transition-all transform hover:-translate-y-4 w-5/6 dark:bg-navBg dark:text-gray-50"
          key={card.numericCode + index}
        >
          <img
            className="w-full h-[11rem] object-cover rounded-t-lg"
            src={card.flags.svg}
            alt="country flag"
          />
          <div className={"p-6"}>
            <h3 className="name text-lg font-semibold">{card.name}</h3>
            <div className="pt-6 pb-4 flex flex-col gap-2">
              <p className={"dark:text-gray-300"}>
                <b className="font-semibold dark:text-gray-200">Population:</b>{" "}
                {card.population}
              </p>
              <p className={"dark:text-gray-300"}>
                <b className="font-semibold dark:text-gray-200">Region:</b>{" "}
                {card.region}
              </p>
              <p className={"dark:text-gray-300"}>
                <b className="font-semibold dark:text-gray-200">Capital:</b>{" "}
                {card.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicCard;
