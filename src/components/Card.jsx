export default function MacroDisplay(props) {
  return (
    <div className="bg-gray-100 text-slate-700 rounded-lg p-1 text-center drop-shadow-lg">
      <h3>{props.title}</h3>
      <p className="text-6xl">{props.number === 0 ? 0 : props.number.toFixed(1)}</p>
    </div>
  )
}
