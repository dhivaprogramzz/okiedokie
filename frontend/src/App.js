//import './App.css';

import React,{ useEffect,useState } from "react";

function App() {
  const [message,setMessage]=useState("");

  useEffect(()=> {
    fetch("http://127.0.0.1:5000/api/hello")
    .then((res) =>res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => console.error(err));
  },[]);
  return (
    <div className="App">
      <h1>Hello from Okiedokie Frontend!</h1>
       <p>{message}</p> {/*displays the backend message here */}
    </div>
  );
}

export default App;
