import React, { createContext, useState, useContext } from "react";

const StudentsContext = createContext();

export const useStudents = () => useContext(StudentsContext);

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};
