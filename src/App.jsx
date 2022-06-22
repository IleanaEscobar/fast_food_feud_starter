import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from './components/Header/Header'
import Instructions from './components/Instructions/Instructions'
import Chip from './components/Chip/Chip'
import NutritionalLabel from './components/NutritionalLabel/NutritionalLabel'
import { useState } from 'react';

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {

  const [foodState, setFoodState] = useState('')
  const [restState, setRestState] = useState('')
  const [menuState, setMenuState] = useState('')
  console.log(data)
  var currentMenuItems = data.filter(data => (data.restaurant == restState && data.food_category == foodState));
  console.log('current:' + currentMenuItems)
  console.log( 'Menu: ' + menuState)

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {
            categories.map((item, indx) => (
              <Chip
                handleClick={() => {
                  // console.log('categories: ' + item)
                  setFoodState(item)
                }}
                key={item}
                label = {item}
                isActive = {item == foodState}
              >{item}</Chip>
            ))
          }
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
      {/* AppInfo={AppInfo} */}
        <Header
        title = {appInfo.title}
        tagline = {appInfo.tagline}
        description = {appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{
            restaurants.map((item, indx) => (
              <Chip
              handleClick={() => {
                console.log('halo1')
                setRestState(item)
              }}
              key={item}
              label = {item}
              isActive = {item == restState}>{item}</Chip>
            ))
          }</div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions
        instructions = {appInfo.instructions.start}
        // onlyCategory = {appInfo.instructions.onlyCategory}
        // onlyRestaurant = {appInfo.instructions.onlyRestaurant}
        // noSelectedItem = {appInfo.instructions.noSelectedItem}
        // allSelected = {appInfo.instructions.allSelected}
        />

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {
            currentMenuItems.map((item,indx) => (
              <div>
              <Chip handleClick={() => {setMenuState(item)}} key={item.id}
              label = {item.item_name}>{item}</Chip>
              </div>
            ))
            }
          </div>

          {/* NUTRITION FACTS */}

          <div className="NutritionFacts nutrition-facts">
            {
              (currentMenuItems.length > 0)?
                (
                <div>
                <h4 className="item-name">{menuState.item_name}</h4>
                <ul className="fact-list">
                <NutritionalLabel menuItem={menuState}></NutritionalLabel>
                </ul>
                </div>) : (null)
            }
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
