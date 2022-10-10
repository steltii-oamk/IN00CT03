import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [lat, setLat] = useState(0)
const [lng, setLng] = useState(0)
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false)
      }, (error) => {
        alert(error);
      })
    } else {
      alert("Your browser doesn't support gps location!!!!")
    }
  }, [])

  if (isLoading) {
    return <p>Loading location...</p>
  } else {
    return (
      <div>
        <h3>Your geographical location:</h3>
        <p>
          Position:
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
      </div>
    );
  }
}

export default App;