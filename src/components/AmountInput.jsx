import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

export default function AmountInput(props) {
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

        setUnits(data)
      } catch(error) {
        alert(error)
      }
    }
    
    if (units.length === 0) {
      getUnits()
    }
  }, [])
  
  return (
    <div className="flex">
      <input type="number" step="any" name={props.inputName} placeholder="amount" value={props.amountValue} onChange={props.onAmountChange} className="m-2 p-1 border-2 border-solid border-black"/>
      <select name={props.selectName} value={props.unitValue} onChange={props.onUnitChange}>
        {units.map((unit) => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
      </select>
    </div>
  )
}
