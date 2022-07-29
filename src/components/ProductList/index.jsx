import Product from "../Product";
import { List } from "./styles";

function ProductList({ state, render, cart, setCart }) {
  return (
    <List>
      {render &&
        render.map((product) => (
          <Product render={product} key={product.id} setCart={setCart} />
        ))}
    </List>
  );
}

export default ProductList;
