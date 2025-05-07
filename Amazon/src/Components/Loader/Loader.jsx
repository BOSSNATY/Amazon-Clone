import React from "react";
import { FadeLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        margin: "100px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50v",
      }}
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
