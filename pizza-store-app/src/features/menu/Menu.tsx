import { useLoaderData } from "react-router-dom";

import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

import { PizzaType } from "../../Types";

function Menu() {
  const menu: PizzaType[] = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

/**
 * Render as you fetch strategy
 */
export async function loader() {
  const menu: Menu[] = await getMenu();
  return menu;
}

export default Menu;
