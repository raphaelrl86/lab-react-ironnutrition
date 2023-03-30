import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from "react"

function App() {
  const [foodList, setFoodList] = useState(foods)

  return (
    <div className="App">
      {
        foodList.map(food => {

        })
      }
      <div key={index}>
        <p> { food.name } </p>
        <img src="FOOD_IMAGE_HERE" width={0} />
      </div>
     
    </div>
  );
}

export default App;
