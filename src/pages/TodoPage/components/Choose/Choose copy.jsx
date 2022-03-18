import styles from './Choose.module.less'
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
      <div>
        <form className={styles .input}>
            <input
              {...commonProps}
              value="doing"
              id="r_1"
              onChange={handleChange}
              checked={choose === "doing"}
              />
              <label htmlFor="r_1">
            待办{" "}
          </label>
            <input
              {...commonProps}
              value="done"
              id="r_2"
              onChange={handleChange}
              checked={choose === "done"}
              />
              <label htmlFor="r_2">
            已完成{" "}
          </label>
        </form>
      </div>
    );
  }