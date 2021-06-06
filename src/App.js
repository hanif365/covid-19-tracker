import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';

export const DataContext = createContext();

function App() {

  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    fetch('https://corona-api.com/timeline')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        // console.log(data.data);
        const firstSixData = data.data.slice(0, 6);
        setTimelines(firstSixData);
      })
  }, [])
  return (
    <DataContext.Provider value={[timelines, setTimelines]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
