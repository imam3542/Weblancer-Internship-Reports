//use state and on On change to update the value of input field and display below it (use of Hooks[useStaete])
import { useState } from 'react';
function Hooks1() {
    const [name,setName] = useState("");
    //default value type
    const [color , setColor] = useState("green");
    //default value type (object)
    const [car , setCar] = useState({brand:"Ford", model:"Mustang", year:1964});
    return(
        <div>
        <h1 className='hooks-h1'>Hooks Example</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p className='hooks-p'>Your name is: {name}</p>
        <p className='hooks-p'>My favorite color is: {color}</p>
        <h2 className='hooks-h2'>My favorite car is: {car.brand} {car.model} ({car.year})</h2>
        <button type='button' onClick={()=>setColor("Blue")} className="hooks-button">Change Color</button>
    </div>
    );
}   
export default Hooks1;