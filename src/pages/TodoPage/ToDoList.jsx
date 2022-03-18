import { useState,useMemo } from "react";
import { products } from "./products";
import Text from "./components/Text/Text";
import Choose from "./components/Choose/Choose";
import List from "./components/List/List";
import styles from "./ToDoList.module.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {getTodoList} from '../../service/Todo'

export default function MyApp() {
  const [text, setTextChange] = useState("");
  const [choose, setChooseChange] = useState("doing");
  const [list, setListChange] = useState(products);

function refreshList(){
  getTodoList().then((res) => {
    setListChange(res.data);
  })
}


  useEffect(() => {
    refreshList();
  }, []);


  const sortedList = useMemo(() => {
    return list.sort((a, b) => b.key - a.key)
  },[list]);


  // const [searchParams] = useSearchParams()
  // console.log("searchParams",searchParams.get("id"),typeof searchParams.get("id"))

  //----------

  //   const handleListChange = (newList) => setListChange(newList);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.title}>TodoList</div>
        <Text
          extraClass="extra-search-class"
          text={text}
          choose={choose}
          onChooseChange={setChooseChange}
          onTextChange={setTextChange}
          onRefresh={refreshList}
        />
        <br />
        <Choose choose={choose} onChooseChange={setChooseChange} />
        <br />
        <List
          choose={choose}
          list={sortedList}
          onChooseChange={setChooseChange}
          onRefresh={refreshList}
        />
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Lamp">Lamp</Link>
        </div>
      </div>
    </>
  );
}
