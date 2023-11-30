import { useState, useEffect } from "react";
import QueryLoader from "../QueryLoader";
import CocktailCard from "../CocktailCard";

const Cocktails = () => {
  const [coctails, setCoctails] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        );
        const { drinks } = await response.json();

        setCoctails(drinks);
        setFetching(false);
      } catch (err) {
        setFetching(false);
        setFetchError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <QueryLoader fetching={fetching} error={fetchError}>
      {coctails.map(({ strDrink, strDrinkThumb, idDrink }) => {
        return (
          <CocktailCard name={strDrink} img={strDrinkThumb} key={idDrink} />
        );
      })}
    </QueryLoader>
  );
};

export default Cocktails;
