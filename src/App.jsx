import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ width: "100vh", height: "100 vh ", backgroundColor: color }}
    >
      <div className="fixed  flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className=" outline-none px-4 py-1 rounded-lg "
            style={{ backgroundColor: "red " }}
          >
            {" "}
            Red
          </button>
          <button
            onClick={() => {
              color;
            }}
            className=" outline-none px-4 py-1 rounded-lg "
            style={{ backgroundColor: "blue " }}
          >
            {" "}
            Blue
          </button>
          <button
            onClick={() => {
              color;
            }}
            className=" outline-none px-4 py-1 rounded-lg "
            style={{ backgroundColor: "pink " }}
          >
            {" "}
            pink
          </button>{" "}
          <button
            onClick={() => {
              color;
            }}
            className=" outline-none px-4 py-1 rounded-lg "
            style={{ backgroundColor: "black " }}
          >
            {" "}
            black
          </button>{" "}
          <button
            onClick={() => {
              color;
            }}
            className=" outline-none px-4 py-1 rounded-lg "
            style={{ backgroundColor: "brown  " }}
          >
            {" "}
            brown
          </button>{" "}
          <button
            onClick={() => {
              color;
            }}
            className=" outline-none px-4 py-1 rounded-lg "
            style={{ backgroundColor: "levender" }}
          >
            {" "}
            Levender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
