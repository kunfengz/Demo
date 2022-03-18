import styles from "./Row.module.less";
import { Button} from 'antd';
export function Row(props) {
    // console.log(element.name+" "+listId+" "+typeof listId);
    const { element, onRowClick ,onRowEdit,onRowDetail} = props;
    const handleRowChange = () => {
      onRowClick(element.key)
    };
    const handleRowEdit=()=>{
      onRowEdit(element)
    }
    const handleRowDetail=()=>{
      onRowDetail(element)
    }
    return (
      <div className={styles .row}>
        <div id={element.key} className={styles .text}>
        {/* onClick={handleRowDetail} */}
          {element.name}
        </div>
        <div className={styles .button}>
          <Button  className='edit' onClick={handleRowEdit}>修改</Button>
          <Button  className='change' onClick={handleRowChange}>完成</Button>
        </div>
      </div>
    );
  }