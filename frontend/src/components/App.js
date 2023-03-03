import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Container from "./layout/Container";
import { store } from "../store/store";

import Dashboard from "./layout/Dashboard";
import PrivateRoute from "./Common/PrivateRoute";
import Alert from "./layout/Alert";
import Register from "./Accounts/Register";
import Login from "./Accounts/Login";

const alertOptions = {
  position: "top center",
  timeout: 3000,
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Header />
            <Alert />
            <Container>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
              </Routes>
            </Container>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
