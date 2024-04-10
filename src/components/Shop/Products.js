import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    title: "test2",
    price: 10,
    description: "This is a second product",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
