import { useEffect, useState } from "react";
import api from "./services/api.js";

import Global from "./styles/global.js";
import { Container, Header, Main } from "./styles/Containers";
import Formulary from "./components/Formulary/index.jsx";
import ProductList from "./components/ProductList/index.jsx";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [listRender, setListRender] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => setListRender(products), [products]);

  return (
    <Container>
      <Global />
      <Header>
        <h1>
          <span>Burguer </span>Kenzie
        </h1>
        <Formulary list={products} setRender={setListRender} />
      </Header>
      <Main>
        <ProductList
          list={products}
          render={listRender}
          cart={cartProducts}
          setCart={setCartProducts}
          total={totalPrice}
          setTotal={setTotalPrice}
        />
        <Cart
          cart={cartProducts}
          setCart={setCartProducts}
          total={totalPrice}
          setTotal={setTotalPrice}
        />
      </Main>
    </Container>
  );
}

export default App;
