import PropTypes from "prop-types"
import NumberInput from "./inputs/NumberInput"
import UnitSelect from "./selects/UnitSelect"

const AmountInput = (props) => {
  return (
    <>
      <NumberInput name="amount" placeholder="Amount" value={props.amountValue} onChange={props.onAmountChange} />
      <UnitSelect name="unit" value={props.unitValue} onChange={props.onUnitChange} />
    </>
  )
}

AmountInput.propTypes = {
  amountValue: PropTypes.number,
  unitValue: PropTypes.number,
  onAmountChange: PropTypes.func,
  onUnitChange: PropTypes.func
}

export default AmountInput

