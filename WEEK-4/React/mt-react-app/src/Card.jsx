import cardpic from './assets/cx-1.jpeg'
function Card(){
    return(
        <div className="Card">
            <img alt="react-logo" src={cardpic} className="Card-image"></img>
            <h1 className="Card-h1">This was made by imamoddin</h1>
            <p className="Card-p">this was first card i make using a react.js</p>
        </div>
    );
}
export default Card;