export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:-translate-y-1 hover:shadow-2xl transition cursor-pointer">
          <h2 className="text-2xl font-bold mb-3">Card {i}</h2>
          <p className="mb-4">Reusable card component with hover effect & dark theme.</p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Learn More</button>
        </div>
      ))}
    </div>
  );
}
