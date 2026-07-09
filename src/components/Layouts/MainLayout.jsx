import React from "react";

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <div className="min-h-screen bg-special-mainBg">
        {children}
      </div>
    </>
  );
}

export default MainLayout;
