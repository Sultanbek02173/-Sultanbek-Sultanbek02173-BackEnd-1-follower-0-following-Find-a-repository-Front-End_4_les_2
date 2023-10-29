import { useState } from "react";

const Form = ({ getWeather }) => {

    const [city, setCity] = useState('');

    return (
        <form className="form">
            <input type="text" placeholder="City name" onChange={(event) => {
                setCity(event.target.value);
                // console.log(event.target.value);
            }} />
            <button type="button" onClick={() => {
                getWeather(city);
            }}>Get</button>
        </form>
    );
}

export default Form;
