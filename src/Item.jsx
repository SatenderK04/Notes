import Button from "./Button";
import { useState } from "react";

function Item({ ItemList }) {
  const ActiveItems = { backgroundColor: "lightgreen" };
  const [activeItems, setActiveItems] = useState(
    new Array(ItemList.length).fill(false)
  );

  const handleOnClick = (index) => {
    setActiveItems((prevActiveItems) => {
      const newActiveItems = [...prevActiveItems];
      newActiveItems[index] = !newActiveItems[index];
      return newActiveItems;
    });
  };

  return (
    <>
      <ul className="list-group">
        {ItemList.map((item, index) => (
          <li
            className="list-group-item"
            style={activeItems[index] ? ActiveItems : {}}
            key={index}
          >
            {item}
            <Button handleOnClick={() => handleOnClick(index)}></Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Item;
