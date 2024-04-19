import React from 'react';
import userPhoto from './Images/avatar-1577909_1280.webp';
import adharPhoto from './Images/Aadhaar-verification-how-to.webp';
import './style.css';
import Backbutton from '../GoBack/Backbutton';
import {PORT} from '../Api/api'
import axios from 'axios'
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function Verification({ language }) {
  const [clickValue , setClickValue] = useState("Verify user : Click a Photo")
  const [clickValueAdhar , setClickValueAdhar] = useState("Verify Adhar : Click photo")
  const [clickValueHindi , setClickValueHindi] = useState("व्यक्ति की पुष्टि करें:  फोटो क्लिक करें")
  const [clickValueAdharHindi , setClickValueAdharHindi] = useState("आधार सत्यापित करें: फोटो क्लिक करें")
  const navigate = useNavigate()
  const handleSubmit = async () => {
  
    const entry = JSON.parse(localStorage.getItem("entry"));
    const purpose = JSON.parse(localStorage.getItem("purpose"));
    const houseDetails = JSON.parse(localStorage.getItem("houseDetails"));
    localStorage.setItem("adharImg", JSON.stringify(AdharImgSrc));
    localStorage.setItem("userImg", JSON.stringify(imgSrc));
    const adharImg = JSON.parse(localStorage.getItem("adharImg"));
    const userImg = JSON.parse(localStorage.getItem("userImg"));
  
    try {
      if (imgSrc === userPhoto || imgSrc == null ) {
        if(language === "hindi"){
          toast.warn(`Please Click the photo before submitting`);
          return;
        }
        
      }
      if (imgSrc === userPhoto  || imgSrc == null  ) {
        if(language==="english"){
          toast.warn(`कृपया फोटो किंचकर सबमिट करें`);
        return;
        }
        
      }
      if (AdharImgSrc === adharPhoto || AdharImgSrc == null ) {
        if(language === "hindi"){
          toast.warn('Please capture your Aadhar photo before submitting');
          return;
        }
        
      }
      if (AdharImgSrc === adharPhoto || AdharImgSrc == null ) {
        if(language === "english"){
          toast.warn('कृपया आधार कार्ड की फोटो किचकर सबमिट करें।');
          return;
        }
        
      }
    
  
      if (language === "hindi" ) {
        Swal.fire({
          title: "Do you want to save the Data?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then(async (result) => { // Change here
          
          if (result.isConfirmed) {
            try {
              const response = await axios.post(`${PORT}/nonVerified`, {
                entryType: entry,
                purposeType: purpose,
                houseDetails: houseDetails,
                adharImg: adharImg,
                userPhoto: userImg
              });
              localStorage.clear()
              navigate('/')
              
              Swal.fire("Saved!", "", "success");
            } catch (error) {
              console.error("Error saving data:", error);
              Swal.fire("Error", "Failed to save data", "error");
            }
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      }
        if (language === "english" ) {
          Swal.fire({
            title: "क्या आप डेटा को सहेजना चाहते हैं?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "सहेजें",
            denyButtonText: `असहेजें`,
         
          }).then(async (result) => { // Change here
            
            if (result.isConfirmed) {
              try {
                const response = await axios.post(`${PORT}/nonVerified`, {
                  entryType: entry,
                  purposeType: purpose,
                  houseDetails: houseDetails,
                  adharImg: adharImg,
                  userPhoto: userImg
                });
                localStorage.clear()
                navigate('/')
                Swal.fire("Saved!", "", "success");
              } catch (error) {
                console.error("Error saving data:", error);
                Swal.fire("Error", "Failed to save data", "error");
              }
            } 
          });
        
      }
    
  
    } catch (error) {
      console.error("Error handling submission:", error);
    }
  };
// camera

const webcamRef = useRef(null);
const [imgSrc, setImgSrc] = useState(userPhoto);


// create a capture function
const capture = useCallback(() => {
  const imageSrc = webcamRef.current.getScreenshot();
  setImgSrc(imageSrc);
}, [webcamRef]);

const retake = () => {
  setImgSrc(null);
  setClickValue('Retake')
  setClickValueHindi('पुनः लें')
};

  // 

  // camera  2

const AdharWebcamRef = useRef(null);
const [AdharImgSrc, AdharSetImgSrc] = useState(adharPhoto);


// create a capture function
const captureAdhar = useCallback(() => {
  const AdharImageSrc = AdharWebcamRef.current.getScreenshot();
  AdharSetImgSrc(AdharImageSrc);
}, [AdharWebcamRef]);

const AdharRetake = () => {
  AdharSetImgSrc(null);
  setClickValueAdhar('Retake')
  setClickValueAdharHindi('पुनः लें')
};



  //
  return (
    <>
      <div className="main-verificattion">
        <div className="photo-verification">
        

          <div id='photo-con' className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={188}
          width={250}
          ref={webcamRef}
        
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
 <div className="btn-container">
        {imgSrc ? (
          <p onClick={retake}>{language=="english" ? <>{clickValueHindi}</>: <> {clickValue}</>}</p>
        ) : (
          <p onClick={capture}>{language=="english" ? "फोटो किंचे" : "Click photo"}</p>
        )}
      </div>
    </div>
          {/*  */}
        </div>

        <div className="adhar-verification">
        <div id='photo-con' className="container">
      {AdharImgSrc ? (
        <img src={AdharImgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={400}
          width={600}
          ref={AdharWebcamRef}
        
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
 <div className="btn-container-Adhar">
        {AdharImgSrc ? (
          <p onClick={AdharRetake}>{language=="english" ? <>{clickValueAdharHindi}</> :  <>  {clickValueAdhar}</>}</p>
        ) : (
          <p onClick={captureAdhar}>{language=="english" ? "फोटो किंचे" : "Click photo"}</p>
        )}
      </div>
    </div>
          {/*  */}
        </div>
        <div className="submit-btn">
          <button onClick={handleSubmit}>{language === 'english' ? "सबमिट करें" : "Submit"}</button>
        </div>
      </div>
      <Backbutton />



<ToastContainer/>
    
      
    </>
  );
}

export default Verification;
