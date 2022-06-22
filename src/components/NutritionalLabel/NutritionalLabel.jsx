import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({menuItem}) {
  console.log('menuItem: ' + Object.keys(menuItem))
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      <h4 className="item-name">{menuItem.item_name + "halo"}</h4>

      <ul className="fact-list">{
        for(let i = 0; i < menuItem.length; i++) (
          <h4>{menuItem[i]}</h4>
  )
      }</ul>
    </div>
  )
}

// export function NutritionalLabelFact(MenuItem) {
//   console.log("MI: " + MenutItem)
//   return (
//     <li className="nutrition-fact">
//       {
//       MenuItem.map((i, indx) => (
//       <div>
//       <span className="fact-label">{i.label}</span>{" "}
//       <span className="fact-value">{i.attribute}</span>
//       </div>
//       ))
// }
//     </li>
//   )
// }

export default NutritionalLabel
