import React, { useState } from "react";
import Logo from "../Elements/Logo.jsx";

function MainLayout(props) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-special-mainBg">
      <aside
        className={`${isOpen ? "flex" : "hidden"} absolute inset-y-0 left-0 z-10 flex-col justify-between bg-black px-6 py-8 text-white sm:relative sm:flex`}
      >
        <div>
          <div className="mb-6">
            <Logo />
          </div>
          <nav className="mt-8 space-y-2">
            <div className="flex rounded-md px-4 py-3 text-white hover:bg-special-bg3 hover:text-white">
              <div>O</div>
              <div className="ms-3">Overview</div>
            </div>
            <div className="flex rounded-md px-4 py-3 text-white hover:bg-special-bg3 hover:text-white">
              <div>B</div>
              <div className="ms-3">Balances</div>
            </div>
            <div className="flex rounded-md px-4 py-3 text-white hover:bg-special-bg3 hover:text-white">
              <div>T</div>
              <div className="ms-3">Transactions</div>
            </div>
          </nav>
        </div>
        <div>
          <div className="border my-10 border-b-special-bg"></div>
          <div className="flex rounded-md bg-special-bg3 px-4 py-3 text-white">
            <div>L</div>
            <div className="ms-3">Logout</div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="text-sm">Avatar</div>
            <div className="flex-1 text-xs leading-tight">
              <div>Username</div>
              <div className="text-gray-03">View Profile</div>
            </div>
            <div className="text-sm">icon</div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between border-b border-gray-03 bg-white px-6 py-4">
          <div className="flex items-baseline gap-3">
            <button
              className="sm:hidden self-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
            <span className="text-xl font-bold text-defaultBlack">Username</span>
            <span className="text-xs text-gray-02">May 19, 2023</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-02">Icon</span>
            <input
              type="text"
              className="hidden sm:block w-36 rounded-md border border-gray-05 bg-white px-3 py-1.5 text-sm outline-none"
            />
          </div>
        </header>
        <main className="flex-1 bg-special-mainBg p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;

