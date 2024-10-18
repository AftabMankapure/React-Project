import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-2xl ">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "green" }}
          >
            {" "}
            Green
          </button>

          <button
            onClick={() => setColor("DeepPink")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "DeepPink" }}
          >
            DeepPink
          </button>

          <button
            onClick={() => setColor("BlueViolet")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "BlueViolet" }}
          >
            BlueViolet
          </button>

          <button
            onClick={() => setColor("Fuchsia")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "Fuchsia" }}
          >
            Fuchsia
          </button>

          <button
            onClick={() => setColor("olive")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("Aqua")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "Aqua" }}
          >
            Aqua
          </button>

          <button
            onClick={() => setColor("SandyBrown")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "SandyBrown" }}
          >
            SandyBrown
          </button>

          <button
            onClick={() => setColor("Purple")}
            className=" outline-none px-4 py-1  rounded-full shadow-lg text-white "
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
