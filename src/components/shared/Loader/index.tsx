import { Spin } from "antd";
import React from "react";

interface ILoader {
  className?: string;
}

const Loader: React.FC<ILoader> = ({ className }) => {
  return (
    <div
      className={`flex justify-center items-center w-full ${
        className ?? "loader"
      }`}
    >
      <Spin />
    </div>
  );
};

export default Loader;
