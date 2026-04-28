import React, { useState } from "react";

function PostCard(props) {
  const { id, title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="
        flex flex-col justify-between
        bg-white p-5 rounded-lg shadow
        transition-all duration-300
        hover:scale-105
        hover:border hover:border-black
        hover:bg-red-100
        h-72
      "
    >
      <h2 className="text-lg font-bold text-center text-gray-800">
        {title}
      </h2>

      <p className="text-sm text-center text-gray-600 mt-3 flex-grow">
        {body}
      </p>

      <button
        onClick={() => setClicked(true)}
        className="mt-4 p-2 rounded-md text-white transition-all duration-300"
        style={{
          backgroundColor: clicked ? "#b83016" : "#6b7280"
        }}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;