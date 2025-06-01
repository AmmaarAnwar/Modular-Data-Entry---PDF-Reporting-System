import { useState } from "react";
import { Link } from "react-router-dom";

function List({ listname, maintittle, array, pagename }) {
  const [hide, setHide] = useState(true);

  const svg = hide ? (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
    </svg>
  );
  return (
    <ul
      className="cursor-pointer "
      onClick={() => {
        setHide(!hide);
      }}
    >
      {" "}
      <div className="hover:bg-gray-400 rounded px-4 cursor-pointer flex items-center ">
        <button> {maintittle}</button>
        {svg}
      </div>
      <div className={`mx-5 ${hide ? "hidden" : ""} `}>
        {array.map((ele, index) => (
          <Link
          title={`${pagename}${index + 1}`}
            className="block hover:bg-gray-300 rounded cursor-pointer pl-5 pr-[10px]"
            to={`/${pagename}${index + 1}`}
            key={ele}
          >
            {ele}
          </Link>
        ))}
      </div>
    </ul>
  );
}

export default List;
