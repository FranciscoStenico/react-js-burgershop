import { useState } from "react";
import Button from "../Button";
import { ProductCard, CardInfos } from "./styles";

function Product({ render, cart, setCart, total, setTotal }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    setCount(count + 1);

    const cartItem = {
      id: render.id,
      name: render.name,
      category: render.category,
      price: render.price,
      img: render.img,
      quantity: count,
      reset: resetCount,
    };

    if (cart.some(({ id }) => id === render.id)) {
      setCart([
        ...cart.map((item) => (item.id === render.id ? cartItem : item)),
      ]);
    } else {
      setCart([...cart, cartItem]);
    }

    setTotal(total + cartItem.price);
  }

  function resetCount() {
    setCount(1)
  }

  const currency = render.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ProductCard>
      <figure>
        <img src={render.img} alt={render.name} />
      </figure>
      <CardInfos>
        <h3>{render.name}</h3>
        <p>{render.category}</p>
        <span>{currency}</span>
        <Button handler={handleAdd} type="submit">
          Adicionar
        </Button>
      </CardInfos>
    </ProductCard>
  );
}

export default Product;
