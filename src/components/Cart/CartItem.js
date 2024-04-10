import { addItemsToCart, removeItemsFromCart } from "../store/cartSlice";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const { name, quantity, totalPrice, price } = item;
  const handleAdd = () => {
    dispatch(
      addItemsToCart({
        id: name,
        title: name,
        price: price,
      })
    );
  };
  const handleRemove = () => {
    dispatch(removeItemsFromCart(name));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
