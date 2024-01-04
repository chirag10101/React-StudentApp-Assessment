import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
  
    return (
      <StudentContext.Provider value={{ students,setStudents}}>
        {children}
      </StudentContext.Provider>
    );
  };
  
  export const useStudentContext = () => {
    return useContext(StudentContext);
  };
  
