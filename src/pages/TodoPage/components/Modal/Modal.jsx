import styles from "./Modal.module.less";

export default function Modal(props) {
  const { text, visible, onOk,onIsModalVisibleChange,onTextChange} = props;
  let {name}=text
  const handleOk=()=>{
    onOk(text)
  }
  const handleCancel = () => {
    onIsModalVisibleChange(false);
  };
  const handleChange = (e) => {
    const name = e.target.value;
    const {key}=text
    const newText={name,key}
    onTextChange(newText);
  };
  return (
    <>
      <div
        className={`${styles.modal} ${visible ? styles.show : styles.hidden}`}
      >
        <form>
          <input
            type="text"
            value={name||''}
            placeholder="请输入修改内容"
            onChange={handleChange}
            maxLength={50}
          ></input>
          <button type="button" onClick={handleOk}>
            确定
          </button>
          <button type="button" onClick={handleCancel}>
            取消
          </button>
        </form>
      </div>
    </>
  );
}
