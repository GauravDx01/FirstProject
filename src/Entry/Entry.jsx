// import React, { useEffect, useState } from "react";
// import "./style.css";
// import { userData } from "../Data/data";
// import { useNavigate } from "react-router-dom";
// function Entry({language }) {
//   const navigate = useNavigate();
//   const indexPage = () => {
//     navigate("/");
//   };

//   const guestPage = () => {
//     navigate("/purpose");
//   };
//   const cPage = () => {
//     navigate("/c-purpose");
//   };
//   const verfiedPage = ()=>{
//     navigate('/verified-user')
//   }
//   const handlePurpose = (index) => {
//     localStorage.setItem("entry" , JSON.stringify(userData[index].title))
//     switch (index) {
//       case 0:
//         return guestPage();

//       case 1:
//         return guestPage();

//       case 2:
//         return guestPage();
//         case 3:
//         return verfiedPage();
//       case 4:
//         return cPage();
//       case 5:
//         return cPage();
//       case 6:
//         return cPage();
//       case 7:
//         return guestPage();
//       default:
//         indexPage();
//     }
//   };
  
//   //  const data = localStorage.setItem('data' ,)
//   return (
//     <>
//       <div className="entry-heading">
//         <h1 className="m-font"> {language==='english'? "प्रवेश का प्रकार" : "Type of Entry"  } </h1>
//       </div>
//       <div className="entry-person">
//         {userData.map((item, index) => (
//           <div onClick={() => handlePurpose(index)} className="specific-person">
//             <h1>{item.icons}</h1>
//             <p className="m-font" key={index}>
//          {language === 'english' ? <> {item.hindiTitle} </> : <>{item.title} </>}     
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );  
// }

// export default Entry;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { PORT } from '../Api/api';
import { useNavigate } from "react-router-dom";
import "./style.css";

function Entry({ language }) {
  const [userData, setUserData] = useState([]);

  const getEntries = async () => {
    try {
      let response = await axios.get(`${PORT}/getEntries`);
     
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEntries();
  }, []); 
  const navigate = useNavigate();
const handleSubmit = (item , index)=>{

if(item === "House Maid"){
  navigate('/verified-user')
}
else{
  navigate('/purpose')
  localStorage.setItem("entry" , JSON.stringify(userData[index].titleEnglish))
}
  
}












  return (
    <>
      <div className="entry-heading">
        <h1 className="m-font">{language === 'english' ? "प्रवेश का प्रकार" : "Type of Entry"}</h1>
      </div>
      <div className="entry-person">
        {userData && userData.map((item, index) => (
          <div onClick={()=>handleSubmit(item.titleEnglish , index)} key={index} className="specific-person">
            <h1> {item.icon}</h1> 
            <p className="m-font">
              {language === 'english' ? item.titleHindi : item.titleEnglish}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Entry;
