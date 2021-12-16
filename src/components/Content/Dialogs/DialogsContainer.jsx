import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import { updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
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
  let state = props.store.getState().dialogsPage;

  // let dialogsElements = state.dialogs.map((dialog) => (
  //   <DialogItem name={dialog.name} id={dialog.id} />
  // ));
  // let messagesElements = state.messages.map((m) => (
  //   <Message message={m.message}  />
  // ));
  // let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body) => {
    // let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return ( <Dialogs 
    updateNewMessageBody={onNewMessageChange} 
    sendMessage={onSendMessageClick}
    dialogsPage={state} /> );
};

export default DialogsContainer;
