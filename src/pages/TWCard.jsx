const TWCard = () => {
  return (
    <div className="my-4">
      <div className="w-[450px] rounded-lg border shadow-lg">
        <img
          src="/img/backdrop.jpg"
          alt=""
          className="h-64 w-full rounded-t-lg"
        />
        <div className="p-7">
          <h2 className="text-3xl font-semibold">Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            dolore consectetur. Repellendus, quibusdam officiis. Illum, vitae
            autem pariatur, possimus ipsam praesentium ipsum alias enim, numquam
            necessitatibus tempora ut provident veniam. Minima in neque,
            dignissimos nulla nisi culpa corporis fugit amet eum at ducimus,
            placeat iste possimus laudantium quae repudiandae! Quae illo
            temporibus ducimus dolores illum quaerat voluptatibus hic a alias.
          </p>
        </div>

        <div className="mx-2 mb-7 flex space-x-4">
          <button className="mx-3 w-full rounded bg-orange-500 px-5 py-2 font-bold text-white shadow-lg hover:bg-orange-700">
            Submit
          </button>
          <button className="mx-3 w-full rounded border border-orange-500 px-5 py-2 font-bold text-black shadow-lg hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>

      <div className="mt-4 w-[450px] rounded-lg border bg-gray-100 p-3 shadow-lg">
        <section className="relative mb-2 rounded bg-purple-500 p-3 text-white">
          $45/hour
          <div className="absolute -top-1 right-0 size-7 rounded-l border-b-8 border-l-8 bg-purple-300"></div>
        </section>
        <section className="flex flex-col justify-center space-y-4 rounded-br-lg rounded-tl-lg bg-purple-500 px-5 py-4">
          <div className="relative size-60 self-center">
            <img
              src="/img/cyberpunk.jpg"
              alt=""
              className="absolute inset-0 z-10 h-full w-full rounded-full border-4"
            />

            <div className="absolute inset-0 z-20 overflow-clip rounded-full border-4 border-fuchsia-100 bg-transparent">
              <div className="absolute bottom-5 h-10 w-full bg-white bg-opacity-70 p-3 text-center font-bold">
                Kolokoy Sta Ines
              </div>
            </div>
          </div>
        </section>

        <section className="my-3 rounded bg-white p-5">
          <h3 className="text-xl font-bold tracking-wider">Senior Developer</h3>
          <p className="text-sm uppercase">Corporate Office</p>
          <div className="mt-7 flex items-center justify-between px-4">
            <div className="text-sm">
              <p>Experience - 3 years</p>
              <p>Joined January 8 2025</p>
            </div>
            <div>ICON HERE</div>
          </div>
        </section>
      </div>

      <div className="mt-4 flex w-[450px] flex-col items-center justify-around rounded-3xl bg-sky-950 p-5">
        <section className="flex w-full items-center justify-between space-x-7">
          <div className="flex w-full items-center rounded-lg border border-gray-400/50 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              className="ml-2 w-full bg-transparent text-gray-300 outline-none placeholder:text-sm placeholder:text-gray-500"
              placeholder="search"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-cyan-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-cyan-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </section>
        <section className="my-7 w-full rounded-xl bg-indigo-700/50 p-4">
          <div className="flex justify-between p-2">
            <div className="flex items-center space-x-4">
              <img
                src="/img/cyberpunk.jpg"
                alt=""
                className="size-20 rounded-xl"
              />
              <div className="font-bold uppercase tracking-wide text-cyan-50">
                <h4>Sandra</h4>
                <h4>Mandy</h4>
                <div className="relative mt-2 flex">
                  <button className="rounded-l-lg bg-cyan-100 px-1.5 text-sm font-semibold text-cyan-900">
                    Level
                  </button>
                  <button className="rounded-r-lg bg-blue-400 px-1.5 text-sm font-semibold text-white">
                    2
                  </button>
                </div>
              </div>
            </div>

            <div className="hover:scale-95 duration-300">
              <div className="rounded-lg border border-cyan-50 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-cyan-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="my-7 flex justify-center space-x-7 text-cyan-50">
            <div className="rounded-lg p-2 text-center text-xl hover:bg-cyan-800/50">
              <h3 className="">12,039</h3>
              <h3 className="">Followers</h3>
            </div>
            <div className="rounded-lg p-2 text-center text-xl hover:bg-cyan-800/50">
              <h3 className="">28</h3>
              <h3 className="">Following</h3>
            </div>
            <div className="rounded-lg p-2 text-center text-xl hover:bg-cyan-800/50">
              <h3 className="">40</h3>
              <h3 className="">Connections</h3>
            </div>
          </div>

          <div className="flex space-x-3 my-5">
            <button className="border border-gray-400/70 rounded-xl py-3 w-full text-cyan-50 text-sm hover:-translate-y-1 duration-300">Following Suggestions</button>
            <button className="border border-gray-400/70 rounded-xl py-3 w-full text-cyan-50 text-sm hover:-translate-y-1 duration-300">Freelancing Project</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TWCard;
