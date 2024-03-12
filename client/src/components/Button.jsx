import React from "react";

const Button = () => {


  const handlePostRequest = async () => {
    try {
      const response = await fetch("https://localhost:3000/api/buyPlayer", {
        method: "POST",
        headers: {
          "userId": "",
          "playerSeq": "application/json"
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("POST request successful:", data);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="font-sans
      bg-blue-400
      text-white rounded p-2 mx-auto mt-4
      hover:bg-indigo-400 text-3xl shadow-2xl"
        // onClick={handlePostRequest}
      >
        SELL
      </button>
    </div>
  );
};

export default Button;
