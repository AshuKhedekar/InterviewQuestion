import "../App.css";
import { useState } from "react";
export default function DivLeftRight() {
  const [position, setPosition] = useState("center");
  const handleLeftButton = () => {
    setPosition("left");
  };
  const handleRightButton = () => {
    setPosition("right");
  };
  return (
    <div>
      <button onClick={handleLeftButton}>Left</button>
      <button onClick={handleRightButton}>Right</button>
      <h4 style={{ textAlign: position }}>Hello World</h4>
    </div>
  );
}
