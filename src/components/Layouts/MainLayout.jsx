import React from "react";
import Logo from "../Elements/Logo.jsx";

function MainLayout(props) {
  const { children } = props;

  return (
    <div className="flex min-h-screen bg-special-mainBg">
      <aside className="flex flex-col justify-between bg-black px-6 py-8 text-white">
        <div>
          <div className="mb-6">
            <Logo />
          </div>
          <nav className="mt-8 space-y-2">
            <div className="flex rounded-md px-4 py-3 text-white hover:bg-special-bg3 hover:text-white">
              <div className="mx-auto sm:mx-0">O</div>
              <div className="ms-3 hidden sm:block">Overview</div>
            </div>
            <div className="flex rounded-md px-4 py-3 text-white hover:bg-special-bg3 hover:text-white">
              <div className="mx-auto sm:mx-0">B</div>
              <div className="ms-3 hidden sm:block">Balances</div>
            </div>
            <div className="flex rounded-md px-4 py-3 text-white hover:bg-special-bg3 hover:text-white">
              <div className="mx-auto sm:mx-0">T</div>
              <div className="ms-3 hidden sm:block">Transactions</div>
            </div>
          </nav>
        </div>
        <div>
          <div className="border my-10 border-b-special-bg"></div>
          <div className="flex rounded-md bg-special-bg3 px-4 py-3 text-white">
            <div className="mx-auto sm:mx-0">L</div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
          <div className="flex items-center justify-between">
            <div>Avatar</div>
            <div className="hidden sm:block">
              Username
              <br />
              View Profile
            </div>
            <div className="hidden sm:block">icon</div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="border-b border-gray-03 bg-white">kanan atas</header>
        <main className="flex-1 bg-special-mainBg">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
