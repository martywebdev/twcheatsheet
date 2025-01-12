import clsx from "clsx";
import React from "react";
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
const Message = () => {
  return (
    <div className="flex w-[400px] flex-col rounded-xl bg-white shadow-xl">
      <section className="mb-5 flex h-[70px] justify-between p-3 shadow-lg">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <h3 className="font-black text-slate-700">Jarson</h3>
        </div>
        <div className="flex items-center space-x-3 text-blue-700">
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
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
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
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
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </section>
      <section className="mx-5 flex flex-col space-y-3">
        {/* sender */}
        <div className="mb-3">
          <h4 className="mb-2 text-center text-gray-500">10:00PM</h4>
          <div className="flex space-x-3">
            <img
              src="/img/avatar/laura-jones.jpg"
              alt=""
              className="size-10 rounded-full"
            />
            <p className="rounded-b-lg rounded-tr-lg bg-blue-700 p-2 text-white">
              Hello There! are you in the office yet?
            </p>
          </div>
        </div>
        {/* response */}
        <div className="mb-3">
          <h4 className="mb-2 text-center text-gray-500">10:00PM</h4>
          <div className="flex justify-end space-x-3">
            <p className="rounded-b-lg rounded-tr-lg bg-blue-700 p-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-2 text-center text-gray-500">10:04PM</h4>
          <div className="flex justify-end space-x-3">
            <p className="rounded-b-lg rounded-tr-lg bg-blue-700 p-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit labore exercitationem quaerat provident, temporibus
              est earum, delectus dolorem vel odit laboriosam officia beatae
              quae eum quia distinctio error neque veniam?
            </p>
          </div>
        </div>
        {/* sender */}
        <div className="mb-3">
          <h4 className="mb-2 text-center text-gray-500">10:00PM</h4>
          <div className="flex space-x-3">
            <img
              src="/img/avatar/laura-jones.jpg"
              alt=""
              className="size-10 rounded-full"
            />
            <p className="rounded-b-lg rounded-tr-lg bg-blue-700 p-2 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              distinctio ut ratione.
            </p>
          </div>
        </div>

        {/* typing */}
        <div className="mb-3 flex items-start space-x-2">
          <img
            src="/img/avatar/laura-jones.jpg"
            alt=""
            className="size-10 rounded-full"
          />
          <div className="flex items-center justify-start space-x-3 rounded-xl bg-gray-200 p-2">
            <div className="size-2 rounded-full bg-gray-300 p-1"></div>
            <div className="size-2 rounded-full bg-gray-400 p-1"></div>
            <div className="size-2 rounded-full bg-gray-300 p-1"></div>
          </div>
        </div>
      </section>
      <section className="m-7">
        <div className="flex w-full rounded-xl bg-gray-200 p-2">
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
              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
            />
          </svg>
          <input
            type="text"
            className="w-full bg-transparent px-2 outline-0"
            placeholder="type a message"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};
const Chat = () => {
  return (
    <>
      <div className="text-3xl font-bold">CHAT UI</div>

      <div className="flex min-h-screen flex-col items-center justify-center space-y-10 bg-gray-200 py-2 md:flex-row md:space-x-10 md:space-y-0">
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
                      <div
                        className={clsx(
                          "line-clamp-1",
                          !avatar.read && "font-bold",
                        )}
                      >
                        {avatar.message}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold">10AM</div>
                </div>
              ))}
            </div>
          </section>
          <section
            id="footer1"
            className="flex items-center justify-between border border-t px-5 py-3"
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
        <Message />
      </div>
    </>
  );
};

export default Chat;
