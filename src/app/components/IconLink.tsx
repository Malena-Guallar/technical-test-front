import { useState } from "react";

const IconLink = ({
  title,
  cast,
  plot,
  id,
}: {
  title: string;
  cast: string;
  plot: string;
  id: string;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="rounded-full border-2 border-black bg-yellow-200 p-2 drop-shadow-md"
      >
        more
      </button>
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/70 flex justify-center items-center z-10">
          <div className="bg-white shadow-lg py-2 rounded-md mx-5">
            <h2 className="uppercase py-3 px-4 mb-4">{title}</h2>
            <p className="py-3 px-4 mb-4">
              Plot <br /> {plot}
            </p>
            <p className="py-3 px-4 mb-4">
              Cast <br /> {cast}
            </p>
            <div className="flex justify-center ">
              <button
                type="button"
                className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white "
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IconLink;