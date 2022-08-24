import { Routes,  Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotesPage from './pages/NotesPage'
import { useAppContext } from './context/AppContext';


function App() {

  const{toggleTheme,  themeChange} = useAppContext()

  return (
    <div className={themeChange ?  'container dark':  'container'}>
      <div className="app">
        <Header />   
        <Routes>

          <Route path='/' exact element= {<NotesListPage />}/>
          <Route path='/note/:id' element= {<NotesPage />}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
