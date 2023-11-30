import "./cocktailCard.css";

const CocktailCard = ({ name, img }) => {
  return (
    <div className="cocktail">
      <div className="cocktail-name">{`Cocktail ${name}`}</div>
      <img src={img} alt="A cocktail" className="cocktail-img" />
    </div>
  );
};

export default CocktailCard;
