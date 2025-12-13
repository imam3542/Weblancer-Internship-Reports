export default function Navbar({ toggleTheme, dark }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow mb-10">
      <h1 className="text-xl font-bold">Tailwind Playground</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
