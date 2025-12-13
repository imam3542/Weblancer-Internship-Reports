import { useState } from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Table from "./components/Table";
import Alerts from "./components/Alerts";
import Modal from "./components/Modal";

export default function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition p-6">

      <Navbar toggleTheme={toggleTheme} dark={dark} />
      {/* <Buttons />
      <Cards />
      <Form /> */}
      <Table />
      {/* <Alerts /> */}

      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
        Open Modal
      </button>

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
