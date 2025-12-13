export default function Table() {
  return (
    <div className="overflow-x-auto mb-10">
      <table className="w-full text-left bg-white dark:bg-gray-800 rounded-xl shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b dark:border-gray-700">Name</th>
            <th className="px-4 py-2 border-b dark:border-gray-700">Role</th>
            <th className="px-4 py-2 border-b dark:border-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b dark:border-gray-700">Imamoddin</td>
            <td className="px-4 py-2 border-b dark:border-gray-700">Web Developer</td>
            <td className="px-4 py-2 border-b dark:border-gray-700 text-green-500 font-semibold">Active</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b dark:border-gray-700">Sarahil</td>
            <td className="px-4 py-2 border-b dark:border-gray-700">Cricket Player</td>
            <td className="px-4 py-2 border-b dark:border-gray-700 text-green-500 font-semibold">Active</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b dark:border-gray-700">Muhammad</td>
            <td className="px-4 py-2 border-b dark:border-gray-700">Cricket Player</td>
            <td className="px-4 py-2 border-b dark:border-gray-700 text-red-500 font-semibold">Inactive</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b dark:border-gray-700">Yashvant</td>
            <td className="px-4 py-2 border-b dark:border-gray-700">Cricket Player</td>
            <td className="px-4 py-2 border-b dark:border-gray-700 text-red-500 font-semibold">Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
