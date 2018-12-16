import React from "react";

const Decision = ({ handlePick, hasOption }) => {
  return (
    <div>
      <button className="lg-button" onClick={handlePick} disabled={!hasOption}>
        What Should I Do?
      </button>
    </div>
  );
};

export default Decision;
