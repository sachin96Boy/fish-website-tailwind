import React from "react";

function Content() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src="https://i.ibb.co/Tkbkmks/pexels-mali-maeder-229789.jpg"
          alt="fish"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Fish Rodwes</h2>
          <p className="text-xl mb-2">
            Taken from Sea, Quality stuff and Delecious
          </p>
          <span>$ 32</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src="https://i.ibb.co/TPRmdvz/pexels-kindel-media-8352779.jpg"
          alt="fish-1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Fish alphines</h2>
          <p className="text-xl mb-2">
            Taken from Sea, Quality stuff and Delecious, but don't take them too
            much
          </p>
          <span>$ 72</span>
        </div>
      </div>
    </>
  );
}

export default Content;
