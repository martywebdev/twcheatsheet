import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const TWLayout = () => {
  const flex = useSelector((state) => state.flex.flexItems);
  const flextUtilities = useSelector(
    (state) => state.flexUtilities.flextUtilities
  );

  const [count, setCount] = useState([1, 2, 3, 4]);

  const handleCount = () => {
    const last = count.slice(-1)[0];

    if (last <= 8) {
      setCount((prev) => [...prev, last + 1]);
    }
  };

  const removeCount = () => {
    const last = count.slice(-1)[0];
    if (last > 1) {
      setCount(count.slice(0, -1));
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <div className="bg-red-200 container mx-auto px-4">
        <h3 className="text-lg font-semibold">Container</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus
        eum quod rem doloribus necessitatibus alias tenetur sed sequi temporibus
        voluptas iusto laudantium nobis quisquam provident fugit, incidunt
        aliquam dolores in blanditiis molestiae labore totam voluptatum? Quas
        quod ut pariatur quae. Eos ut doloribus sunt suscipit architecto
        doloremque ducimus laudantium?
      </div>

      

      <div className="mt-10">
        <h3 className="text-lg font-semibold">Flex</h3>
        <button className="rounded-lg border-2 py-2 px-3 text-lg mr-4" onClick={handleCount}>+</button>
        <button className="rounded-lg border-2 py-2 px-3 text-lg mr-4" onClick={removeCount}>-</button>
        <div className={`mt-10 flex ${flex} ${flextUtilities} flex-wrap-reverse`}>
          {count.map((item, idx) => {
            const bg = `bg-red-${item}00`;

            return (
              <div className={`${bg} text-white text-lg p-3`} key={idx}>
                {item}
              </div>
            );
          })}
          {/* <div className="bg-red-200 p-2">1</div>
          <div className="bg-green-200 p-2">2</div>
          <div className="bg-blue-200 p-2">3</div>
          <div className="bg-yellow-200 p-2">4</div> */}
        </div>
      </div>
    </>
  );
};

export default TWLayout;
