import React, { useContext, useReducer } from 'react'
import  reducer from './Reducer'
import { TOGGLE_THEME } from './Actions'

export const  initialState =  {
    themeChange: false
}

const AppContext = React.createContext()
const AppProvider  =   ({children}) =>  {
    const[state, dispatch]  = useReducer(reducer, initialState)

    const toggleTheme = () => {
        dispatch({type: TOGGLE_THEME})
    }
    return (
        <AppContext.Provider value =  {{
            ...state,
            toggleTheme
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = ()  => {
    return useContext(AppContext)
}

export { AppProvider }