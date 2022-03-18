import { useState } from "react";

export default function useCalculator() {

  // const countMap = {
  //   "+": (a, b) => a + b,
  //   "-": (a, b) => a + b,
  //   "*": (a, b) => a + b,
  //   "/": (a, b) => a + b,
  // };
  
  const [state, setState] = useState({ 
    number: [0, 0],
    text: "0",//显示文本
    isCount: false,//是否完成计算
    numState: 0,//当前所在数字索引
    operator: "",//运算符
  });
  const [number,setNumber]=useState([0,0,0])//参与运算的两个数与当前所在的索引
  function setNumber(num) {
    const newState = { ...state };
    if (state.isCount === false) {
      newState.number[newState.numState] = Number(
        newState.number[newState.numState] + num
      );
    } else {
      console.log("isCount");
      newState.number[newState.numState] = num;
      newState.isCount = false;
    }
    if (newState.numState === 0) {
      console.log("numState===0");
      newState.text = newState.number[newState.numState].toString();
    } else {
      console.log("numState!==0");
      newState.text =
        newState.number[0].toString() +
        newState.operator +
        newState.number[1].toString();
    }
    setState(newState);
  }
  function setOperator(ope) {
    if (state.numState === 1) {
      console.log("1111");
      const newState = setResult();//第二个数点运算符计算结果再把
      newState.text += ope;
      newState.operator = ope;
      newState.numState = 1;
      newState.isCount = false;
      setState(newState);
    } else {
      const newState = { ...state };
      if (newState.operator === "") {
        newState.text += ope;
      } else {
        const textArr = newState.text.split("");
        textArr.splice(-1, 1, ope);
        newState.text = textArr.join("");
      }
      newState.operator = ope;
      newState.numState = 1;
      newState.isCount = false;
      setState(newState);
    }
  }
  function setResult() {
    console.log("setResult");
    let result;
    const newState = { ...state };
    if (state.operator === "+") {
      console.log("+");
      result = state.number[0] + state.number[1];
    } else if (state.operator === "-") {
      console.log("-");
      result = state.number[0] - state.number[1];
    } else if (state.operator === "*") {
      console.log("*");
      result = state.number[0] * state.number[1];
    } else if (state.operator === "/") {
      console.log("/");
      if (state.number[1] === 0) {
        newState.text = "除数不能为0";
        setState(newState);
        return;
      }
      result = state.number[0] / state.number[1];
    }
    //计算成功,修改状态
    newState.isCount = true;
    newState.text = result;
    newState.operator = "";
    newState.number = [result, 0];
    newState.numState = 0;
    setState(newState);
    return newState;
  }
  function setReset() {
    setState({
      number: [0, 0],
      text: "0",
      isCount: false,
      numState: 0,
      operator: "",
    });
  }
  function setBack() {
    const newState = { ...state };
    if (newState.isCount === false) {
      newState.number[newState.numState] = parseInt(
        newState.number[newState.numState] / 10
      );
      if (newState.numState === 0) {
        newState.text = newState.number[newState.numState].toString();
      } else {
        newState.text =
          newState.number[0].toString() +
          newState.operator +
          newState.number[1].toString();
      }
      setState(newState);
    }
  }
  return [state, setNumber, setOperator, setResult, setReset, setBack];
}
