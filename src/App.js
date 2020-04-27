import React, { useState } from "react";
import Pro from "./components/Pro";

const App = () => {
  const [pros, ] = useState([
    { id: 1 ,title: "a", price: 20 },
    { id: 2 ,title: "b", price: 30 },
    { id: 3 ,title: "c", price: 40 },
    { id: 4 ,title: "d", price: 50 }
  ]);

  return <Pro pros={pros} />;
};

export default App;
