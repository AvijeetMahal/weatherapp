import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./home.module.css";

const Home = () => {
  let cities_in_india = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", 
    "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Chandigarh", "Bhopal", 
    "Vadodara", "New Delhi", "Visakhapatnam", "Faridabad", "Ludhiana", "Agra", "Madurai", 
    "Nashik", "Allahabad", "Ranchi", "Coimbatore", "Mysuru", "Jammu", "Patna", "Bhubaneswar", 
    "Rajkot", "Kochi", "Vijayawada", "Guwahati", "Noida", "Gurgaon", "Shivamogga", "Dehradun", 
    "Varanasi", "Srinagar", "Dhanbad", "Puducherry", "Amritsar", "Chandrapur", "Udaipur", "Jodhpur", 
    "Kolkata", "Raipur", "Bilaspur", "Shimla", "Bikaner", "Gaya", "Trichy", "Jabalpur", "Belgaum", 
    "Rourkela", "Mangalore", "Aurangabad", "Kochi", "Kurnool", "Tiruchirappalli", "Tirunelveli", 
    "Karimnagar", "Kottayam", "Aligarh", "Karnal", "Panaji", "Thane", "Khammam", "Solapur", 
    "Bhubaneswar", "Vijayawada", "Dibrugarh", "Pune", "Warangal", "Erode", "Gulbarga", "Siliguri", 
    "Meerut", "Kakinada", "Anantapur", "Bokaro", "Cuttack", "Chittorgarh", "Jammu", "Firozabad", 
    "Hosur", "Raigarh", "Kalyan", "Mathura", "Nanded", "Tirupati", "Udupi", "Alwar", "Navi Mumbai", 
    "Surat", "Durg", "Muzaffarpur", "Jamshedpur", "Bareilly", "Haridwar", "Haldwani", "Ambala", 
    "Gurugram", "Chandrapur", "Bhubaneswar", "Nagapattinam", "Kolkata", "Patiala", "Vasco Da Gama", 
    "Mysore", "Anantapur", "Jammu", "Shivpuri", "Hazaribagh", "Bhavnagar", "Akola", "Ratlam", 
    "Kolkata", "Bikaner", "Dewas", "Aligarh", "Kolkata", "Gorakhpur", "Saharanpur", "Kochi", 
    "Chandigarh", "Shivpuri", "Nagercoil", "Madhurai", "Vellore", "Pondicherry", "Rishikesh", 
    "Ajmer", "Bhilai", "Bhubaneshwar", "Ujjain", "Durg", "Chennai", "Khammam", "Udupi", "Ranchi", 
    "Ahmedabad", "Muzaffarpur", "Sangli", "Vishakhapatnam", "Bhopal", "Vishakapatnam", "Kanpur", 
    "Hyderabad", "Nagapattinam", "Shimoga", "Cuttack", "Solapur", "Navi Mumbai", "Kolhapur", 
    "Chidambaram", "Barmer", "Bardhaman", "Nanded", "Bhubaneswar", "Faridabad", "Sambalpur", 
    "Tirunelveli", "Tirupati", "Karur", "Erode", "Rajahmundry", "Bhavnagar", "Agra", "Jalgaon", 
    "Jhansi", "Moradabad", "Bhilwara", "Ambala", "Srinagar", "Roorkee", "Hisar", "Hoshiarpur", 
    "Pathankot", "Gurugram", "Meerut", "Bikaner", "Nagaur", "Durg", "Shirdi", "Belgaum", "Satara", 
    "Aizawl", "Siliguri", "Gulbarga", "Nellore", "Nizamabad", "Karwar", "Kottayam", "Pondicherry", 
    "Indore", "Ludhiana", "Nagaon", "Coimbatore", "Bilaspur", "Dhanbad", "Raipur", "Srinagar", 
    "Hazaribagh", "Gaya", "Yamunanagar", "Jammu", "Surendranagar", "Haridwar", "Sivakasi", "Nagpur", 
    "Tiruvannamalai", "Korba", "Hubli", "Tirunelveli", "Chittoor", "Tumkur", "Kolkata", "Cochin", 
    "Dibrugarh", "Navi Mumbai", "Karimnagar", "Anand", "Aligarh", "Panipat", "Firozabad", "Srinagar", 
    "Amravati", "Kota", "Ranchi", "Jamshedpur", "Solapur", "Chhindwara", "Rourkela", "Kozhikode", 
    "Kakinada", "Warangal", "Nagapattinam", "Rajkot", "Jabalpur", "Hindupur", "Kolkata", "Baran", 
    "Shahjahanpur", "Patiala", "Bhadrak", "Bhubaneshwar", "Sadar Bazar", "Bihar Sharif", "Hoshiarpur", 
    "Surat", "Shimla", "Ambala", "Nagpur", "Ahmednagar", "Solan", "Tezpur", "Mangalore", "Bhiwani", 
    "Bareilly", "Siliguri", "Tiruchirappalli", "Surat", "Akola", "Satna", "Bhubaneswar", "Vapi", 
    "Sadar Bazar", "Rewa", "Jabalpur", "Fatehpur", "Varanasi", "Sambalpur", "Amritsar", "Sonipat", 
    "Chandigarh", "Bhopal", "Gurugram", "Jammu", "Kolkata", "Nashik", "Ranchi", "Bhubaneswar", 
    "Bharuch", "Patna", "Dehradun", "Ujjain", "Sonipat", "Bhilai", "Sangli", "Aizawl", "Faridabad", 
    "Ambala", "Agartala", "Solapur", "Thane", "Indore", "Kochi", "Bikaner", "Tirupati", "Gwalior","puri","balasore","cuttack"
]
const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    if (!city) return alert("Please select a city!");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=faff52eae25e353681d6b31c3f2b8c7a`
    );

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setWeatherData(result); 
    } else {
      alert("City not found!");
    }
  };

  const weatherBackgrounds = {
    clear: styles.clear,
    cloudy: styles.cloudy,
    overcast: styles.cloudy,
    broken: styles.cloudy,
    rain: styles.rainy,
    light: styles.rainy,
    snow: styles.snowy,
    thunderstorm: styles.thunderstorm,
    haze: styles.haze,
    mist: styles.misty,
    fog: styles.misty
  };
  
  const getBackgroundClass = () => {
    if (!weatherData) return styles.defaultBackground;
  
    const description = weatherData.weather[0].description.toLowerCase();
    return weatherBackgrounds[description.split(" ")[0]] || styles.defaultBackground;
  };

  return (
    <div className={`${styles.container} `}>
      <Navbar />
      <div className={styles.weatherApp}>
        <form className={styles.form}>
          <input
            type="search"
            placeholder="Search for a city..."
            list="cities"
            className={styles.input}
            onChange={(e) => setCity(e.target.value)}
          />
          <datalist id="cities">
            {cities_in_india.map((ele, index) => (
              <option value={ele} key={index + 1} />
            ))}
          </datalist>
          <button type="button" className={styles.button} onClick={getWeather}>
            Get Weather
          </button>
        </form>

        {weatherData && (
          <div className={`${styles.card} ${getBackgroundClass()}`}>
            <h2 className={styles.cityName}>{weatherData.name}</h2>
   
            <p className={styles.date}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h1 className={styles.temp}>{Math.round(weatherData.main.temp)}°C</h1>
            <p className={styles.condition}>{weatherData.weather[0].description}</p>
            <p className={styles.range}>
              {Math.round(weatherData.main.temp_min)}°C / {Math.round(weatherData.main.temp_max)}°C
            </p>
            <div className={styles.iconContainer}>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
            <div className={styles.forecast}>
              <div>
                <p>Today</p>
                <p>{Math.round(weatherData.main.temp)}°C</p>
              </div>
              <div>
                <p>Friday</p>
                <p>{Math.round(weatherData.main.temp - 2)}°C</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>{Math.round(weatherData.main.temp + 2)}°C</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;