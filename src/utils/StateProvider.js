import { createContext, useContext, useReducer } from "react";

// prepare sataLayer
export const StateContext = createContext();

// wrap app and prodide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// pull info from the data layer
export const useStateValue = () => useContext(StateContext);
