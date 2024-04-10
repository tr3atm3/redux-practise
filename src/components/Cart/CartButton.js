import { toggleCart } from "../store/cartSlice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const quantity = cartItems.reduce((acc, cur) => cur.quantity + acc, 0);
  const handleBtnClick = () => {
    dispatch(toggleCart());
  };
  return (
    <button className={classes.button} onClick={handleBtnClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
