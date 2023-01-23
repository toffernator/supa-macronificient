import PropTypes from "prop-types"

const BaseSelect = (props) => {
  return (
    <select
      name={props.name} value={props.value} onChange={props.onChange}
      className="m-2 p-1 outline-none border-solid border-2 border-slate-500 rounded-md bg-white hover:border-pink-500 focus:border-indigo-500 accent-pink-500"
    >
      {props.options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)}
    </select>
  )
}

BaseSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array
}

BaseSelect.defaultProps = {
  options: [{value: 0, name: "Select a value"}]
}

export default BaseSelect
