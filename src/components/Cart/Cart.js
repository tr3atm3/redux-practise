import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length >= 1 &&
          cartItems.map((item) => <CartItem item={item} />)}
      </ul>
    </Card>
  );
};

export default Cart;
