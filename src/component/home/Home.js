import React from "react";
import sum from "../sum";

const Home = () => {
  return (
    <>
    <h2>Testing here</h2>
      <div className="body">  
        <p>sum of A + B = {sum(4, 6)}</p>
      </div>
    </>
  );
};

export default Home;
