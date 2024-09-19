"use client";
import { useState } from "react";
import clsx from "clsx";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className="flex flex-col gap-1 transition-all duration-500 ease-in-out"
      onClick={handleToggle}
    >
      <input id="toggleChecker" type="checkbox" />
      <label id="togglerLable" htmlFor="toggleChecker">
        <div className="checkboxtoggler">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </label>
    </button>
  );
};

export default Hamburger;
