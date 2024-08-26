const initialState = {
  data: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROJECTS_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
