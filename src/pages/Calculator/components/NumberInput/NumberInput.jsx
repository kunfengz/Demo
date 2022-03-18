import { useState } from "react";
import useNumber from "./useNumber";

export default function NumberInput(props){
    const {num,setNum}=props

    function handleNum(e){
        const {value}=e.target
        console.log(Number(num+value));
        setNum(num+value)    
    }
    

    return(
        <div>
            <button value={1} onClick={handleNum}>1</button>
            <button value={2} onClick={handleNum}>2</button>
            <button value={3} onClick={handleNum}>3</button>
            <button value={4} onClick={handleNum}>4</button>
            <button value={5} onClick={handleNum}>5</button>
            <button value={6} onClick={handleNum}>6</button>
            <button value={7} onClick={handleNum}>7</button>
            <button value={8} onClick={handleNum}>8</button>
            <button value={9} onClick={handleNum}>9</button>
            <button value={0} onClick={handleNum}>0</button>
        </div>
    )
}