// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from "react";

const StudentsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useStudents = () => useContext(StudentsContext);

// eslint-disable-next-line react/prop-types
export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};
