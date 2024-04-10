import Card from "../UI/Card";
import { addItemsToCart } from "../store/cartSlice";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const handleAddBtn = () => {
    dispatch(
      addItemsToCart({
        id: title,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddBtn}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
