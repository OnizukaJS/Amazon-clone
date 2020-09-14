//setup data layer
//We need this to track the basket

import { createContext } from "react";
import React, { CreateContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Build a provider
//initialState --> comment la data look au début
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children is refering to the <App> because we put StateProvider englobe App dans Index.js */}
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
