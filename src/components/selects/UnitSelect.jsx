import { useState, useEffect } from "react"
import { getUnits } from "../../supabaseClient"
import BaseSelect from "./BaseSelect"
import PropTypes from "prop-types"

const UnitSelect = (props) => {
  let [units, setUnits] = useState([])

  useEffect(() => {
    if (units.length === 0) {
      getUnits()
        .then(
          (units) => setUnits(units)
        )
    }
  }, [])

  return (
    <BaseSelect name={props.name} value={props.value} onChange={props.onChange} options={units} />
  )
}

BaseSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
}

export default UnitSelect
