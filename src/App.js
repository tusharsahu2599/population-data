import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddData/AddData";
import EditContact from "./components/EditData/EditData";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
