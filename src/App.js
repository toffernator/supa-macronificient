import './App.css';
import Card from './components/Card';
import FoodList from './components/FoodList';
import { useState } from 'react';
import FoodForm from './components/FoodForm';
import NewFoodPopup from './components/NewFoodPopup';
import { supabase } from './supabaseClient';

function App() {
  let [foods, setFoods] = useState([]);
  let [isShowingPopup, setShowPopup] = useState(false)
  
  const handleFoodFormSubmit = (food) => {
    setFoods([...foods, food])
  }

  const handleFoodItemDelete = (index) => {
    let newFoods = [...foods]
    newFoods.splice(index, 1)
    setFoods(newFoods)
  }

  const handlePopupOpen = (food) => {
    setShowPopup(true)
  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  const handleNewFoodSubmit = async (food) => {
    try {
      food.name = food.name.toUpperCase()
      const { error } = await supabase
         .from("foods")
         .insert(food)

      if (error) {
        throw error
      }

      setFoods([...foods, food])
      setShowPopup(false)
    } catch (error) {
      alert(error)
    }
  }
  
  const sumCalories = (foods) => {
    return foods.reduce((total, food) => {return total + food.calories}, 0)
  }

  const sumProtein = (foods) => {
    return foods.reduce((total, food) => {return total + food.protein}, 0)
  }

  const sumCarbohydrates = (foods) => {
    return foods.reduce((total, food) => {return total + food.carbohydrates}, 0)
  }
  
  const sumFat = (foods) => {
    return foods.reduce((total, food) => {return total + food.fat}, 0)
  }

  return (
    <div className="container h-screen mx-auto">
      <div className="m-2 p-1 grid gap-4 grid-cols-2 grid-rows-2">
        <Card title="calories" number={sumCalories(foods)}/>
        <Card title="carbohydrate" number={sumCarbohydrates(foods)}/>
        <Card title="protien" number={sumProtein(foods)}/>
        <Card title="fat" number={sumFat(foods)}/>
      </div>
      <FoodForm onSubmit={handleFoodFormSubmit} showPopup={handlePopupOpen} />
      {isShowingPopup && <NewFoodPopup onSubmit={handleNewFoodSubmit} onClose={handlePopupClose} />}
      <FoodList foods={foods} handleItemDelete={handleFoodItemDelete} />
    </div>
  );
}

export default App;
