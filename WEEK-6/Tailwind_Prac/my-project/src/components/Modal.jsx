export default function Modal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl space-y-4 w-80">
        <h2 className="text-xl font-bold">Modal Window</h2>
        <p>Example modal using Tailwind.</p>
        <button onClick={() => setOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
}
