import styles from './Choose.module.less'
import { Radio } from "antd";
import 'antd/dist/antd.css';
export default function Choose({ choose, onChooseChange }) {
    const handleChange = (e) => {
      // console.log("val>",e.target.value,typeof e.target.value)
      onChooseChange(e.target.value);
    };
  
    const commonProps = {
      name: "thing",
      type: "radio",
    };
  
    return (
      <div className={styles .choose}>
        <Radio.Group onChange={handleChange} value={choose} buttonStyle="solid">
            <Radio.Button value={"doing"}>待办</Radio.Button>
            <Radio.Button value={"done"}>已完成</Radio.Button>
        </Radio.Group>
      </div>
    );
  }