import BaseButton from "./buttons/BaseButton"
import PropTypes from "prop-types"

const PrimaryButton = (props) => {
  return (
    <BaseButton
      className={"text-white bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg " + props.className}
      type={props.type} text={props.text} onClick={props.onClick}
    />
  )
}

PrimaryButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string
}

PrimaryButton.defaultProps = {
  type: "button",
  onClick: (e) => { return e },
  text: "Click Me!",
  className: ""
}

export default PrimaryButton
