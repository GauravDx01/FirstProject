// import React from 'react';
// import { houseNo } from '../Data/HouseNo';
// import { useNavigate } from 'react-router-dom';
// import housePhoto from './Images/wired-outline-63-home.gif';
// import Backbutton from '../GoBack/Backbutton';

// function House({ language }) {
//   const navigate = useNavigate();

//   const handleSubmit = (index) => {
//     navigate('/photo-verification');
//     let houseDetails =   {
//       houseNo : houseNo[index].houseNo ,
//       owner :   houseNo[index].owner
//     }
//     localStorage.setItem('houseDetails' , JSON.stringify(houseDetails))
  
//   }

//   return (
//     <>
//       <div className="purpose-heading">
//         <h1 className="m-font">{language === 'english' ? "कहाँ जाना है" : "Where to visit"}</h1>
//       </div>
//       <div className='purpose-sec m-font' >
//         {houseNo.map((item, index) => (
//           <div className='purpose-lines house-shape' key={index} onClick={() => handleSubmit(index)}>
//             {/* <img src={housePhoto} alt="" /> */}
//             <br />
//             <p>{language === 'english' ? "घर का नंबर" : " House No"} :{item.houseNo}</p>
//             <p>{language === 'english' ? "मालिक" : "Owner"} : {item.owner}</p>
//           </div>
//         ))}
//       </div>
//       <Backbutton />
//     </>
//   )
// }

// export default House;




import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {PORT} from '../Api/api'
import Backbutton from '../GoBack/Backbutton';


function House({ language }) {
  const navigate = useNavigate();
const [houseDetail , setHouseDetails] = useState([])
  const handleData = async() => {
    const response = await axios.get(`${PORT}/getHouseDetails`)
    setHouseDetails(response.data.data)
   
  
  
  }
  useEffect(()=>{
    handleData()
  } , [houseDetail])
const handleSubmit = (index)=>{
  navigate('/photo-verification')
  let houseDetails =   {
    houseNo : houseDetail[index].houseNo ,
    owner :   houseDetail[index].ownerName
  }
  localStorage.setItem('houseDetails' , JSON.stringify(houseDetails))
}
  return (
    <>
      <div className="purpose-heading">
        <h1 className="m-font">{language === 'english' ? "कहाँ जाना है" : "Where to visit"}</h1>
      </div>
      <div className='purpose-sec m-font' >
        {houseDetail.map((item, index) => (
          <div  className='purpose-lines house-shape' key={index} onClick={()=> handleSubmit(index) }>
           
            <br />
            <p>{language === 'english' ? "घर का नंबर" : " House No"} :{item.houseNo}</p>
            <p>{language === 'english' ? <>मालिक : {item.ownerNameHindi}</>: <>Owner : {item.ownerName}</>}  </p>
          </div>
        ))}
      </div>
      <Backbutton />
    </>
  )
}

export default House;
