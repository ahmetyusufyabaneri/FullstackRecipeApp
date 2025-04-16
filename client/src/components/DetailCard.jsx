import { GiMeal } from "react-icons/gi";
import { RiTimerLine } from "react-icons/ri";

const DetailCard = ({ data }) => {
  return (
    <div className="mt-12">
      <h1 className="detail-title">{data?.recipeName}</h1>
      <div className="flex gap-4 my-4">
        <div className="badge">
          <GiMeal />
          <span>{data?.category}</span>
        </div>
        <div className="badge">
          <RiTimerLine />
          <span>{data?.recipeTime} min</span>
        </div>
      </div>
      <img src={data?.image} className="w-full max-h-96 object-cover" />
      <div className="my-4">
        <h1 className="detail-title">Ingredients</h1>
        <ul>
          {data?.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg font-bold">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4">
        <h1 className="detail-title">Instructions</h1>
        <ol className="list-decimal">
          {data?.instructions.map((instruction, index) => (
            <li key={index} className="text-lg font-bold">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
      <div className="my-4">
        <h1 className="detail-title">Instructions</h1>
        <p className="text-lg font-bold">{data?.servingSuggestion}</p>
      </div>
    </div>
  );
};

export default DetailCard;
