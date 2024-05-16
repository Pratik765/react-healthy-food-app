import styles from "./FoodItemsList.module.css";
const FoodItemsList = ({ foodItem, bought }) => {
  return (
    <ul className={`${styles.m} list-group`}>
      {foodItem.map((item) => {
        return (
          <>
            <li className={`list-group-item ${bought}`}>
              {item}
              <button type="button" className={`btn btn-success `}>
                Add
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};
export default FoodItemsList;
