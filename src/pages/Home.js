import React, {Fragment, useContext, useEffect} from 'react';
import { Form } from '../components/Form';
import { NoteList } from '../components/NoteList';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Loader } from '../components/Loader';
import { AlertContext } from '../context/alert/alertContext';

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
    const {show} = useContext(AlertContext);

    const noteRemoving = id => {
        removeNote(id).then(() => {
            show('Заметка удалена', 'success');
        }).catch(() => {
            show('Произошла ошибка!', 'danger');
        });
    };

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);
    
    return(
        <Fragment>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <NoteList notes={notes} onRemove={noteRemoving}/>}
        </Fragment>
    )
}