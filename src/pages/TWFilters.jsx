import { useState } from "react";
import Select from "../components/Select";
import { backdropBlurs, backdropBrightnessList, blurs, brightnessList, contrastList } from "../data/filters";


const TWFilters = () => {
  const [blur, setBlur] = useState("");
  const [brightness, setBrightness] = useState("");
  const [contrast, setContrast] = useState("");
  const [grayscale, setGrayScale] = useState("");
  const [backdrop, setBackdrop] = useState("");
  const [backdropBlur, setBackdropBlur] = useState("");

  return (
    <>
      <div className="container max-w-screen-sm h-auto mx-auto">
        <div className="flex gap-2">
          <Select options={blurs} handleChange={setBlur} label={"blur"} />
          <Select
            options={brightnessList}
            handleChange={setBrightness}
            label={"brightness"}
          />
          <Select
            options={contrastList}
            handleChange={setContrast}
            label={"contrast"}
          />
          <Select
            options={["grayscale-[0]", "grayscale"]}
            handleChange={setGrayScale}
            label={"grayscale"}
          />
        </div>
        <img
          src="/img/cyberpunk-sm.jpg"
          alt=""
          className={`w-full  h-full ${blur} ${brightness} ${contrast} ${grayscale}`}
        />
        <p className="bg-black text-white p-4 hover:invert border-2">
          check also invert, hue-rotate sepia and invert
        </p>
      </div>

      <div className="flex gap-2">
        <Select
          options={backdropBrightnessList}
          handleChange={setBackdrop}
          label={"brightness"}
        />

        <Select
          options={backdropBlurs}
          handleChange={setBackdropBlur}
          label={"blur"}
        />
      </div>
      <div
        className={`bg-[url('/img/backdrop2.jpg')] min-h-screen bg-cover bg-center flex justify-center items-center `}
      >
        <div className={`rounded-xl border bg-white/60 p-5 w-5/6 ${backdrop} ${backdropBlur}`}>
          <h3 className="text-3xl font-semibold mb-2">Backdrop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quisquam neque similique tempora est! Molestiae dolorum eius,
            eveniet possimus laudantium deserunt ratione nostrum, cupiditate
            natus eligendi illum? Soluta, quam deleniti.
          </p>
        </div>
      </div>
      <p className="bg-black text-white p-4 hover:invert border-2">
          check also use other options here! like backdrop-sepia backdrop-grayscale
        </p>
    </>
  );
};

export default TWFilters;
