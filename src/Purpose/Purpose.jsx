// import React from 'react';
// import { nonVerifiedPurpose } from '../Data/Purpose';
// import './style.css'
// import { useNavigate } from 'react-router-dom'
// import Backbutton from '../GoBack/Backbutton';

// function Purpose({ language }) {
//   const navigate = useNavigate();

//   const handleSubmit = (index) => {
//     navigate('/house-no');
//     localStorage.setItem("purpose", JSON.stringify(nonVerifiedPurpose[index].purpose));
//   }

//   return (
//     <>
//       <div className="purpose-heading">
//         <h1 className="m-font">
//           {language === 'english' ? "आने का उद्देश्य" : "Purpose of visit"}</h1>
//       </div>
//       <div className='purpose-sec m-font' >
//         {nonVerifiedPurpose.map((item, index) => (
//           <div className='purpose-lines' key={index} onClick={() => handleSubmit(index)}>
//             <p>{language === 'english' ? <>{item.hindiPurpose}</> : <>{item.purpose}</>}</p>
//           </div>
//         ))}
//       </div>
//       <Backbutton />
//     </>
//   );
// }

// export default Purpose;




import React, { useEffect, useState } from 'react';
import { nonVerifiedPurpose } from '../Data/Purpose';
import './style.css'
import { useNavigate } from 'react-router-dom'
import Backbutton from '../GoBack/Backbutton';
import axios from 'axios'
import {PORT} from '../Api/api'
function Purpose({ language }) {
  const navigate = useNavigate();
const [purposeData , setPurposeData] = useState([])
  const handleSubmit = async () => {
    // navigate('/house-no');
   
    const result = await axios.get(`${PORT}/getUserNonVerfiedPrupose`)
    setPurposeData(result.data.data)
  }
  useEffect(()=>{
    handleSubmit()
  }, [purposeData])


  const handleNavigate = (index) => {
    navigate('/house-no');
    localStorage.setItem("purpose", JSON.stringify(purposeData[index].purpose));
    console.log(purposeData)
   
  }  

  return (
    <>
      <div className="purpose-heading">
        <h1 className="m-font">
          {language === 'english' ? "आने का उद्देश्य" : "Purpose of visit"}</h1>
      </div>
      <div className='purpose-sec m-font' >
        {purposeData.map((item, index) => (
          <div className='purpose-lines' key={index}  onClick={()=>handleNavigate(index)} >
            <p>{language === 'english' ? <>{item.hindiPurpose}</> : <>{item.purpose}</>}</p>
          </div>
        ))}
      </div>
      <Backbutton />
    </>
  );
}

export default Purpose;
