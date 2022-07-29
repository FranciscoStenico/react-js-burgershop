import { EmptyCart, LoadedCart, ProductCart } from "./styles";

function Cart({ cart }) {
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
            <ul>
              <li>
                <figure><img src="https://i.imgur.com/Vng6VzV.png" alt="" /></figure>
                <section>
                  <div>
                    <h4>Milkshake Ovo Maltine</h4>
                    <span>Remover</span>
                  </div>
                  <p>Sanduíches</p>
                </section>
              </li>
              
            </ul>
            <section>
              <div>
                <h6>Total</h6>
                <span>R$0.00</span>
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
