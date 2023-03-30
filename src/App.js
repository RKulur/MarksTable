import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import UseState from "./components/UseState";
import Marks from "./components/Marks";
import Test from "./components/Test";
import UseEffect from "./components/UseEffect";
import Timer from "./components/Timer";
import PropDrilling from "./components/PropDrilling";
import Context from "./components/Context";

function App() {
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element= {<Home/>} />
            <Route exact path='/form' element= {<Form/>} />
            <Route exact path='/usestate' element= {<UseState/>} />
            <Route exact path='/marks' element= {<Marks/>} />
            <Route exact path='/test' element= {<Test/>} />
            <Route exact path='/useeffect' element= {<UseEffect/>} />
            <Route exact path='/timer' element= {<Timer/>} />
            <Route exact path='/pd' element= {<PropDrilling/>} />
            <Route exact path='/context' element= {<Context/>} />
            <Route exact path='*' element= {<Error/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
