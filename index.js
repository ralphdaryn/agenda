import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />, <Header />, <CreateArea />, <Footer />, <Note />);
