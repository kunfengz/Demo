import { useState } from "react";

export default function useNumber(){
    const [num,setNum]=useState(0)
    return [num,setNum]
}