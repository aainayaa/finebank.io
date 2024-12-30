import PropTypes from "prop-types";  // Import PropTypes
import { createContext, useState } from "react";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState("");

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation for children
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children is required and of type 'node'
};
