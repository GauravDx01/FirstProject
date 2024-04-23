import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {PORT} from '../Api/api'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Login({language}) {
  const navigate = useNavigate() 
    const initialValues = {
        username: '',
        phone: '',
        password: ''
      };
    
      const validationSchema = (language) => Yup.object().shape({
        username: Yup.string()
            .min(6, `${language === "hindi" ? "Username must be of minimum 6 characters" : "उपयोगकर्ता नाम कम से कम 6 अक्षरों का होना चाहिए"}`)
            .required(`${language === "hindi" ? "Username is required" : "उपयोगकर्ता नाम आवश्यक है"}`),
        
        password: Yup.string()
            .min(6, `${language === "hindi" ? "Password must be at least 6 characters" : "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए"}`)
            .required(`${language === "hindi" ? "Password is required" : "पासवर्ड आवश्यक है"}`)
    });
      const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(false);
    
        try {
            const response = await axios.post(`${PORT}/login`, {
                username: values.username,
                password: values.password
            });

            let localData = {
              userName: values.username,
              userPassword: values.password
            }
    
            
      if(response){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${language==="english" ? " सफलतापूर्वक लॉग इन हो गए हैं।" : "You logged successfully" }`,
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("data" , JSON.stringify(localData))
        navigate('/get-data')
      }
              
            
        } catch (error) {
           
            toast.error(`${language==="english" ? "अमान्य उपयोगकर्ता नाम या पासवर्ड" : "Invalid username or password" }`);
        }
    };
  return (
    <>
     <div className='main-form'>
    <div className="form-container">
      <h2>{language==="english" ? "लॉगिन" : "LOGIN"}  </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(language)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-field">
              <label htmlFor="username">{language==="english" ? "उपयोगकर्ता नाम" : "Username"}</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
           
            <div className="form-field">
              <label htmlFor="password">{language==="english" ? "पासवर्ड" : "Password"}</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-button">
            {language==="english" ? "सबमिट" : "Submit"}
            </button>
            <p onClick={()=> navigate('/signup')} className='s-page'> {language !== "english" ? (
        <span>New user ? <span>Register now</span></span>
    ) : (
        <span>नया उपयोगकर्ता ? <span>अभी पंजीकरण करें</span></span>
    )}</p>
          </Form>
        )}
      </Formik>
      <ToastContainer/>
    </div>
    </div>
    </>
  )
}

export default Login