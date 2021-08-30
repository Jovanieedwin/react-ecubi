import React, { useEffect, useState } from 'react';
import './App.css';
import DataList from './components/DataList';

import Curiosities from './components/Curiosities';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Data from './components/Data'
import NavBar from './components/NavBar';
function App() {
  const url = 'https://rickandmortyapi.com/api/character';
  const [data, setTodos] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json();
    setTodos(responseJson.results);
  }
  useEffect(() => {
    fetchApi()

  }, []);
  return (
    <div>
       <Router>
    <NavBar datalist={data} />
   
      <Switch>
        <Route path="/detalle/:id">
        <Data />
        </Route>
        <Route path="/datalist">
        <DataList datalist={data} />
        </Route>
        <Route path="/curiosities">
        <Curiosities/>
        </Route>

        <Route path="/">
        <DataList datalist={data} />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
