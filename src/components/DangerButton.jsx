export default function DangerButton(props) {
  return (
    <button type="button" className="p-1 m-2 h-12 w-12 rounded-lg text-white bg-red-500 shadow-md" onClick={props.onClick}>{props.text}</button>
  )
}
