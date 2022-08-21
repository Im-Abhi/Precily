import React from "react";
import Loading from "./Loading";

const Right = ({ data, loading }) => {
  return (
    <div className="h-full py-4 px-6 text-[#116530]">
      {data && !loading ? (
        <div className="flex items-center w-full h-full">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">
              Name: <span className="font-normal">{data.name}</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Description: <span className="font-normal">{data.description}</span>
            </h3>
          </div>
        </div>
      ) : (
        <h1>{loading ? <Loading /> : "No user Selected"}</h1>
      )}
    </div>
  );
};

export default Right;
