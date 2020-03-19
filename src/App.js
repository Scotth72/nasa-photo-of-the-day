import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Photocards from "./componments/Photocards";

function App() {
  const [pic, setPic] = useState([])
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DGbNkI6srem2I3Em3svwRVdLuYUlHxhaBztkj0pU')
    .then(response =>{
      console.log("NasaCard.data", response.data)
      setPic(response.data)
    })
    .catch(error => {
      console.log("Did not receive data", error)
    })
  }, [])
  return (
    <div className="App">
      {pic.map(item => {
        return (
          <Photocards/>
        )
      })}
      
    </div>
  );
}

export default App;
