import { CartItemInfos, CartListItem } from "./styles";

function CartItem({ item, cart, setCart, total, setTotal }) {
  function handleRemove() {
    setCart(cart.filter((product) => product.id !== item.id));
    
    setTotal(total - (item.price * item.quantity))
    item.reset()
  }

  return (
    <CartListItem>
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      <CartItemInfos>
        <div>
          <h4>{item.name}</h4>
          <button onClick={handleRemove}>Remover</button>
        </div>
        <p>{item.category}</p>
        <span>{item.quantity}</span>
      </CartItemInfos>
    </CartListItem>
  );
}

export default CartItem;
