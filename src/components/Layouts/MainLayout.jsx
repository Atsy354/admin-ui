import React, { useState } from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-special-mainBg">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute inset-y-0 left-0 z-20 w-64 flex-col justify-between bg-black px-6 py-8 text-white sm:relative sm:flex sm:w-64`}
      >
        <div>
          <div className="mb-8">
            <Logo variant="secondary" />
          </div>

          <nav className="space-y-2">
            <div className="flex cursor-pointer items-center rounded-md px-4 py-3 hover:bg-special-bg3">
              <div>O</div>
              <div className="ms-3">Overview</div>
            </div>

            <div className="flex cursor-pointer items-center rounded-md px-4 py-3 hover:bg-special-bg3">
              <div>B</div>
              <div className="ms-3">Balances</div>
            </div>

            <div className="flex cursor-pointer items-center rounded-md px-4 py-3 hover:bg-special-bg3">
              <div>T</div>
              <div className="ms-3">Transactions</div>
            </div>
          </nav>
        </div>

        <div>
          <div className="my-8 border-t border-special-bg"></div>

          <div className="flex cursor-pointer items-center rounded-md bg-special-bg3 px-4 py-3">
            <div>L</div>
            <div className="ms-3">Logout</div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
              A
            </div>

            <div className="flex-1">
              <div className="text-sm font-medium">Username</div>
              <div className="text-xs text-gray-300">View Profile</div>
            </div>

            <div>⚙️</div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-gray-03 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              className="text-xl sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

            <div>
              <div className="text-lg font-semibold text-defaultBlack">
                Username
              </div>

              <div className="text-xs text-gray-02">
                Friday, May 19 2023
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <NotificationsNoneIcon className="text-gray scale-110"
/>
            <div className="hidden w-44 sm:block">
              <Input placeholder="Search..." />
            </div>
          </div>
        </header>

        <main className="flex-1 bg-special-mainBg p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;