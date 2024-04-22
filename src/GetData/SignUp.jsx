import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {PORT} from '../Api/api'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate()
  const initialValues = {
    username: '',
    phone: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
    .min(6 , 'Username must be of minumum 6 charatcters')
      .required('Username is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be of 10 digits and in correct format')
      .required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    

    setSubmitting(false);
    try {
        const response = await axios.post(`${PORT}/signup` ,
     { username : values.username , 
       userPhoneNo : values.phone ,
       password : values.password})
    console.log("Data"  , response)

    if(response.data.success === true){
      let localData = {
        userName: values.username,
        userPassword: values.password
      }
      localStorage.setItem("data" , JSON.stringify(localData))
        toast.success('User Signin Successfully') 
        values.username = ""
        values.phone = ""
        values.password = ""
        navigate('/get-data')
    } 
}catch (error) {
        
        if (error.response && error.response.data && error.response.data.msg === "Username already exists") {
            toast.warning('Username already exists');
        }
        else{
            toast.error('Data not added') 
        }

        
    }
   
  };

  return (
    <div className='main-form'>
    <div className="form-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-button">
              Submit
            </button>
            <div onClick={()=> navigate('/login')} className="s-page">Already SignUp ? <span>Login</span></div>
          </Form>
          
        )}
      </Formik>
      <ToastContainer/>
    </div>
    </div>
  );
}

export default SignUp;
