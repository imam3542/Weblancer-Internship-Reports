function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Week 6 UI</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </nav>

      {/* CARD */}
      <div className="p-6">
        <div className="max-w-sm bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Tailwind Card</h3>
          <p className="text-gray-600 mt-2">
            This card is built using simple Tailwind classes.
          </p>
          <button className="mt-3 px-4 py-1 bg-green-500 text-white rounded">
            Click
          </button>
        </div>
      </div>

      {/* SIMPLE FORM */}
      <div className="max-w-sm mx-auto bg-white p-4 rounded shadow mt-6">
        <h2 className="text-xl font-semibold mb-3">Contact Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 border rounded mb-3"
        />

        <button className="w-full py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
