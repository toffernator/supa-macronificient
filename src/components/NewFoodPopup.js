import { useState } from "react"
import AmountInput from "./AmountInput"
import NumberInput from "./inputs/NumberInput"
import BaseInput from "./inputs/BaseInput"

export default function NewFoodPopup(props) {
  
  let [food, setFood] = useState({name: "", calories: 0, carbohydrates: 0, protein: 0, fat: 0, amount: 0, unit: 0})

  const handleNameChange = (e) => {
    setFood({...food, name: e.target.value})
  }

  const handleCaloriesChange = (e) => {
    setFood({...food, calories: parseFloat(e.target.value)})
  }
  
  const handleCarbohydratesChange = (e) => {
    setFood({...food, carbohydrates: parseFloat(e.target.value)})
  }
  
  const handleProteinChange = (e) => {
    setFood({...food, protein: parseFloat(e.target.value)})
  }
 
  const handleFatChange = (e) => {
    setFood({...food, fat: parseFloat(e.target.value)})
  }

  const handleUnitChange = (e) => {
    setFood({...food, unit: parseInt(e.target.value)})
  }

  const handleAmountChange = (e) => {
    setFood({...food, amount: parseFloat(e.target.value)})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(food)
  }

  return (
    <div className="fixed h-full w-full left-0 top-0 none bg-gray-700/50 flex items-center justify-center">
      <div className="flex flex-col mx-auto p-1 bg-white border-2 border-solid border-black rounded-md shadow-lg">
        <button type="button" className="border-solid border-2 border-black" onClick={props.onClose}>X</button>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <BaseInput name="name" type="text" placeholder="name" value={food.name} onChange={handleNameChange} />
          <NumberInput name="calories" placeholder="calories" value={food.calories} onChange={handleCaloriesChange} />
          <NumberInput name="carbohydrates" placeholder="carbohydrates" value={food.carbohydrates} onChange={handleCarbohydratesChange}/>
          <NumberInput name="protein" placeholder="protein" value={food.protein} onChange={handleProteinChange}/>
          <NumberInput name="fat" placeholder="fat" className="m-2 p-1" value={food.fat} onChange={handleFatChange}/>
          <AmountInput unitValue={food.unit} amountValue={food.amount} onUnitChange={handleUnitChange} onAmountChange={handleAmountChange}/>
          <button type="submit" className="border-solid border-2 border-black">Add</button>
        </form>
      </div>
    </div>
  )
}
