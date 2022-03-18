import * as React from "react"
import Lamp from "./pages/LampPage/Lamp"
import ToDoList from "./pages/TodoPage/ToDoList"
import Detail from "./pages/TodoPage/components/Detail/detail"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {useNavigate} from 'react-router'
import Count from './pages/CountPage/Count'
import { Button } from "antd";
import Calculator from "./pages/Calculator/Calculator";
// import 'antd/dist/antd.css';


export default function App(){
    return(
        <div>
            <Routes>
                {/* <Route path="/" element={<Layout/>}></Route> */}
                <Route path="/" element={<Calculator/>}></Route>
                <Route path="/todo" element={<ToDoList/>}></Route>
                <Route path="/lamp" element={<Lamp/>}></Route>
                <Route path="/count" element={<Count/>}></Route>
                <Route path="/detail" element={<Detail/>}></Route>
            </Routes>
        </div>
    )
}

function Layout(){
    const nav = useNavigate()
    const goTodo = () => {
        const id=5
        const num=55
       nav({
           pathname:"/todo",
           search:"?id=5&num=20"
       })
    }
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        {/* <Link to="/todo">ToDo</Link> */}
                        <Button type="primary" onClick={goTodo}>ToDo</Button>
                    </li>
                    <li>
                        <Button href="/lamp">Lamp</Button>
                    </li>
                    <li>
                        <Button href="/count">Count</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}