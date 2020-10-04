import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState({});
  useEffect(() => {
    (async () => {
      let url = await fetch(`.netlify/functions/hello`);
      let data = await url.json();
      setstate(data);
    })();
  }, []);
  return <div className="App">hello world {state.message}</div>;
}

export default App;
