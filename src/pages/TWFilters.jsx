import { useState } from "react";
import Select from "../components/Select";
const blurs = [
  "blur-none",
  "blur-sm",
  "blur-md",
  "blur-lg",
  "blur-xl",
  "blur-2xl",
  "blur-3xl",
];

const backdropBlurs = [
  "backdrop-blur-none",
  "backdrop-blur-sm",
  "backdrop-blur-md",
  "backdrop-blur-lg",
  "backdrop-blur-xl",
  "backdrop-blur-2xl",
  "backdrop-blur-3xl",
];

const brightnessList = [
  "",
  "brightness-0",
  "brightness-50",
  "brightness-70",
  "brightness-90",
  "brightness-95",
  "brightness-100",
  "brightness-105",
  "brightness-125",
  "brightness-150",
  "brightness-200",
];

const backdropBrightnessList = [
  "",
  "backdrop-brightness-0",
  "backdrop-brightness-50",
  "backdrop-brightness-70",
  "backdrop-brightness-90",
  "backdrop-brightness-95",
  "backdrop-brightness-100",
  "backdrop-brightness-105",
  "backdrop-brightness-125",
  "backdrop-brightness-150",
  "backdrop-brightness-200",
];
const contrastList = [
  "contrast-more",
  "contrast-less",
  "contrast-0",
  "contrast-50",
  "contrast-75",
  "contrast-100",
  "contrast-125",
  "contrast-150",
  "contrast-200",
];

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
