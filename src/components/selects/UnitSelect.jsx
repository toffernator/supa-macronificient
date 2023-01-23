import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"
import BaseSelect from "./BaseSelect"
import PropTypes from "prop-types"
import { toCapatilized } from "../../util"

const UnitSelect = (props) => {
  let [units, setUnits] = useState([])

  useEffect(() => {
    async function getUnits() {
      try {
        const { data, error, status } = await supabase
          .from("units")
          .select("*")

        if (error && status !== 406) {
          throw error
        }
        
        let units = data.map((unit) => { 
          return { value: unit.id, name: toCapatilized(unit.name)} 
        })
        setUnits(units)
      } catch(error) {
        alert(error)
      }
    }
    
    if (units.length === 0) {
      getUnits()
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
