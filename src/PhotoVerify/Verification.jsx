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
    // Retrieve data from localStorage
    const entry = JSON.parse(localStorage.getItem("entry"));
    const purpose = JSON.parse(localStorage.getItem("purpose"));
    const houseDetails = JSON.parse(localStorage.getItem("houseDetails" ));
    console.log(houseDetails)
   

    try {
      // Fetch data from API
      const response = await axios.post(`${PORT}/nonVerified`, {
        entryType: entry,
        purposeType : purpose,
        houseDetails: houseDetails
      });

      // Handle response as needed
      toast.success('Data added')
      console.log("API response:", response.data);
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

  // camera  22

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


localStorage.setItem("photo" , JSON.stringify(imgSrc))
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
          <p onClick={retake}>Take a photo</p>
        ) : (
          <p onClick={capture}>Capture photo</p>
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
          <p onClick={AdharRetake}>Take a photo</p>
        ) : (
          <p onClick={captureAdhar}>Capture photo</p>
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
