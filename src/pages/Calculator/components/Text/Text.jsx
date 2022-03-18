import useText from "./useText"

export default function Text(){
    const [text,setText]=useText()
    return(
        <div>
            {text}
        </div>
    )
}