
const Table = ({ data }) => {

    let now = new Date();
    let yaer = now.getFullYear();

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    let weekend = days[now.getDay()];

    return (
        <>
            {
                JSON.stringify(data) === '{}'
                    ? ''
                    :
                    // <table>
                    //     <tr>
                    //         <td>city</td>
                    //         <td>{data.name}</td>
                    //     </tr>
                    //     <tr>
                    //         <td>temp</td>
                    //         <td>{(data.main?.temp - 273.15).toFixed(2)}</td>
                    //     </tr>
                    //     <tr>
                    //         <td>description</td>
                    //         <td>{data.weather[0].description}</td>
                    //     </tr>
                    //     <tr>
                    //         <td>country</td>
                    //         <td>{data.sys.country}</td>
                    //     </tr>
                    //     <tr>
                    //         <td>country</td>
                    //         <td>
                    //             <img src={"http://openweathermap.org/img/wn/" + (data.weather[0].icon) + "@2x.png"} alt="" />
                    //         </td>
                    //     </tr>
                    // </table>

                    <div class="weather-side">
                        <div class="weather-gradient"></div>
                        <div class="date-container">
                            <h2 class="date-dayname">{weekend}</h2><span class="date-day">{(Date().split(' ')[2])} {(Date().split(' ')[1])} {yaer}</span><i class="location-icon" data-feather="map-pin"></i><span class="location">{data.name}, {data.sys.country}</span>
                        </div>
                        <div class="weather-container"><img src={"http://openweathermap.org/img/wn/" + (data.weather[0].icon) + "@2x.png"} alt="" />
                            <h1 class="weather-temp">{(data.main?.temp - 273.15).toFixed(0)}°C</h1>
                            <h3 class="weather-desc">{data.weather[0].description}</h3>
                        </div>
                    </div>
            }

        </>
    );
}

export default Table;
