import { Row } from "../Row/Row";
import styles from "./List.module.less";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../../network/instance";
export default function ToDoList(props) {
  const { choose, list, onRefresh, onChooseChange } = props;
  const handleClick = (key) => {
    const item = [...list].find((e) => e.key === key);
    item.stocked === "doing"
      ? (item.stocked = "done")
      : (item.stocked = "doing");
    onChooseChange(item.stocked);
    instance({
      method: "post",
      url: "/updateTodo",
      data: item,
    })
      .then((res) => {
        console.log(res);
        onRefresh();
      })
      .catch((rej) => console.log(rej));
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setTextChange] = useState("");

  const handleRowEdit = (e) => {
    setIsModalVisible(true);
    const { name, key } = e;
    setTextChange({ name, key });
  };

  const handleOk = () => {
    // .find
    const item = [...list].find((e) => e.key === text.key);
    item.name = text.name;
    instance({
      method: "post",
      url: "/updateTodo",
      data: item,
    })
      .then((res) => {
        console.log(res);
        onRefresh();
      })
      .catch((rej) => console.log(rej));
    setIsModalVisible(false);
  };
  const nav = useNavigate();
  const handleDetail = (e) => {
    const { key, name, stocked } = e;
    nav({
      pathname: "/detail",
      search: `id=${key}&name=${name}&stocked=${stocked}`,
    });
  };
  return (
    <>
      <div className={styles.page}>
        {list.map((element) => {
          return (
            element.stocked === choose && (
              <Row
                element={element}
                key={element.key}
                listId={element.key}
                onRowEdit={handleRowEdit}
                onRowClick={handleClick}
                onRowDetail={handleDetail}
              />
            )
          );
        })}
      </div>
      <Modal
        visible={isModalVisible}
        text={text}
        onOk={handleOk}
        onIsModalVisibleChange={setIsModalVisible}
        onTextChange={setTextChange}
      />
    </>
  );
}
