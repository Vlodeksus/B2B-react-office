import React from 'react';
import Message from '../Dialogs/Message/Message';
import classes from './Catalog.module.css';

const Catalog = () => {

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    let newMessageElement = React.createRef();

    

    return (
        <div className={classes.page}>
            Catalog Page
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Message</button>

            
        </div>
    );
}

export default Catalog;