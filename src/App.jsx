import { useEffect, useState } from "react";
import api from "./services/api.js";

import Global from "./styles/global.js";
import { Container, Header, Main } from "./styles/Containers";
import Formulary from "./components/Formulary/index.jsx";
import ProductList from "./components/ProductList/index.jsx";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(["la"]);
  const [listRender, setListRender] = useState([]);

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
        <Formulary setRender={setListRender} />
      </Header>
      <Main>
        <ProductList
          state={products}
          render={listRender}
          cart={cartProducts}
          setCart={setCartProducts}
        />
        <Cart cart={cartProducts} />
      </Main>
    </Container>
  );
}

export default App;
