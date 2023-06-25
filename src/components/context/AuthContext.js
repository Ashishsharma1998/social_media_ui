import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "641de514afe0f27e1e8ead5e",
    username: "vincenzo",
    email: "vincenzo@admin.com",
    password: "$2b$09$oC.vwAck.ERvCzpYS/3lnOIITkPnfH.xrGYvuFVjo7Gf6xiI/zguC",
    profilePicture: "/person/5.jpeg",
    coverPicture: "/post/1.jpeg",
    followers: [],
    followings: ["641dcfada7d2c35838cd8deb"],
    isAdmin: false,
    createdAt: { $date: { $numberLong: "1679680788199" } },
    updatedAt: { $date: { $numberLong: "1683533588702" } },
    __v: { $numberInt: "0" },
    desc: "Hey! how is the Josh?",
    city: "Delhi",
    from: "India",
    relationship: { $numberInt: "1" },
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
