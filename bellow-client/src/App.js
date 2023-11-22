import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BellowList from "./components/BellowList";
import NewBellow from "./components/NewBellow";
import { BellowProvider } from "./contexts/BellowProvider";
import { UserProvider } from "./contexts/UserProvider";
import EditBellow from "./components/EditBellow";
import Home from "./Navbar";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserProvider>
      <BellowProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />}>
                <Route index element={<SignIn />} />
                <Route path="/bellow/edit/:id" element={<EditBellow />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/bellow/new" element={<NewBellow />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/bellow" element={<BellowList />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </BellowProvider>
    </UserProvider>
  );
}

export default App;
