import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="h-64 flex flex-col justify-between bg-gray-100 p-5 rounded-lg 
                 border border-gray-300 shadow-sm
                 transition-all duration-300
                 hover:shadow-md hover:border-black hover:bg-gray-200"
    >
      
      {/* TITLE */}
      <h2 className="text-lg font-semibold text-center text-gray-800 line-clamp-2">
        {title}
      </h2>

      {/* BODY */}
      <p className="text-base text-center text-gray-600 line-clamp-3 mt-2">
        {body}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => setClicked(true)}
        className="w-full py-2 text-sm rounded-md text-white transition-all duration-300"
        style={{
          backgroundColor: clicked ? "#ea3a1f" : "#6b7280",
        }}
        onMouseOver={(e) => {
          if (clicked) e.currentTarget.style.backgroundColor = "#c92f18";
        }}
        onMouseOut={(e) => {
          if (clicked) e.currentTarget.style.backgroundColor = "#ea3a1f";
        }}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;