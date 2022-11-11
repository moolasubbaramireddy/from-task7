import React from "react";

const Registeration = () => {
  return (
    <>
      <div className="hide-screen Resisteration-bg bg-slate-300 ">
        <div className=" pt-10">
          <div className="text-center  text-2xl font-semibold">
            <h1 className="">Registeration</h1>
          </div>
          <br />
          <div className="flex ml-7">
            <div>
              <div>
                <p className="bg-amber-400 rounded  w-2 h-2"></p>
                <hr className="bg-current h-10 w-0.5 ml-1 rotate-40" />
                <p className="bg-amber-400 rounded w-2 h-2"></p>
              </div>
            </div>
            <div>
              <div className="  items-center">
                <h1 className="ml-2 tracking-widest">USER</h1>
              </div>

              <div className="  items-center mt-3 ">
                <h1 className="ml-2 tracking-widest">VENDOR</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registeration;
