import Link from "next/link";
import Image from "next/image";

export default function FoodCard({ food }) {
  return (
    <Link
      href={`/foods/${food.id}`}
      className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200"
    >
      <Image
        src={food.src}
        alt={food.name}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h2 className="text-white font-semibold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {food.name}
        </h2>
      </div>
    </Link>
  );
}
