import React from "react";

type Props = {};

const MobileNavBar = (props: Props) => {
  return (
    <ul className=" absolute w-full z-10 border border-slate-300  bg-white flex items-center  flex-col  py-2 md:flex-row md:space-x-8 text-[0.9rem] md:mt-0 md:text-sm md:font-medium lg:hidden">
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b  border-gray-100 text-[0.9rem] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          aria-current="page"
        >
          Visit Our Website
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-[0.9rem] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Download Company Profile
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-[0.9rem] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Download Proposal Summary
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-[0.9rem] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Download Detailed Proposal
        </a>
      </li>
    </ul>
  );
};

export default MobileNavBar;
