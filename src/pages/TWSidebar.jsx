const TWSidebar = () => {
  return (
    <>
      <div className="flex min-h-screen bg-blue-50">
        <div className="bg-[url('/img/backdrop.jpg')] bg-cover">
          <div className="min-h-screen bg-blue-300/60 backdrop-blur-lg md:w-64">
            <section
              id="animation"
              className="mx-5 flex flex-col items-center justify-center space-y-4 py-7 md:flex-row md:justify-start md:space-x-4 md:space-y-0"
            >
              <div className="size-4 animate-pulse rounded-full bg-green-200"></div>
              <div className="size-8 rounded-full bg-orange-200"></div>
              <div className="size-4 animate-bounce rounded-full bg-red-200"></div>
            </section>
            <section
              id="profile"
              className="mx-2 mt-7 flex items-center justify-center -space-x-2"
            >
              <div className="z-20">
                <img
                  src="/img/cyberpunk.jpg"
                  alt=""
                  className="size-16 rounded-full border-2 border-white"
                />
              </div>
              <div className="bg-gradient-to-l from-transparent to-white pl-4 hidden md:block text-sm tracking-wide">
                <h3>Emanual Bakere</h3>
                <h3>Admin</h3>
              </div>
            </section>

            <div className="border-b border-cyan-100/50 my-5 w-10/12 mx-auto "></div>
            <section id="menu">
              <div>Menu</div>
              <button>Settings</button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TWSidebar;
