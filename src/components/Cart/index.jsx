import { useEffect, useState } from "react";
import CartItem from "../CartItem";
import { CartList, EmptyCart, LoadedCart, ProductCart } from "./styles";

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);
  const currency = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    setTotal(
      !cart.length
        ? 0
        : cart.reduce((acc, cur) =>
            !acc.price ? acc + cur.price : acc.price + cur.price
          )
    );
  }, [cart]);

  return (
    <ProductCart>
      <h1>Carrinho de compras</h1>
      {!cart.length ? (
        <EmptyCart>
          <h4>Carrinho vazio</h4>
          <p>Adicione Itens</p>
        </EmptyCart>
      ) : (
        <>
          <LoadedCart>
            <CartList>
              {cart &&
                cart.map((item) => (
                  <CartItem item={item} cart={setCart} setCart={setCart} />
                ))}
            </CartList>
            <section>
              <div>
                <h6>Total</h6>
                <span>{currency}</span>
              </div>
              <button>Remover todos</button>
            </section>
          </LoadedCart>
        </>
      )}
    </ProductCart>
  );
}

export default Cart;
