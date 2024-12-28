import { useState } from "react";
import Select from "../components/Select";
import {
  backdropBlurs,
  backdropBrightnessList,
  blurs,
  brightnessList,
  contrastList,
  filterValues,
  rotateValues,
  translateValues,
} from "../data/filters";
import Utilities from "../components/Utilities";

const TWFilters = () => {
  const [blur, setBlur] = useState("");
  const [brightness, setBrightness] = useState("");
  const [contrast, setContrast] = useState("");
  const [grayscale, setGrayScale] = useState("");
  const [backdrop, setBackdrop] = useState("");
  const [backdropBlur, setBackdropBlur] = useState("");
  const [scale, setScale] = useState("");
  const [rotate, setRotate] = useState("");
  const [translate, setTranslate] = useState('')

  return (
    <>
      <div className="container max-w-screen-sm h-auto mx-auto">
        <div className="flex gap-2">
          <Select
            isDark
            options={blurs}
            handleChange={setBlur}
            label={"blur"}
          />
          <Select
            isDark
            options={brightnessList}
            handleChange={setBrightness}
            label={"brightness"}
          />
          <Select
            isDark
            options={contrastList}
            handleChange={setContrast}
            label={"contrast"}
          />
          <Select
            isDark
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

      <div>
        <div className="flex gap-2">
          <Select
            isDark
            options={backdropBrightnessList}
            handleChange={setBackdrop}
            label={"brightness"}
          />

          <Select
            isDark
            options={backdropBlurs}
            handleChange={setBackdropBlur}
            label={"blur"}
          />
        </div>
        <div
          className={`bg-[url('/img/backdrop2.jpg')] min-h-screen bg-cover bg-center flex justify-center items-center `}
        >
          <div
            className={`rounded-xl border bg-white/60 p-5 w-5/6 ${backdrop} ${backdropBlur}`}
          >
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
          check also use other options here! like backdrop-sepia
          backdrop-grayscale
        </p>
      </div>

      <div>
        <div className="flex gap-2">
          <Utilities
            options={[" ", "scale", "scale-x", "scale-y"]}
            secondaryOptions={filterValues}
            handleChange={setScale}
            label={"scale"}
            isDark
          />
          <Select
            options={rotateValues}
            handleChange={setRotate}
            label={"rotate"}
            isDark
          />

          <Utilities
            options={[" ", "translate-x", "translate-y"]}
            secondaryOptions={translateValues}
            handleChange={setTranslate}
            label={"translate"}
            isDark
          />
        </div>

        <div className="container max-w-screen-sm h-auto mx-auto  border-8">
          <img
            src="/img/cyberpunk-small.jpg"
            alt=""
            className={`h-[600px] w-full ${scale} ${rotate} ${translate}`}
          />
        </div>
        <p className="bg-black text-white p-4 hover:invert border-2">
          check also use other options here! like skew transform origin
        </p>
      </div>
    </>
  );
};

export default TWFilters;
