import React from 'react'
import Header from './Header'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddTostudentList=(student)=>{
    axios.post(`http://localhost:3000/student`, student).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    
}

const StudentSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    dob: Yup.date()
    .max(new Date(), "Date of birth can't be in the future")
    .required('Required')
    ,
    address: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    gender: Yup.string().required('Gender is required'),
    number: Yup.number().min(999999999, 'Mobile number should be 10 in length').max(10000000000, 'Mobile number should be 10 in length').required('Required'),
  });

export const AddStudent = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Header/>
        <div>
            <h1>Add student</h1>
            <Formik
            initialValues={{
                name: '',
                dob: '',
                gender: '',
                address: '',
                number: '',
            }}
            validationSchema={StudentSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
                AddTostudentList(values);
                navigate("/showstudents");
            }}
            >
            {({ errors, touched }) => (
                <Form>
                <div className='m-2'>
                    <label className='me-2'> Name</label>
                    <Field name="name" />
                        {errors.name && touched.name ? (
                            <div className='text-danger'>{errors.name}</div>
                        ) : null}
                </div>
                <div className='m-2'>
                    <label className='me-2'>Date of Birth</label>
                    <Field name="dob" type="date" />
                    {errors.dob && touched.dob? (
                        <div className='text-danger'>{errors.dob}</div>
                    ) : null}
                </div>
                <div id="Gender-radio-group" className='m-2'>Gender
                    <div role="group" aria-labelledby="Gender-radio-group">
                        <label className='m-2'>Female</label>
                            <Field type="radio" name="gender" value="Female" />
                        <label className='m-2'>Male</label>
                        <Field type="radio" name="gender" value="Male" />
                        {errors.gender && touched.gender ? (
                            <div className='text-danger'>{errors.gender}</div>
                        ) : null}
                    </div>
                </div>
                <div className='m-2'>
                    <label className='me-2'>Address</label>
                        <Field name="address" />
                    
                    {errors.address && touched.address ? (
                            <div className='text-danger'>{errors.address}</div>
                        ) : null} 
                </div>
                <div className='m-2'>
                    <label className='me-2'>Number </label>
                    <Field name="number" type="number" />
                    {errors.number && touched.number ? <div className='text-danger'>{errors.number}</div> : null}
                </div>
                <button className='btn btn-primary m-2' type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    </div>
  )
}
