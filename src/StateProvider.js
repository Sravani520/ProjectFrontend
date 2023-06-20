import React, {createContext, useContext, useEffect, useReducer} from "react";
import PropTypes from "prop-types";
export const StateContext = createContext();

export const StateProvider=({ reducer, initialState, children})=>(
    StateProvider.propTypes={
        reducer:PropTypes.node,
        initialState:PropTypes.node,
        children:PropTypes.node
    },
  
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue =()=> useContext(StateContext);