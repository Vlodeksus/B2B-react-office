import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import { updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
  //Перейменування dialogsData на dialogs
  // let dialogs = [
  //     {id: 1, name: 'Volodymyr'},
  //     {id: 2, name: 'Tom'},
  //     {id: 3, name: 'Oleg'},
  //     {id: 4, name: 'Olga'},
  //     {id: 5, name: 'Anna'}
  // ]

  //Перейменування messagesData на messages
  // let messages = [
  //     {id: 1, message: 'Hello!'},
  //     {id: 2, message: 'How are you?'},
  //     {id: 3, message: 'Hello people'},
  //     {id: 4, message: 'Wooow!'},
  //     {id: 5, message: 'Nice to see you!'},
  // ]

  // let state = props.store.getState().dialogsPage;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message}  />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
    // props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
    // props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.page}>
      <div className={classes.dialogsItems}>
        {/* <DialogItem name='Volodymyr' id='1'/>
        <DialogItem name='Viktoria' id='2'/> */}
        
        {dialogsElements}
        <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
        <button onClick={onSendMessageClick}>Message</button>
        {/* <DialogItem name={dialogData [0].name} id={dialogData [0].id}/>
        <DialogItem name={dialogData [1].name} id={dialogData [1].id}/> */}
        {/* <DialogItem name='Oleg' id='3'/>
                <DialogItem name='Olga' id='4'/>
                <DialogItem name='Anna' id='5'/> */}
      </div>
      <div className={classes.messages}>
        
        {/* <Message msg='Привіт, як справи?'/>
        <Message msg='Все гаразд' /> */}
        
        
        {messagesElements}
        
        {/* <Message message={messagesData [0].message}/>
                <Message message={messagesData [1].message}/> */}
        {/* <Message message='Hello people'/>
                <Message message='Wooow!'/>
                <Message message='Nice to see you!'/> */}
      </div>
    </div>
  );
};

export default Dialogs;
