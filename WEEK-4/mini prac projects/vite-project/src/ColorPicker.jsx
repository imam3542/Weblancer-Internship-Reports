import { useState } from "react";

function ColorPicker() {
  const [clr, setClr] = useState("");

  function changeColor(event) {
    setClr(event.target.value);
  }

  return (
    <div>
      <h2>Color Picker</h2>
      <input type="color" onChange={changeColor} />
      <p>Selected Color: {clr}</p>
    </div>
  );
}

export default ColorPicker;
