import { useReducer } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import useLamp from "./useLamp";


export default function Lamp() {
  const [state,dispatch]=useLamp()
  return (
    <>
      Color:{state.color}
      <br />
      {/* <button onClick={()=>dispatch({type:'change'})}>change</button> */}
      <button onClick={dispatch}>change</button>
      <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  );
}
