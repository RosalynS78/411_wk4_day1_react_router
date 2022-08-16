import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
// Write imports for Router & BrowserRouter here //
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

// tie store, state and reducers
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
<Provider store={store}> 
  <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
</Provider>
    );
}

export default App;
