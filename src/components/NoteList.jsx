import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const NoteList = ({notes, onRemove}) => {
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const noteRemoving = (id) => {
        firebase.removeNote(id).then(() => {
            alert.show('Заметка удалена', 'success');
        }).catch(() => {
            alert.show('Произошла ошибка!', 'danger');
        });
    };
    
    return (
        <ul className="list-group">
            {notes.map( note => (
                <li 
                    className="list-group-item note"
                    key={note.id}
                >
                <div>
                    <strong>{note.title}</strong>
                    <small>{note.date}</small>
                </div>
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => noteRemoving(note.id)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
};