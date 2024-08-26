// Action to store fetched projects data
const setProjectsData = (data) => ({
  type: "SET_PROJECTS_DATA",
  payload: data,
});

// Thunk to fetch projects data from the backend
const fetchProjectsData = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/projects");
    const data = await response.json();
    dispatch(setProjectsData(data));
  } catch (error) {
    console.error("Error fetching projects data:", error);
  }
};

export { setProjectsData, fetchProjectsData };
