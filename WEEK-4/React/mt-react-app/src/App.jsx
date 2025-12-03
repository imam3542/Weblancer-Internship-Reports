import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./button/Button";
import Student from './Students.jsx';
function App() {
  return (
   <>
    <Student name="imamoddin" age={20} isstudent={true} />
    <Student name="kutboddin" age={22} isstudent={false} />
    <Student name={20} age={22} isstudent={false} />
   </>
    );
}
export default App
