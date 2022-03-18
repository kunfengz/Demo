import axios from 'axios';
import styles from './Text.module.less'
import instance from "../../../../network/instance";
import { Input ,Button} from 'antd';
export default function Text(props) {
    const { text,extraClass='', onTextChange,choose, onRefresh,onChooseChange} = props;
    const handleChange = (e) => {
      const { value } = e.target;
      // onTextChange(e.target.value);
      onTextChange(value);
    };
    const handleSubbmit = () => {
      const newText={
        name: text,
        stocked: "doing"
      }
      instance({
        method:"post",
        url:"/createTodo",
        data:
          newText
      }).then((res)=>{
        console.log(res)
        onRefresh()
      }).catch((rej)=>console.log(rej))
      choose==="done"&&onChooseChange("doing")
      onTextChange("");
    };
    return (
      <>
      <div className={`${styles.search} ${extraClass}`}>
        <form>
          {/* <span>{text}</span><br /> */}
          <Input
            type="text"
            value={text}
            placeholder="请输入需要完成的事项"
            onChange={handleChange}
            maxLength={50}
          ></Input>
          <Button type="primary" onClick={handleSubbmit}>
            添加
          </Button>
        </form>
        </div>
      </>
    );
  }