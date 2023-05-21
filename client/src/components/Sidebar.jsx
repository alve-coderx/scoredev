import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "../utils/links";
import { NavLink } from "react-router-dom";
import callus from "../assets/callus.PNG";
import SearchInput from "./Form/SearchInput";

const Sidebar = ({ setSidebar, sidebar }) => {
  return (
    <Transition.Root show={sidebar} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setSidebar}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-sm pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex p-2  h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div>
                      <div className="flex items-center justify-end ">
                        <button
                          type="button"
                          className="bg-secondary rounded-full p-2"
                          onClick={() => setSidebar(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <AiOutlineClose
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className="flex  flex-col my-10">
                        {links.map((item) => (
                          <NavLink
                            className="border-b w-full py-5 text-lg font-[500]"
                            to={item.href}
                            key={item.name}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                      <SearchInput />
                      <img
                        src={callus}
                        alt="callus"
                        className="lg:w-58 w-40 "
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;
