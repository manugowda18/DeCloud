import React, { useState } from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  SideBar,
  Loader,
  Home,
  MyImage,
  MyAudio,
  MyPDF,
  MyVideo,
  Files,
  Recent,
  Favourite,
  Trash,
  User,
  AddUser,
  UserList,
  Login,
  SignUp,
  Lock,
  Price,
  Error,
  Maintenance,
  Upload,
  Modal,
} from "../components/index";

const index = () => {
  const [openComponent, setOpenComponent] = useState("Home");
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  return (
    <div>
      {login ? (
        <div className="wrapper">
          <Login />
        </div>
      ) : signUp ? (
        <div className="wrapper">
          <Login />
        </div>
      ) : maintenance ? (
        <div className="wrapper">
          <Maintenance />
        </div>
      ) : (
        <div class="wrapper">
          <SideBar setOpenComponent={setOpenComponent} />
          <Header />
          {openComponent == "Home" ? (
            <Home />
          ) : openComponent == "MyImage" ? (
            <MyImage />
          ) : openComponent == "MyPDF" ? (
            <MyPDF />
          ) : openComponent == "MyAudio" ? (
            <MyAudio />
          ) : openComponent == "MyVideo" ? (
            <MyVideo />
          ) : openComponent == "Files" ? (
            <Files />
          ) : openComponent == "Recent" ? (
            <Recent />
          ) : openComponent == "Favourite" ? (
            <Favourite />
          ) : openComponent == "Trash" ? (
            <Trash />
          ) : openComponent == "User" ? (
            <User />
          ) : openComponent == "AddUser" ? (
            <AddUser />
          ) : openComponent == "UserList" ? (
            <UserList />
          ) : openComponent == "Price" ? (
            <Price />
          ) : openComponent == "Error" ? (
            <Error />
          ) : openComponent == "Upload" ? (
            <Upload />
          ) : (
            ""
          )}
          <Footer />
        </div>
      )}

      <Modal />
    </div>
  );
};

export default index;
