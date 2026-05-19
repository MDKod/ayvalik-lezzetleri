import FoodGrid from "@/components/FoodGrid";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Ayvalık Lezzetleri</h1>
          <p className="text-gray-600">Ayvalık'ta en iyi lezzetleri keşfedin</p>
        </header>
        <FoodGrid />
      </div>
    </main>
  );
}
