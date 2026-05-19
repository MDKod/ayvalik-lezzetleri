import Link from "next/link";
import Image from "next/image";
import { Foods } from "@/utils/constants";

export default function Foods() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {Foods.map((item) => (
        <Link
          key={item.id}
          href={`/foods/${item.id}`}
          className="block"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-center mt-2">{item.name}</h2>
        </Link>
      ))}
    </div>
  );
}