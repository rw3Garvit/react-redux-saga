import {
  GET_USER_ERROR,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
} from "../action/action";

let initialState = {
  user: [],

  //status
  isLoading: false,
  isError: null,
};

let userReducer = (state = initialState, action) => {
  console.log(action, "action from reducer");
  switch (action.type) {
    case GET_USER_PENDING: {
      return {
        isLoading: true,
        ...state,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        isLoading: false,
        user: action.data,
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
