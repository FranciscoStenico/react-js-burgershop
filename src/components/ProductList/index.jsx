import Product from "../Product";
import { List } from "./styles";

function ProductList({ state, render, cart, setCart }) {
  return (
    <List>
      {!render.length 
        ? <h1>Nenhum produto encontrado!</h1> 
        : render &&
        render.map((product) => (
          <Product render={product} key={product.id} cart={cart} setCart={setCart} />
        ))}
    </List>
  );
}

export default ProductList;
