import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
export const StateProvider = ((reducer,initialState,children)=>{
  <StateProvider value={useReducer(reducer,initialState)}>
        {children}
  </StateProvider>  
})

export const useStateValue = () => useContext(StateContext);