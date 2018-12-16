import React from "react";
import Option from "./Option";

const OptionsList = ({ options, handleRemoveAll, singleOptionRemoval }) => {
  return (
    <div>
      <div className="widget-header">
        <h2 className="widget-header__title">Option List</h2>
        <button className="sm-button sm-button--link" onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
      {options.length > 0 ? (
        <div>
          {options.length === 1 ? (
            <p className="widget__message">
              There is {options.length} option in the list
            </p>
          ) : (
            <p className="widget__message">
              There are {options.length} options in the list
            </p>
          )}
        </div>
      ) : (
        <p className="widget__message">
          There are {options.length} options in the list
        </p>
      )}
      {options.map((option, i) => {
        return (
          <Option
            key={i}
            optionId={i}
            option={option}
            count={i + 1}
            singleOptionRemoval={singleOptionRemoval}
          />
        );
      })}
    </div>
  );
};

export default OptionsList;
