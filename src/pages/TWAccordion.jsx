import React, { useState } from "react";

const TWAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { title: "Question 1", content: "Answer for Question 1." },
    { title: "Question 2", content: "Answer for Question 2." },
    { title: "Question 3", content: "Answer for Question 3." },
  ];

  return (
    <div className="w-[500px] rounded-xl border bg-white p-5 duration-500 md:w-[700px]">
      {questions.map((q, index) => (
        <div
          key={index}
          className="flex cursor-pointer flex-col rounded-lg border-b p-3 hover:bg-zinc-100"
          onClick={() => toggleAccordion(index)}
        >
          {/* Question text and icon */}
          <div className="group flex items-center justify-between">
            <h3 className="font-bold">{q.title}</h3>
            <div className="group-hover:bg-gray-500 group-hover:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`size-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {/* Accordion content */}
          <div
            className={`p-3 rounded-b-lg mt-2 transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {q.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TWAccordion;
