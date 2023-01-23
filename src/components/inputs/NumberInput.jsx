import BaseInput from "./BaseInput"
import PropTypes from "prop-types"

const NumberInput = (props) => {
 
  const handleChange = (e) => {
    let asFloat = e.target.value === "" ? 0 : parseFloat(e.target.value)
    e.target.value = asFloat
    props.onChange(e)
  }
  
  return (
    <BaseInput
      name={props.name} type="number" step={props.step} value={props.value == 0 ? "" : props.value} onChange={handleChange}
      placeholder={props.placeholder}
    />
  )
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  step: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func
}

NumberInput.defaultProps = {
  step: "any"
}

export default NumberInput
