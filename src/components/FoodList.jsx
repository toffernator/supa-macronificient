import DangerButton from "./DangerButton.jsx"

export default function FoodList(props) {
  return (
    <ul className="h-3/5 overflow-auto">
      {props.foods.map((item, index) => 
        <ListItem key={index} name={item.name} handleItemDelete={props.handleItemDelete} index={index} />
      )}
    </ul>
  )
}

function ListItem(props) {
  let myHandleItemDelete = () => {
    props.handleItemDelete(props.index)
  }

  const titleCasedName = props.name.charAt(0) + props.name.substr(1).toLowerCase()

  return (
    <li className="flex flex-row justify-between">
      <h4 className="m-2 text-2xl">{titleCasedName}</h4>
      <DangerButton text="X" onClick={myHandleItemDelete} />
    </li>
  );
}
