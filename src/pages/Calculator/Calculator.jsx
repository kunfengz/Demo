import useCalculator from "./useCalculator";
import { Button, Input } from "antd";
import styles from "./Calculator.module.less";
const buttonList = [
  { value: "/" ,type: "operator"},
  { value: "*" ,type: "operator"},
  { value: "7", type: "number" },
  { value: "8", type: "number" },
  { value: "9", type: "number" },
  { value: "-" ,type: "operator"},
  { value: "4", type: "number" },
  { value: "5", type: "number" },
  { value: "6", type: "number" },
  { value: "+" ,type: "operator"},
  { value: "1", type: "number" },
  { value: "2", type: "number" },
  { value: "3", type: "number" },
  { value: "0", type: "number" },
];

export default function Calculator() {
    const [text ,isBan,numberChange,operatorChange, setResult, setReset, setBack] =
    useCalculator();
  function handleNum(value) {
    numberChange(value);
  }
  function handleOperater(value) {
    console.log("handleOperater",value);
    operatorChange(value)
  }
  return (
    <>
      <div className={styles .calculator}>
        <div>
        <div className={styles .input}>
      <Input value={text} />
        </div>
      <div className={styles .button}>
        <Button value={"C"} onClick={setReset}>
          C
        </Button>
        <Button value={"<"} onClick={setBack}>
          &lt;
        </Button>
          {
            buttonList.map(({value,type})=>{
              return (
                type==="number"?
                <Button key={value} onClick={() => handleNum(value)}>
                  {value}
                </Button>
                :
                <Button key={value} onClick={() => handleOperater(value)} disabled={isBan}>
                  {value}
                </Button>
              );
            })
          }
        <Button value={"="} onClick={setResult}>
          =
        </Button>
      </div>
      </div>
      </div>
    </>
  );
}
