import { createClient } from '@supabase/supabase-js'
import { toCapatilized } from './util'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getFood(foodName) {
  foodName = foodName.toUpperCase()
  let food
  try {
    food = getFromCache(foodName)
  } catch {
    // Cache miss
    food = await uncachedGetFood(foodName)
    cache(foodName, food)
  }
  return food
}

async function uncachedGetFood(food) {
  try {
    let { data, error, status } = await supabase
      .from("foods")
      .select("*")
      .eq("name", food)
      .single()

    if (error && status !== 406) {
      throw error
    }

    return data
  } catch (error) {
    alert(error.message)
  }
}

export async function getUnits() {
  try {
    const { data, error, status } = await supabase
      .from("units")
      .select("*")

    if (error && status !== 406) {
      throw error
    }

    let units = data.map((unit) => {
      return { value: unit.id, name: toCapatilized(unit.name) }
    })
    return units
  } catch (error) {
    alert(error)
  }
}

function getFromCache(key) {
  let item = JSON.parse(localStorage.getItem(key))
  if (!item) throw new Error("Cache miss")
  if (Date.now() - item.cachedOn < 24 * 60 * 60 * 1000) throw new Error("Cache miss")
  delete item.cachedOn
  return item
}

function cache(key, item) {
  item.cachedOn = Date.now()
  localStorage.setItem(key, JSON.stringify(item))
}

