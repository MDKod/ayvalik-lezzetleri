import Image from "next/image";
import { notFound } from "next/navigation";
import { foods } from "@/data/foods";
import Link from "next/link";

export default async function FoodPage({ params }) {
  const { id } = await params;
  const food = foods.find((f) => f.id === id);

  if (!food) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:underline mb-8"
      >
        ← Galeriye Dön
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={food.src}
            alt={food.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {food.description}
          </p>
        </div>
      </div>
    </div>
  );
}
