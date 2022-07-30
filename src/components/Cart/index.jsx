// import { useEffect, useState } from "react";
import CartItem from "../CartItem";
import { CartList, EmptyCart, LoadedCart, ProductCart } from "./styles";

function Cart({ cart, setCart, total, setTotal }) {
  function formatCurrency() {
    return total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  function handleCartCleaning() {
    setCart([]);
    setTotal(0);
  }

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
                  <CartItem
                    key={item.id}
                    item={item}
                    cart={cart}
                    setCart={setCart}
                    total={total}
                    setTotal={setTotal}
                  />
                ))}
            </CartList>
            <section className="cart-details">
              <div>
                <h6>Total</h6>
                <span>{formatCurrency()}</span>
              </div>
              <button onClick={handleCartCleaning}>Remover todos</button>
            </section>
          </LoadedCart>
        </>
      )}
    </ProductCart>
  );
}

export default Cart;
