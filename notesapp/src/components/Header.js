import { ReactComponent as DarkToggle } from '../assets/dark.svg';
import { ReactComponent as LightToggle } from '../assets/light.svg';
import React from 'react'
import { useAppContext } from '../context/AppContext';


const Header = () => {

    const{toggleTheme,  themeChange} = useAppContext()
    // const [theme, setTheme] = useState(false)
    return (

        <div className="app-header">
            <h1>Notes List</h1>

            <button onClick={toggleTheme}>
                {themeChange ? <LightToggle />  : <DarkToggle /> }
            </button>

        </div>

    )
}

export default Header;