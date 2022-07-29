import Button from "../Button";
import { ProductCard, CardInfos } from "./styles";

function Product({ render, setCart }) {
  const currency = render.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <ProductCard>
      <figure>
        <img src={render.img} alt="" />
      </figure>
      <CardInfos>
        <h3>{render.name}</h3>
        <p>{render.category}</p>
        <span>{currency}</span>
        <Button type="submit" setCart={setCart}>
          Adicionar
        </Button>
      </CardInfos>
    </ProductCard>
  );
}

export default Product;
