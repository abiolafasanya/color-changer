import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [background, setBackground] = useState("#ffffff");
  function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBackground("#" + randomColor);
  }
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: background }}>
        <h2>Background Color: {background}</h2>
        <button onClick={generateRandomColor}>Change Color</button>
      </main>
    </div>
  );
}

export default App;
