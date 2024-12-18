const DynamicCard = ({ cards ,filteredCards ,regionFilter }) => {
    const filterCardRegion = cards.filter(card => card.region === regionFilter);
    const cardsToDisplay = regionFilter ? filterCardRegion : filteredCards;
    return (
        <div className="flex flex-wrap w-full md:justify-between gap-8 items-center my-10 justify-center">
            {cardsToDisplay.map((card ,index) => (
                <div className="md:w-[18.5rem] shadow-md rounded-md bg-white cursor-pointer transition-all transform hover:-translate-y-4 w-5/6" key={card.numericCode + index}>
                    <img className="w-full h-[11rem] object-cover rounded-t-lg" src={card.flags.svg} alt="country flag"/>
                    <div className={'p-6'}>
                        <h3 className="name text-lg font-semibold">{card.name}</h3>
                        <div className="pt-6 pb-4 flex flex-col gap-2">
                            <p>
                                <b className="font-semibold">Population:</b> {card.population}
                            </p>
                            <p>
                                <b className="font-semibold">Region:</b> {card.region}
                            </p>
                            <p>
                                <b className="font-semibold">Capital:</b> {card.capital}
                            </p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DynamicCard;