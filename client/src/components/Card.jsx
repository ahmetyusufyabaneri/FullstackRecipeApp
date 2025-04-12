import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <Link to={`/detail/${recipe.id}`} className="bg-white rounded-md p-4">
      <div className="relative">
        <img
          src={recipe?.image}
          className="w-full h-36 object-cover rounded-md"
        />
        <div className="bg-white absolute bottom-1 left-1  flex items-center gap-2 p-1 rounded-lg">
          <FaRegClock size={14} />
          <p className="font-bold text-sm">{recipe?.recipeTime} min</p>
        </div>
      </div>
      <h2 className="text-lg font-semibold my-2">{recipe?.recipeName}</h2>
      <h3 className="text-gray-500">{recipe.category}</h3>
      <div className="flex items-center gap-2 mt-2">
        <div className="bg-gray-300 px-1 py-0.5 rounded-md">
          <p className="line-clamp-1">{recipe?.ingredients[0]}</p>
        </div>
        <div className="bg-gray-300 px-1 py-0.5 rounded-md">
          <p className="line-clamp-1">{recipe?.ingredients[1]}</p>
        </div>
        <div className="bg-gray-300 px-1 py-0.5 rounded-md">
          <p className="line-clamp-1">{recipe?.ingredients[2]}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
