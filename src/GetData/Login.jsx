import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {PORT} from '../Api/api'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Login() {
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
     
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
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
        toast.success("Login successfull")

        localStorage.setItem("data" , JSON.stringify(localData))
        navigate('/get-data')
      }
              
            
        } catch (error) {
           
            toast.error('Invalid username or password');
        }
    };
  return (
    <>
     <div className='main-form'>
    <div className="form-container">
      <h2> LOGIN </h2>
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
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-button">
              Submit
            </button>
            <p onClick={()=> navigate('/signup')} className='s-page'>New user ? <span>Resister now</span></p>
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