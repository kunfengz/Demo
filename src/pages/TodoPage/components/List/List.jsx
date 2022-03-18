import { Row } from "../Row/Row";
import styles from "./List.module.less";
// import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import instance from "../../../../network/instance";
import { List, Modal, Input, Switch } from "antd";

const Footer = (props) => {
  const { loading, onCancel, onOk } = props;
  return (
    <div>
      <Button onClick={onCancel}>取消</Button>
      <Button loading={loading} disabled={loading} onClick={onOk} type="primary">
        提交1223
      </Button>
    </div>
  );
};

export default function ToDoList(props) {
  const { choose, list, onRefresh, onChooseChange } = props;
  const [text, setTextChange] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false); // 判断是否加载请求

  const handleClick = (key) => {
    //切换事件待办、完成
    const item = [...list].find((e) => e.key === key);
    item.stocked === "doing"
      ? (item.stocked = "done")
      : (item.stocked = "doing");
   
    instance({
      method: "post",
      url: "/updateTodo",
      data: item,
    })
      .then((res) => {
        console.log(res);
        onChooseChange(item.stocked);
        setTextChange(item);
        onRefresh();
      })
      .catch((rej) => console.log(rej))

  };

  const handleRowEdit = (e) => {
    //弹窗
    const { name, key, stocked } = e;
    setTextChange({ name, key, stocked });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    //弹窗点击确定
    // .find
    const item = [...list].find((e) => e.key === text.key);
    item.name = text.name;
    setLoading(true);
    instance({
      method: "post",
      url: "/updateTodo",
      data: item,
    })
      .then((res) => {
        console.log(res);
        onRefresh();
        setIsModalVisible(false);
        setTextChange("")
      })
      .catch((rej) => console.log(rej))
      .finally(() => setLoading(false));

  };
  const nav = useNavigate();
  const handleDetail = (e) => {
    //跳转详情
    const { key, name, stocked } = e;
    nav({
      pathname: "/detail",
      search: `id=${key}&name=${name}&stocked=${stocked}`,
    });
  };
  const handleCancel = () => {
    //关闭弹窗
    setIsModalVisible(false);
  };
  let { name } = text;
  const handleChange = (e) => {
    //弹窗文本框输入修改text状态
    const name = e.target.value;
    const { key, stocked } = text;
    console.log(text);
    const newText = { name, key, stocked };
    setTextChange(newText);
  };
  const handleSwitchChange = () => {
    //弹窗Switch切换事件状态
    handleClick(text.key);
  };
  return (
    <>
      <div className={styles.page}>
        <List
          dataSource={list}
          renderItem={(element) =>
            element.stocked === choose && (
              <List.Item>
                <Row
                  element={element}
                  key={element.key}
                  onRowEdit={handleRowEdit}
                  onRowClick={handleClick}
                  onRowDetail={handleDetail}
                ></Row>
              </List.Item>
            )
          }
        ></List>
      </div>
      {/* 
      <Modal
        visible={isModalVisible}
        text={text}
        onOk={handleOk}
        onIsModalVisibleChange={setIsModalVisible}
        onTextChange={setTextChange}
      /> */}
      <Modal
        title="修改事项"
        okText="确定"
        cancelText="取消"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        footer={
          <Footer loading={loading} onOk={handleOk} onCancel={handleCancel} />
        }
      >
        <Input
          type="text"
          value={name || ""}
          placeholder="请输入修改内容"
          onChange={handleChange}
          maxLength={50}
        ></Input>
        <Switch
          checked={text.stocked === "done"}
          checkedChildren="已完成"
          unCheckedChildren="待办"
          // onClick={handleSwitchChange}
        ></Switch>
      </Modal>
    </>
  );
}
