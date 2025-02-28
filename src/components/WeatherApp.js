'use client'
import axios from "axios";
import { Sun, Waves, WindArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import clear from "@/components/WeatherImage/clear.png"
import cloud from "@/components/WeatherImage/cloud.png"
import drizzle from "@/components/WeatherImage/drizzle.png"
import humidity from "@/components/WeatherImage/humidity.png"
import rain from "@/components/WeatherImage/rain.png"
import snow from "@/components/WeatherImage/snow.png"
import wind from "@/components/WeatherImage/wind.png"
import search from "@/components/WeatherImage/search.png"
import Image from "next/image";


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState("");
    const allIcon={
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "010d": rain,
        "010n": rain,
        "013d": snow,
        "013n": snow,
    }

    async function fetchApi() {
        // if(weatherData == "" ){
        //     alert("Enter city name");
        // }

        try {
            
            const apiKey = "c7a0b368578a17b4a4ac7b792b8807a8"
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&units=metric&appid=${apiKey}`

            const response = await axios(apiUrl);
       
            // const icon= allIcon[response.data.weather[0].icon];
            // const icon = allIcon;
        
            setWeatherData({
                humidity: response.data.main.humidity,
                location: response.data.name,
                windSpeed: response.data.wind.speed,
                icon: allIcon[response.data.weather[0].icon],
                temperature: Math.floor(response.data.main.temp),
                description: response.data.weather[0].description,


            });
      
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.message);

        }
    }
   function searchButton(e){
     setWeatherData(e.target.value);
   }
    useEffect(() => {
        fetchApi();
        
    }, [])


    //   const getWeatherIcon = (condition) => {
    //     if (condition.includes("Cloud")) return <WiCloudy size={80} />;
    //     if (condition.includes("Rain")) return <WiRain size={80} />;
    //     if (condition.includes("Snow")) return <WiSnow size={80} />;
    //     return <WiDaySunny size={80} />;
    //   };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-blue-200 p-6">
            <div className="bg-white shadow-lg rounded-lg px-4 py-3 max-w-md w-full text-center">
                <h1 className="text-2xl font-Nunito-ExtraBold mb-4">Weather App</h1>
                <div className="flex space-x-2 mb-4 px-2 py-2">
                    <input
                        type="text"
                        placeholder="Enter city"
                        onChange={searchButton}

                        className="w-full px-4 py-2 border font-Nunito-Bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={fetchApi}
                        className="bg-blue-500 text-white px-4 py-2 font-Nunito-Bold rounded-lg hover:bg-blue-600"
                    >
                        Search
                    </button>
                </div>
                <h2 className="text-2xl  font-Nunito-Bold mt-2">{weatherData.location || "Empty"}</h2>
                <div className=" flex justify-center items-center w-full my-1 ">
                    <Image src={weatherData.icon || clear} alt="weatherImage" height={90} width={90}></Image>   
                
                    {/* <Sun className="h-8 w-8 text-yellow-500" /> */}
                </div>

                <div className="px-2 py-2">
              
                    <p className="text-3xl font-Nunito-Bold ">{weatherData.temperature}°C</p>
                    <p className="font-Nunito-Bold min-h-4">{weatherData.description}</p>
                   
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                           <Waves />
                            <div>
                                <p className="font-Nunito-Bold">{weatherData.humidity}%</p>
                                <p className="font-Nunito-Bold">Humidity</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <WindArrowDown />
                            <div>
                                <p className="font-Nunito-Bold">{weatherData.windSpeed}km/h</p>
                                <p className="font-Nunito-Bold">Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherApp;
