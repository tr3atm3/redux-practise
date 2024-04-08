import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";

import { useSelector } from "react-redux";

function App() {
  const cartInfo = useSelector((store) => store.cart);
  return (
    <Layout>
      {cartInfo.isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
