import clsx from "clsx";
import React from "react";

const Chat = () => {
  const avatars = [
    {
      name: "Laura",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minus.",
      read: false,
        img: "/img/avatar/laura-jones.jpg",
    },
    {
      name: "Koolpals",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      read: true,
      img: "/img/avatar/unnamed.jpg",
    },
    {
      name: "Macario",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      read: true,
      img: "/img/cyberpunk-sm.jpg",
    },
    {
      name: "Topacio",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      read: false,
      img: "/img/cyberpunk2.jpg",
    },
    {
      name: "Miguelito",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      read: false,
      img: "/img/backdrop.jpg",
    },
    {
      name: "Kasmot",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      read: false,
      img: "/img/backdrop2.jpg",
    },
    {
      name: "Tiburcio",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      read: true,
      img: "/img/backdrop2.jpg",
    },
  ];
  return (
    <>
      <div className="text-3xl font-bold">CHAT UI</div>

      <div className="flex min-h-screen flex-col items-center justify-center space-y-10 bg-gray-200 md:flex-row md:space-x-10 md:space-y-0 py-2"> 
        <div className="flex w-[400px] flex-col rounded-xl bg-white shadow-xl">
          <section
            id="top1"
            className="mb-5 flex h-[70px] items-center justify-between p-3 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/img/avatar/laura-jones.jpg"
                alt=""
                className="size-10 rounded-full"
              />
              <div className="font-bold">Inbox</div>
            </div>
            <div className="rounded-full bg-gray-300 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </div>
          </section>
          <section id="body1">
            <div className="mx-2 my-5 flex items-center justify-center rounded-3xl bg-gray-200 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                className="w-full border-0 bg-transparent p-1 outline-0"
              />
            </div>
            <div className="mb-7 ml-3 flex items-center space-x-3 overflow-hidden">
              <div className="my-3 flex size-10 flex-shrink-0 items-center rounded-full bg-gray-300 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              {avatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="group relative my-3 shrink-0 rounded-full bg-gray-300 p-1"
                >
                  <img
                    src={avatar.img}
                    className="size-10 rounded-full border border-white"
                  />
                  <div className="absolute bottom-1 right-0 size-3 rounded-full bg-green-500 p-1 group-hover:animate-pulse"></div>
                </div>
              ))}
            </div>

            <div className="flex h-[420px] flex-col space-y-1 overflow-y-scroll">
              {avatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="mb-5 flex items-center justify-between p-3 duration-100 hover:rounded-l-2xl hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={avatar.img}
                      alt=""
                      className="size-10 flex-shrink-0 rounded-full"
                    />
                    <div>
                      <div className="font-bold">{avatar.name}</div>
                      <div className={clsx('line-clamp-1', !avatar.read && 'font-bold')}>{avatar.message}</div>
                    </div>
                  </div>
                  <div className="font-bold">10AM</div>
                </div>
              ))}
            </div>
          </section>
          <section
            id="footer1"
            className="px-5 flex items-center justify-between border border-t py-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </section>
        </div>
        <div>card 2</div>
      </div>
    </>
  );
};

export default Chat;
