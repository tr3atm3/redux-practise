import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const cartInfo = useSelector((store) => store.cart);
  const [isUpdatingData, setIsUpdatingData] = useState(false);
  const [isUploadedSuccess, setIsUploadedSuccess] = useState(false);
  const [isUploadedDenied, setIsUploadedDenied] = useState(false);

  useEffect(() => {
    setIsUpdatingData(true);
    fetch(
      "https://react-deployment-demo-f24d5-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cartInfo) }
    )
      .then((res) => {
        setIsUpdatingData(false);
        if (!res.ok) {
          throw new Error(res.message);
        }
        return res.json();
      })
      .then((data) => setIsUploadedSuccess(true))
      .catch((err) => setIsUploadedDenied(true));
  }, [cartInfo]);
  const styleClass = {
    backgroundColor: isUpdatingData
      ? "blue"
      : isUploadedSuccess
      ? "green"
      : isUploadedDenied
      ? "red"
      : "",
  };
  return (
    <>
      <div className="sent" style={styleClass}>
        <p>
          {isUpdatingData
            ? "Sending..."
            : isUploadedSuccess
            ? "Success"
            : isUploadedDenied
            ? "Error!"
            : ""}
        </p>
        <p>
          {isUpdatingData
            ? "Sending Cart Data"
            : isUploadedSuccess
            ? "Cart data sent successfully"
            : isUploadedDenied
            ? "Sending Cart data failed"
            : ""}
        </p>
      </div>
      <Layout>
        {cartInfo.isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
