import {  TOGGLE_THEME } from './Actions'

const reducer = (state, action) =>  {
    switch(action.type)
    {
        case TOGGLE_THEME:
            return{
                ...state,
                themeChange:  !state.themeChange
            }

        default:
            return console.log('nothing')
    }
}

export default reducer