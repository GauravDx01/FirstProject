import React, { useEffect, useState } from "react";
import "./style.css";
import { userData } from "../Data/data";
import { useNavigate } from "react-router-dom";
function Entry() {
  const navigate = useNavigate();
  const indexPage = () => {
    navigate("/");
  };

  const guestPage = () => {
    navigate("/purpose");
  };
  const cPage = () => {
    navigate("/c-purpose");
  };
  const verfiedPage = ()=>{
    navigate('/verified-user')
  }
  const handlePurpose = (index) => {
    switch (index) {
      case 0:
        return guestPage();

      case 1:
        return guestPage();

      case 2:
        return guestPage();
        case 3:
        return verfiedPage();
      case 4:
        return cPage();
      case 5:
        return cPage();
      case 6:
        return cPage();
      default:
        indexPage();
    }
  };

  return (
    <>
      <div className="entry-heading">
        <h1 className="m-font">Type of Entry</h1>
      </div>
      <div className="entry-person">
        {userData.map((item, index) => (
          <div onClick={() => handlePurpose(index)} className="specific-person">
            <h1>{item.icons}</h1>
            <p className="m-font" key={index}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Entry;
