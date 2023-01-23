import DangerButton from "./DangerButton.jsx"
import { toCapatilized } from "../util"

export default function FoodList(props) { return (
    <ul className="h-3/5 overflow-auto">
      {props.foods.map((food, index) => 
        <ListItem key={index} food={food} handleItemDelete={props.handleItemDelete} index={index} />
      )}
    </ul>
  )
}

function ListItem(props) {
  const handleItemDelete = () => {
    props.handleItemDelete(props.index)
  }

  const titleCasedName = props.food.name.charAt(0) + props.food.name.substr(1).toLowerCase()

  return (
    <li className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <h4 className="m-2 text-2xl">{toCapatilized(props.food.name)}</h4>
        <div className="flex items-center text-slate-500">
          <p className="mx-2 truncate">Cal: {props.food.calories.toFixed(1)}</p>
          <p className="mx-2 truncate">Carb: {props.food.carbohydrates.toFixed(1)}</p>
          <p className="mx-2 truncate">Prot: {props.food.protein.toFixed(1)}</p>
          <p className="mx-2 truncate">Fat: {props.food.fat.toFixed(1)}</p>
        </div>
      </div>
      <DangerButton text="X" onClick={handleItemDelete} />
    </li>
  );
}
