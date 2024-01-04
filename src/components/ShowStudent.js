import React, {  useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { useStudentContext } from '../StudentContext';

export const ShowStudent = () => {
    const {students, setStudents} = useStudentContext();

    const FetchStudentData = () => {
        axios
          .get("http://localhost:3000/student")
          .then((data) => {
            console.log(data.data);
            setStudents(data.data);
          })
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        FetchStudentData();
        // eslint-disable-next-line
      }, []);
  return (
    <div>
        <Header/>
        <h1 className='m-3'>List of Students</h1>
        <div className='justify-content-center w-50 align-items-center '>
            {
                students.map((student) => (
                <div className="card border-1 border-black m-3 w-50 bg-info-subtle" style={{ width: "50 rem" }} >
                    <div className="card-body">
                        <h5 className="card-title">Name : {student.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Address : {student.address}</h6>
                        <p >Gender: {student.gender} </p>
                        <p >Date of Birth : {student.dob} </p>
                        <p >Phone Number : {student.number} </p>
                    </div>
                </div>
                ))    
            }
        </div>
        
        
    </div>
  )
}
