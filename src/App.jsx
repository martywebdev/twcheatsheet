import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [twclass, setTwclass] = useState("");
  const [hover, setHover] = useState(false)

  
  return (
    <>
      <Input handleTwClasses={setTwclass} />

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" onChange={() => setHover(!hover)} />
          <span className="text-sm">Hover</span>
        </label>
      </div>

     {hover && <Input handleTwClasses={setTwclass} hover/>}

      <div className={`${twclass} overflow-clip`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        molestias sapiente cupiditate quidem! Recusandae illo dolores,
        repellendus molestias voluptatibus reiciendis dolorem aut magni aliquam
        consequuntur accusamus et nesciunt. Facilis, porro?
      </div>
    </>
  );
}

export default App;
