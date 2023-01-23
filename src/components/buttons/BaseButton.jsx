import PropTypes from "prop-types"

const BaseButton = (props) => {
  return (
    // Append props.className to respect the styling of Button components that add additional styling
    <button type={props.type} onClick={props.onClick} className={"p-1 m-2 shadow-md" + " " + props.className}>
      {props.text}
    </button>
  )
}

BaseButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string
}

BaseButton.defaultProps = {
  type: "button",
  onClick: (e) => {return e},
  text: "Click Me!"
}

export default BaseButton
