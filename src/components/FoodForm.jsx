import { useState } from "react";
import { supabase } from "../supabaseClient"
import AmountInput from "./AmountInput";
import BaseInput from "./inputs/BaseInput";
import PrimaryButton from "./PrimaryButton";

export default function FoodForm(props) {
  let [searchText, setSearchText] = useState("")
  let [amount, setAmount] = useState(0)
  let [unit, setUnit] = useState(1)
  
  let handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }
  
  const handleAmountChange = (e) => {
    // Cast to int here (and not on the underlying component like NumberInput) because the int conversion on e.target.value does not "stick"
    // i.e. it still arrives here as a string otherwise.
    let asFloat = parseFloat(e.target.value)
    setAmount(asFloat)
  }

  const handleUnitChange = (e) => {
    // Cast to int here (and not on the underlying component like NumberInput) because the int conversion on e.target.value does not "stick"
    // i.e. it still arrives here as a string otherwise.
    let asInt = parseInt(e.target.value)
    setUnit(asInt)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let food = await getFood(searchText)
    if (food === null) {
      props.showPopup(food)
    } else {
      food = scaleFood(food, amount)
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
    return {
      ...food, calories: food.calories * scalar, carbohydrates: food.carbohydrates * scalar, protein: food.protein * scalar,
      fat: food.fat * scalar, amount: newAmount
    }

  }

  return (
    <form className="flex flex-col justify-items-stretch" onSubmit={handleSubmit}>
      <BaseInput name="search" type="search" value={searchText} onChange={handleSearchTextChange} placeholder="Enter a food..."/>
      <AmountInput onUnitChange={handleUnitChange} unitValue={unit} onAmountChange={handleAmountChange} amountValue={amount} />
      {/* <button type="submit" className="m-2 p-1 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md rounded-lg text-white" >Add</button> */}
      <PrimaryButton type="submit" text="Add"/>
    </form>
  )
}

