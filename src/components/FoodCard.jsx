import DangerButton from "./DangerButton";

export default function FoodCard(props) {
  return (
    <div className="flex flex-row justify-between">
      <h4 className="m-2 text-2xl">{props.title}</h4>
      <DangerButton text="X" />
    </div>
  )
}
