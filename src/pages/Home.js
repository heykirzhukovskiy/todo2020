import React, {Fragment, useContext, useEffect} from 'react';
import { Form } from '../components/Form';
import { NoteList } from '../components/NoteList';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Loader } from '../components/Loader';

export const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);
    
    return(
        <Fragment>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <NoteList notes={notes}/>}
        </Fragment>
    )
}