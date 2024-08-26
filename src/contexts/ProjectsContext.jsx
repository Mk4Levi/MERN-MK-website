import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

// Create the context
const ProjectsContext = createContext();

// Custom hook to use the Projects context
export const useProjects = () => {
  return useContext(ProjectsContext);
};

// Provider component
const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from the mongoDB
  useEffect(() => {
    axios
      // .get("http://localhost:5000/api/projects")
      .get("https://mern-mk-server.vercel.app/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <ProjectsContext.Provider value={{ projects }}>
        {children}
      </ProjectsContext.Provider>
    </div>
  );
};

export default ProjectsProvider;
