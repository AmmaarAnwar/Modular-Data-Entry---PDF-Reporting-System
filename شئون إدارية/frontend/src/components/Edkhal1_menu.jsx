import { useState, useEffect, useRef } from "react";
import PopUp1 from "../components/PopUps/PopUp1";
import PopUp2 from "../components/PopUps/PopUp2";
import PopUp3 from "../components/PopUps/PopUp3";
import PopUp4 from "../components/PopUps/PopUp4";
import PopUp5 from "../components/PopUps/PopUp5";
import PopUp6 from "../components/PopUps/PopUp6";
import PopUp7 from "../components/PopUps/PopUp7";
import PopUp8 from "../components/PopUps/PopUp8";
import PopUp9 from "../components/PopUps/PopUp9";
import PopUp10 from "../components/PopUps/PopUp10";
import PopUp11 from "../components/PopUps/PopUp11";
import PopUp12 from "../components/PopUps/PopUp12";
import PopUp13 from "../components/PopUps/PopUp13";

const formatDateForDisplay = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString('en-CA'); // Format: yyyy-MM-dd
};

function Edkhal1_menu(props) {
  const [hide, setHide] = useState(true);
  const dropdownRef = useRef(null);

  const popups_array = [
    <PopUp1 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp2 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp3 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp4 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp5 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp6 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp7 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp8 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp9 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp10 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp11 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp12 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />,
    <PopUp13 Data={props.Data} SecondInputs={props.SecondInputs} formatDateForDisplay={formatDateForDisplay} />
  ];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHide(!hide);
    }
  };

  useEffect(() => {
    if (!hide) {
      document.addEventListener("mousedown", handleClickOutside);

    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hide]);

  return (
    <>
      <button
        onClick={() => {
            setHide(!hide); 
        }}
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="mb-2 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        بيانات اساسية
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div ref={dropdownRef} id="dropdownDivider"  className={`${hide && "hidden"}  absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-h-60 overflow-y-auto dark:bg-gray-700 dark:divide-gray-600`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
          {popups_array.map((e, index) => (
            <li key={index}  className="block py-2 rounded-lg hover:bg-sky-200"> 
              {e}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Edkhal1_menu;
