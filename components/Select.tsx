import React from "react";
import { Listbox, Transition } from "@headlessui/react";
const Selector = () => (
  <svg
    fill="#000000"
    height="10px"
    width="14px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        id="XMLID_225_"
        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
      ></path>{" "}
    </g>
  </svg>
);

const Selected = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    />
  </svg>
);

export const Select = ({
  /* label, */
  options,
  selectedOption,
  handelChange,
}: any) => {
  return (
    <Listbox
      as="div"
      className="w-5 absolute px-[15px]"
      //className={className}
      value={selectedOption}
      onChange={(event) => {
        console.log("enfant", event);
        handelChange(event);
      }}
    >
      {({ open }) => (
        <>
          {/*label && (
              <Listbox.Label className="mb-1 text-sm font-medium text-blue-gray-500">
                {label}
              </Listbox.Label>
            )*/}
          <div className="relative mt-1">
            <span className="inline-block w-full rounded-md shadow-sm">
              <Listbox.Button className="w-[100px] cursor-default relative bg-transparent pl-3 pr-3 py-2 text-left  transition ease-in-out duration-150">
                <span className="block truncate">
                  {selectedOption.flag} {selectedOption.dial_code}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Selector />
                </span>
              </Listbox.Button>
            </span>
            <div className="absolute z-[100] mt-1 bg-white rounded-md shadow-lg mb-11">
              {/* bottom-0 will open the select menu up & mb-11 will put the dropup above the select option */}
              <Transition
                show={open}
                leave="transition duration-100 ease-in"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <Listbox.Options
                  static
                  className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {options.map((option: any) => {
                    return (
                      <Listbox.Option
                        as={React.Fragment}
                        key={option.code}
                        value={option}
                      >
                        {({ active, selected }) => {
                          return (
                            <li
                              className={`${
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900"
                              } cursor-default select-none relative py-2 pl-3 pr-9`}
                            >
                              <div className="flex items-center">
                                <span
                                  className={`${
                                    selected ? "font-semibold" : "font-normal"
                                  } flex items-center block truncate`}
                                >
                                  {option.name}
                                </span>
                                {selected && (
                                  <span
                                    className={`${
                                      active ? "text-white" : "text-indigo-600"
                                    } absolute inset-y-0 right-0 flex items-center mr-3 pl-1.5`}
                                  >
                                    <Selected />
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        }}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
};
