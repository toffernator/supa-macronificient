import { useState } from "react"
import AmountInput from "./AmountInput"

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
    <div className="fixed h-full w-full left-0 top-0 none bg-gray-700 opacity-50 flex items-center justify-center">
      <div className="flex flex-col mx-auto p-1 bg-red-200 opacity-100">
        <button type="button" className="border-solid border-2 border-black" onClick={props.onClose}>X</button>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input type="text" name="calories" placeholder="name" className="m-2 p-1" value={food.name} onChange={handleNameChange} />
          <input type="number" name="calories" placeholder="calories" className="m-2 p-1" value={food.calories} onChange={handleCaloriesChange} />
          <input type="number" name="carbohydrates" placeholder="carbohydrates" className="m-2 p-1" value={food.carbohydrates} onChange={handleCarbohydratesChange}/>
          <input type="number" name="protein" placeholder="protein" className="m-2 p-1" value={food.protein} onChange={handleProteinChange}/>
          <input type="number" name="fat" placeholder="fat" className="m-2 p-1" value={food.fat} onChange={handleFatChange}/>
          <AmountInput unitValue={food.unit} amountValue={food.amount} onUnitChange={handleUnitChange} onAmountChange={handleAmountChange}/>
          <button type="submit" className="border-solid border-2 border-black">Add</button>
        </form>
      </div>
    </div>
  )
}
