import { useEffect, useState } from "react";
import LoginPage from "./LoginPage.js"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import MainPage from "./MainPage.js"
import AboutPage from "./AboutPage.js"
import './index.css'
function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route exact path='/main' element={< MainPage />}></Route>
        </Routes>
      </Router>
    </div>
</>
  );

      }

export default App;
// {toggleButton?(<img className="fa fa-edit add-btn hello" src={Add} onClick={addItem}></img>
//                 ):(<img className="fa fa-plus add-btn hello1" src={Add} onClick={addItem}></img>)}