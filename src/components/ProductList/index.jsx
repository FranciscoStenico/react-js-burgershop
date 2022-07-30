import Product from "../Product";
import { List } from "./styles";

function ProductList({ render, cart, setCart, total, setTotal }) {
  return (
    <List>
      {!render.length ? (
        <h1>Nenhum produto encontrado!</h1>
      ) : (
        render &&
        render.map((product) => (
          <Product
            key={product.id}
            render={product}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        ))
      )}
    </List>
  );
}

export default ProductList;
