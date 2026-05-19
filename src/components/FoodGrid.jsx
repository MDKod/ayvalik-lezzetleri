import { foods } from "@/data/foods";
import FoodCard from "./FoodCard";

export default function FoodGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
