import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CountryProvider } from "../components/index.js";
import { images } from "../constants/index.js";

const DetailPage = () => {
  const { filteredCards, resetFilters } = useContext(CountryProvider);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleBorderClick = (border) => {
    navigate(`/country/${border.toLowerCase()}`);
  };
  const loading = !filteredCards || !Array.isArray(filteredCards);
  let card = Array.isArray(filteredCards)
    ? filteredCards.find((card) => card.alpha3Code.toLowerCase() === id)
    : null;

  if (!card) {
    return <p>Card not found!</p>; // Show message if card is not found
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to={`/`} onClick={resetFilters}>
        <button className="btn flex justify-center items-center gap-2 border border-gray-300 border-solid px-5 py-1 dark:text-gray-50  rounded-md m-8 shadow-lg">
          <img
            className={"dark:invert"}
            src={images.leftArrow}
            alt="going-back logo"
            width={20}
          />
          Back
        </button>
      </Link>
      <div
        key={card.numericCode}
        className="flex md:justify-around md:items-center w-full gap-12 pb-10 md:pb-0 md:gap-40 px-6 md:px-16 mt-10 flex-col md:flex-row"
      >
        <div className="flag md:w-1/2 w-full md:min-w-[18rem]">
          <img className="w-full" src={card.flags.svg} alt="" />
        </div>
        <div className="information flex-1 dark:text-gray-50">
          <h2 className="text-3xl font-semibold mb-7">{card.name}</h2>
          <div className="info flex justify-between items-start md:flex-row flex-col gap-10 md:gap-2">
            <div className="left-info flex flex-col gap-3">
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold dark:text-gray-200">Native Name:</b>{" "}
                {card.nativeName}
              </p>
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold">Population:</b> {card.population}
              </p>
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-300"
                }
              >
                <b className="font-semibold dark:text-gray-200">Region:</b>{" "}
                {card.region}
              </p>
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold dark:text-gray-200">Sub Region:</b>{" "}
                {card.subregion}
              </p>
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold dark:text-gray-200">Capital:</b>{" "}
                {card.capital}
              </p>
            </div>
            <div className="right-info flex flex-col gap-2">
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold dark:text-gray-200">
                  Top Level Domain:
                </b>{" "}
                {card.topLevelDomain}
              </p>
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold dark:text-gray-200">Currencies:</b>{" "}
                {card.currencies[0].code}
              </p>
              <p
                className={
                  "flex justify-start gap-1 whitespace-nowrap dark:text-gray-400"
                }
              >
                <b className="font-semibold dark:text-gray-200">Languages:</b>{" "}
                {card.languages[0].name}
              </p>
            </div>
          </div>
          {card.borders && (
            <div className="border-countries flex gap-4 md:mt-16 mt-10">
              <h3 className="font-semibold whitespace-nowrap">
                Border Countries:
              </h3>
              <div className="border-btn flex flex-wrap justify-start items-center gap-2">
                {card.borders &&
                  card.borders.map((border, index) => (
                    <button
                      onClick={() => handleBorderClick(border)}
                      key={index}
                      className="border rounded border-gray-400 border-solid px-4 text-xs dark:bg-navBg capitalize"
                    >
                      {border.toLowerCase()}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
