import { CartListItem } from "./styles";

function CartItem({ item, cart, setCart }) {
  function handleRemove() {
    setCart(cart.filter((product) => product.id !== item.id));
  }

  return (
    <CartListItem>
      <figure>
        <img src="https://i.imgur.com/Vng6VzV.png" alt="" />
      </figure>
      <section>
        <div>
          <h4>{item.name}</h4>
          <span onClick={handleRemove}>Remover</span>
        </div>
        <p>{item.category}</p>
      </section>
    </CartListItem>
  );
}

export default CartItem;
