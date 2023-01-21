import { useState } from "react";
import { supabase } from "../supabaseClient"
import AmountInput from "./AmountInput";

export default function FoodForm(props) {
  let [searchText, setSearchText] = useState("")
  let [amount, setAmount] = useState(0)
  let [unit, setUnit] = useState(1)
  
  let handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }
  
  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value))
  }

  const handleUnitChange = (e) => {
    setUnit(parseInt(e.target.value))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let food = await getFood(searchText)
    console.log(food)
    food = scaleFood(food, amount)
    console.log(food)
    if (food === null) {
      props.showPopup(food)
    } else {
      props.onSubmit(food)
    }
  }
  
  const getFood = async (food) => {
    try {
      let { data, error, status } = await supabase
        .from("foods")
        .select("*")
        .eq("name", food.toUpperCase())
        .single()
      
      if (error && status !== 406) {
        throw error
      }

      return data
    } catch (error) {
      alert(error.message)
    }
  }

  const scaleFood = (food, newAmount) => {
    let scalar = newAmount / food.amount
    return {...food, calories: food.calories * scalar, carbohydrates: food.carbohydrates * scalar, protein: food.protein * scalar, fat: food.fat * scalar, amount: newAmount}
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input type="search" value={searchText} className="m-2 p-1 border-black border w-4/5" onChange={handleSearchTextChange}/>
      <AmountInput onUnitChange={handleUnitChange} unitValue={unit} onAmountChange={handleAmountChange} amountValue={amount} />
      <button type="submit" className="m-2 p-1 w-1/5 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md rounded-lg text-white" >submit</button>
    </form>
  )
}

