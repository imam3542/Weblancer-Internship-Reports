export default function Form() {
  return (
    <form className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4 max-w-xl mx-auto mb-10">
      <h2 className="text-xl font-bold">Form Example</h2>
      <input className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white" placeholder="Name" />
      <input className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white" type="email" placeholder="Email" />
      <select className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        <option>Choose option</option>
        <option>Student</option>
        <option>Developer</option>
      </select>
      <textarea className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white" rows="3" placeholder="Message"></textarea>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Submit</button>
    </form>
  );
}
