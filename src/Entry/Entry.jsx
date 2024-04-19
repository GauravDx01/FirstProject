import React, { useEffect, useState } from "react";
import "./style.css";
import { userData } from "../Data/data";
import { useNavigate } from "react-router-dom";
function Entry({language }) {
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
    localStorage.setItem("entry" , JSON.stringify(userData[index].title))
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
      case 7:
        return guestPage();
      default:
        indexPage();
    }
  };
  
  //  const data = localStorage.setItem('data' ,)
  return (
    <>
      <div className="entry-heading">
        <h1 className="m-font"> {language==='english'? "प्रवेश का प्रकार" : "Type of Entry"  } </h1>
      </div>
      <div className="entry-person">
        {userData.map((item, index) => (
          <div onClick={() => handlePurpose(index)} className="specific-person">
            <h1>{item.icons}</h1>
            <p className="m-font" key={index}>
         {language === 'english' ? <> {item.hindiTitle} </> : <>{item.title} </>}     
            </p>
          </div>
        ))}
      </div>
    </>
  );  
}

export default Entry;
