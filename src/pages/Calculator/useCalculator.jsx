import { useEffect, useState } from "react";

export default function useCalculator() {
  const [number, setNumber] = useState([0, 0]); //参与运算的两个数
  const [numIndex, setNumIndex] = useState(0); //当前所在数字索引
  const [isCount, setIsCount] = useState(false); //是否完成计算
  const [operator, setOperator] = useState(""); //运算符
  const [isBan, setIsBan] = useState(false); //是否禁止运算符按钮
  const [text, setText] = useState("0");
  useEffect(() => {
    //当三个状态改变时修改text状态
    if (numIndex === 0) {
      setText(number[0]);
    } else {
      setText(number[0] + operator + number[1]);
    }
  }, [number, operator, numIndex]);
  function numberChange(num) {
    //点击数字
    if (isBan) {
      setIsBan(false);
    }
    if (number[numIndex].toString().length === 16) {
      //限制长度
      return;
    }
    const newNumber = { ...number };
    if (!isCount) {
      //不是运算结果时点击数字在当前数字后加上输入的数字
      newNumber[numIndex] = Number(newNumber[numIndex] + num);
    } else {
      //是运算结果时直接显示输入的数字并修改isCount状态
      newNumber[numIndex] = num;
      setIsCount(false);
    }
    setNumber(newNumber);
  }
  function operatorChange(ope) {
    //点击运算符
    if (numIndex === 0) {
      //如果处于第一个数字，点击运算符索引指向第二个数
      setOperator(ope);
      setNumIndex(1);
    } else {
      if (number[1] != 0) {
        //如果第二个数不是0时点击运算符，则计算结果
        setResult();
        setNumIndex(1);
      }
      setOperator(ope);
      //处于第二个数，点击运算符计算结果后索引指向第二个数字
    }
  }
  function setResult() {
    //计算
    if (operator === "/" && number[1] === 0) {
      //判断除号后为0时 禁用按钮状态 提示
      setText("除数不能为0");
      setIsBan(true);
    } else {
      setNumber([eval(text), 0]);
      setIsCount(true);
      setNumIndex(0);
      setOperator("");
    }
  }
  function setReset() {
    //恢复初始状态
    setNumber([0, 0]);
    setNumIndex(0);
    setIsCount(false);
    setOperator("");
    setIsBan(false);
  }
  function setBack() {
    const newNumber = { ...number };
    if (!isCount) {
      newNumber[numIndex] = parseInt(newNumber[numIndex] / 10);
    }
    console.log(newNumber);
    setNumber(newNumber);
  }
  return [
    //number,
    text,
    isBan,
    numberChange,
    operatorChange,
    setResult,
    setReset,
    setBack,
  ];
}
