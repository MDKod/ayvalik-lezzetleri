import Image from "next/image";
import { notFound } from "next/navigation";
import { foods } from "@/data/foods";
import Modal from "@/components/Modal";

export default async function FoodModal({ params }) {
  const { id } = await params;
  const food = foods.find((f) => f.id === id);

  if (!food) {
    notFound();
  }

  return (
    <Modal>
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative aspect-square md:w-1/2 overflow-hidden">
          <Image
            src={food.src}
            alt={food.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{food.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {food.description}
          </p>
        </div>
      </div>
    </Modal>
  );
}
