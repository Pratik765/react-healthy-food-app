import { useState } from "react";
import styles from "./Container.module.css";
import FoodItemsList from "./FoodItemsList";
import EmptyPara from "./EmptyPara";

const Container = () => {
  const [foodItem, setfoodItem] = useState([]);

  const handleOnChange = (event) => {
    // setfoodItem(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newItems = [...foodItem, event.target.value];
      setfoodItem(newItems);
      console.log(newItems);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Healthy Food Items</h1>
      <input
        type="text"
        placeholder="Enter Food item"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      {/* <EmptyPara foodItem={foodItem} /> */}
      <FoodItemsList foodItem={foodItem} bought="active" />
    </div>
  );
};
export default Container;
