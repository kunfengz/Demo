import { useState } from "react";

export default function useText(){
    const [text,setText]=useState(0)

    return [text,setText]
}