import weatherPic from './Weather.jpg'

const style = {
    display: "inline-block",
    padding: "10px",
    margin: "50px 550px",
    border: "1px solid black",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center", 
    boxShadow: "5px 5px 5px #888888"
}

const imageStyle = {
    width: "300px",
    height: "150px"
}

const Weather = ({ city, low, high, condition}) => {
    return(
        <div style={style}>
            <h1>{city} Weather </h1>
            <img style = {imageStyle} src={weatherPic} alt="weather" />
            <h2>Low: {low} High: {high}</h2>
            <h3>Condition: {condition}</h3>
        </div>
    )
}

export default Weather;