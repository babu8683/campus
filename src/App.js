import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Routeing from "../src/Ra";

function App() {
  return (
    <Provider store={store}>
      <Routeing />
    </Provider>
  );
}
export default App;
