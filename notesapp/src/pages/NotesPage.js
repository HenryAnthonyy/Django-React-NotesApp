import React from 'react'
import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';

const NotesPage = () => {
    const location = useLocation();
    // console.log(location)

    let noteID = location.pathname.split('/')[2]
    // console.log("noteID:",noteID)

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteID])

    let getNote = async() => {
        if (noteID === 'new') return

        let response = await fetch(`/api/notes/${noteID}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async() => {
        await fetch(`/api/notes/`, {
        
            method: 'POST',

            headers: { 'Content-Type': 'application/json'},

            body: JSON.stringify(note)
        })

    }

    let updateNote = async() => {
        await fetch(`/api/notes/${noteID}/`, {
        
            method: 'PUT',

            headers: { 'Content-Type': 'application/json'},

            body: JSON.stringify(note)
        })

    }


    let deleteNote = async () => {
        await fetch(`/api/notes/${noteID}/`, {
        
            method: 'DELETE',

            headers: { 'Content-Type': 'application/json'},

            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () => {
        
        if(noteID !== 'new' && !note.body)
        {
            deleteNote()
        }
        else if(noteID !== 'new'){ 
            updateNote()
        }
        else if (noteID === 'new' && note !== null){
            createNote()
        }


    }



     

  return (
    <div className="note">
        <div className="note-header">
            <h3>
                < Link to='/'>
                    <ArrowLeft onClick={handleSubmit} />
                </Link>
            </h3>
            
            {/* using ternary operator to check whether the note is new or not */}
            {noteID !== 'new' ? (
                <h3>
                    <Link to='/'>
                        <button onClick={deleteNote}><DeleteIcon /></button>
                    </Link>
                </h3>
            ) : (

                <Link to='/'>
                    <button onClick={handleSubmit}>Done</button>
                </Link>
            )}
            {/* ternary operator */}
            
            
            

        </div>

        {/* The question mark helps us check the the note exists */}
        {/* Add onChange in order to be able to update the text */}
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}> 

        </textarea>
    </div>
  )
}

export default NotesPage