import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddItem from "./AddItem";
// import Counter from "./Counter";
import { useState } from "react";

function App() {
  let [ItemList, setItemList] = useState([]);

  let [ErrorText, setErrorText] = useState();
  let handleOnEnter = (event) => {
    let newItem = event.target.value;
    let ItemEntered;
    if (event.key == "Enter") {
      setItemList((ItemList) => [...ItemList, newItem]);
      ItemEntered = true;
    }
    if (ItemEntered) event.target.value = "";
  };
  return (
    <>
      <div className="container">
        <h1>Your Daily Tasks</h1>
        <AddItem handleOnEnter={handleOnEnter}></AddItem>
        <h4>{ErrorText}</h4>
        <Item ItemList={ItemList}></Item>
      </div>
    </>
  );
}

export default App;
