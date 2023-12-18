import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();//prepare data layer

//providing the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>   {children}
    </StateContext.Provider>
)

// push and pull data from data layer 
export const useStateValue = () => useContext(StateContext)