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
function Verification({ language }) {

  const handleSubmit = async () => {
   
    const entry = JSON.parse(localStorage.getItem("entry"));
    const purpose = JSON.parse(localStorage.getItem("purpose"));
    const houseDetails = JSON.parse(localStorage.getItem("houseDetails" ));
    localStorage.setItem("adharImg"  , JSON.stringify(AdharImgSrc) )
    localStorage.setItem("userImg"  , JSON.stringify(imgSrc) )
    const adharImg = JSON.parse(localStorage.getItem("adharImg"))
    const userImg = JSON.parse(localStorage.getItem("userImg"))
   

    try {
   
      if (imgSrc === userPhoto) {
        toast.warn("Please capture your photo before submitting");
        return;
      }
 if (AdharImgSrc === adharPhoto) {
        toast.warn('Please capture your Aadhar photo before submitting');
        return;
      }
    

     else{
     
      const response = await axios.post(`${PORT}/nonVerified`, {
        entryType: entry,
        purposeType : purpose,
        houseDetails: houseDetails,
        adharImg : adharImg,
        userPhoto : userImg
      });
      toast.success('Data added')
     }
    } catch (error) {
      // Handle error
      console.error("Error fetching data:", error);
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
          <p onClick={retake}>{language=="english" ? "फोटो लें" : "Take a photo"}</p>
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
 <div className="btn-container">
        {AdharImgSrc ? (
          <p onClick={AdharRetake}>{language=="english" ? "आधार कार्ड की फोटो लें" : "Verify your Adharcard"}</p>
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
