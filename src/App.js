import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import { AiOutlineReload } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { decrement,incrementByAmount, resetCount, increment } from './redux/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()



  return (
    <div className="app">
      <NavBar />
      <h1>Count here {count}</h1>


      <div className="btnSet">
        <button onClick={() => dispatch(increment())} className="button">+</button>
        <button onClick={() => dispatch(incrementByAmount(1000))} className="button">+1000</button>
        <button onClick={() => dispatch(incrementByAmount(-1000))} className="button">-1000</button>
        <button onClick={() => dispatch(decrement())} className="button">-</button>
        <button onClick={() => dispatch(resetCount())} className="button"><AiOutlineReload /></button>
      </div>
    </div>
  );
}

export default App;
