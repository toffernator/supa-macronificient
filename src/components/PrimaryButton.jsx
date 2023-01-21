export default function PrimaryButton(props) {
  return (
    <button type="button" className="p-1 m-2 w-11/12 rounded-full text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md"
            onClick={props.onClick}>
      {props.text}
    </button>
  )
}
