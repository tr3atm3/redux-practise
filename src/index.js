import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./components/store/appStore";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
