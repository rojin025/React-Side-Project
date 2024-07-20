// import { formatCurrency } from "../../utils/helpers";
import { PizzaType } from "../../Types";

interface MenuItemProps {
  pizza: PizzaType;
}

function MenuItem({ pizza }: MenuItemProps) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  return (
    <li className="flex gap-4">
      <img src={imageUrl} alt={name} className="h-24" />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
