import axios from "axios";

// Action to store fetched projects data
const setProjectsData = (data) => ({
  type: "SET_PROJECTS_DATA",
  payload: data,
});

// Thunk to fetch projects data from the backend
const fetchProjectsData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://mern-mk-server.vercel.app/api/projects"
    );
    // const response = await axios.get("http://localhost:5000/api/projects");

    // console.log(response.data);
    const projectsData = response.data;
    dispatch(setProjectsData(projectsData));
  } catch (error) {
    console.error("Error fetching projects data:", error);
  }
};

export { setProjectsData, fetchProjectsData };
