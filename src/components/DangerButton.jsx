import BaseButton from "./buttons/BaseButton";
import PropTypes from "prop-types"

const DangerButton = (props) => {
  return (
    <BaseButton
      className={"text-white bg-red-600 rounded-lg" + " " + props.className}
      type={props.type} onClick={props.onClick} text={props.text}
    />
  )
}

DangerButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string
}

DangerButton.defaultProps = {
  type: "button",
  onClick: (e) => {return e},
  text: "Careful!",
  className: ""
}

export default DangerButton
