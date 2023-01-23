import PropTypes from "prop-types"

const BaseInput = (props) => {
  
  return (
    <input 
      name={props.name} type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder}
      className="m-2 p-1 border-2 border-slate-500 rounded-md hover:border-pink-500 focus:border-indigo-500 outline-none"
    />
  )
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

BaseInput.defaultProps= {
  type: "text",
  value: "",
  placeholder: ""
}


export default BaseInput;
