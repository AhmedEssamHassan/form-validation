import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/Login";
import { useEffect } from "react/cjs/react.development";

export const Appcontext = React.createContext();

function App() {
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var json = JSON.stringify(userToken);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: json,
    redirect: "follow",
  };

  const postData2 = async () => {
    let response = await fetch(
      "https://medtroops-backend.appssquare.com/api/admin/login",
      requestOptions
    );
    response = await response.json();
    setIsAuth(response.status);
    setUserToken(response.token);
    setUser(response);
  };

  /* const postData = async () => {
    fetch(
      "https://medtroops-backend.appssquare.com/api/admin/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setIsAuth(result.status);
        setUserToken(result.token);
        setUser(result);
      })
      .catch((error) => console.log("errorrrrr", error));
  };*/
  const validate = () => {
    postData2();
  };

  const logOut = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(userToken));
  }, [userToken]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken") || "";
    userToken ? setIsAuth(userToken) : isAuth(false);
  }, []);

  if (!isAuth) {
    return (
      <Appcontext.Provider>
        <Login
          validate={validate}
          hint={message}
          setUserToken={setUserToken}
          userToken={userToken}
        />
      </Appcontext.Provider>
    );
  } else
    return (
      <Appcontext.Provider value={user}>
        <div className="App">
          <nav className="d-flex justify-content-center align-items-center mb-5">
            <ul style={{ listStyle: "none" }} className="d-flex">
              <li className="m-3">home</li>
              <li className="m-3" onClick={logOut}>
                logout
              </li>
            </ul>
          </nav>

          <div className="container" style={{ overflow: "hidden" }}>
            <Router>
              <Route exact path="/" component={Home} />
            </Router>
          </div>
        </div>
      </Appcontext.Provider>
    );
}

export default App;
