import React from "react";

const TWFooter = () => {
  return (
    <>
      <div id="main" className="min-h-screen bg-zinc-700">
        <nav className="flex justify-between bg-cyan-100 p-5 shadow-xl">
          <div>Logo</div>
          <div>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
        <main className="flex h-screen items-center justify-center bg-white">
          Main
        </main>
        <footer className="border-t bg-white">
          <section
            id="footer"
            className="flex flex-col space-y-5 p-5 lg:flex-row lg:justify-between"
          >
            <div className="basis-2/5">
              <h3 className="mt-5 text-xl font-bold uppercase">Sales</h3>
              <p className="mt-4 text-sm leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nobis ducimus atque officia, sunt iusto ipsam impedit
                dolor autem assumenda tenetur unde facere quaerat sint
                distinctio in eum iste veniam.
              </p>
            </div>
            <div className="flex flex-col space-y-10 md:flex-grow md:flex-row md:justify-between md:space-y-0">
              <ul className="space-y-4 text-sm">
                <h3 className="font-bold uppercase">Company</h3>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
              <ul className="space-y-4 text-sm">
                <h3 className="font-bold uppercase">Help</h3>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
              <ul className="space-y-4 text-sm">
                <h3 className="font-bold uppercase">Resources</h3>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
          </section>
          <section id="copyright">
            <div className="mx-auto my-5 w-11/12 border-t">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 p-3 md:space-y-0">
                <div>&copy; Copyright 2025. All Rights Reserved</div>
                <img
                  className="w-72"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/1/payment-methods.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default TWFooter;
