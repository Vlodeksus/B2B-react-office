import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Content/ContentInfo/ProfileInfo";
import Catalog from "./components/Content/Catalog/Catalog";
import Orders from "./components/Content/Orders/Orders";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Profile from "./components/Content/ContentInfo/ProfileInfo";
import ProfileInfo from "./components/Content/ContentInfo/ProfileInfo";
import ProfileInfoContainer from "./components/Content/ContentInfo/ProfileInfoContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";

const App = (props) => {
//   let posts = [
//     {id: 1, message: 'Привіт, як справи?', likesCount: 23},
//     {id: 2, message: 'Дякую, все гаразд', likesCount: 19}
// ]

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/profile"
            element={<ProfileInfoContainer 
              store={props.store}
              // posts={props.state.mainPage.posts}
              // newPostText={props.state.mainPage.newPostText}
              //Заміняємо addPost на dispatch а updateNewPostText видаляємо бо він є в dispatch
              // dispatch={props.dispatch}
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText}
              // messages={props.State}
                             />}
          />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/dialogs/*"
            element={
              <DialogsContainer dialogs={props.state.dialogsPage.dialogs} 
                messages={props.state.dialogsPage.messages}
                store={props.store}
                // dialogs={props.appState}
                // messages={props.addMessage}
                
                
              />
            }
          />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;
