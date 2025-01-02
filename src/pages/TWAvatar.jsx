import React from "react";

const TWAvatar = () => {
  return (
    <>
      <h2 className="font-bold text-3xl text-center mb-3 ">Avatar</h2>
      <div className="center bg-gray-50 flex-col space-y-6">
        <div className="flex space-x-4 mb-5">
          <img
            src="/img/avatar/laura-jones.jpg"
            alt=""
            className="size-40 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-white border-2"
          />
          <img
            src="/img/avatar/unnamed.jpg"
            alt=""
            className="size-40 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-white border-2"
          />
          <img
            src="/img/avatar/laura-jones.jpg"
            alt=""
            className="size-40 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-white border-2"
          />
          <img
            src="/img/avatar/unnamed.jpg"
            alt=""
            className="size-40 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-white border-2"
          />
        </div>
        <div className="flex -space-x-4 mb-5">
          <img
            src="/img/avatar/laura-jones.jpg"
            alt=""
            className="size-20 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-2 hover:border-2 hover:border-white"
          />
          <img
            src="/img/avatar/unnamed.jpg"
            alt=""
            className="size-20 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-2 hover:border-2 hover:border-white"
          />
          <img
            src="/img/avatar/laura-jones.jpg"
            alt=""
            className="size-20 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-2 hover:border-2 hover:border-white"
          />
          <img
            src="/img/avatar/unnamed.jpg"
            alt=""
            className="size-20 bg-cover shadow-lg hover:scale-105 duration-300 rounded-full border-2 hover:border-2 hover:border-white"
          />
        </div>
        <div className="flex mb-3 space-x-3 text-gray-500 ">
          <img
            src="/img/avatar/unnamed.jpg"
            alt=""
            className="size-20 rounded-full"
          />
          <div className="flex flex-col self-center">
            <h2 className="font-bold">Marty Umlas</h2>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TWAvatar;
