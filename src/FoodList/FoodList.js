import React, { useState } from 'react';

function FoodList() {
  const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
  const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);
  const [foods, setFoods] = useState([]);
  const [itemName, setItemName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [spicinessLevel, setSpicinessLevel] = useState('');

  const handleAddFoodClick = () => {
    setIsFirstCardEnabled(true);
    setIsSecondCardEnabled(false);
  };

  const handleSaveClick = () => {
    setFoods([...foods, { itemName, foodType, spicinessLevel }]);
    setItemName('');
    setFoodType('');
    setSpicinessLevel('');
    setIsFirstCardEnabled(false);
    setIsSecondCardEnabled(true);
  };

  return (
    <div>
      <button onClick={handleAddFoodClick}>Add Food</button>
      <ul className="list">
        {foods.map((food, index) => (
          <li key={index}>
            {food.itemName} - {food.foodType} - {food.spicinessLevel}
          </li>
        ))}
      </ul>
      <div className={`card-container ${isFirstCardEnabled ? 'show' : ''}`}>
        <div className="card">
          <input
            type="text"
            name="itemName"
            value={itemName}
            placeholder="Item Name"
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type="text"
            name="foodType"
            value={foodType}
            placeholder="Food Type"
            onChange={(e) => setFoodType(e.target.value)}
          />
          <form
            onClick={() => setIsFormEnabled(true)}
            style={{ opacity: isFormEnabled ? 1 : 0.5 }}
          >
            <input
              type="text"
              name="spicinessLevel"
              value={spicinessLevel}
              placeholder="Spiciness Level"
              onChange={(e) => setSpicinessLevel(e.target.value)}
            />
          </form>
          <button
            onClick={handleSaveClick}
            disabled={!isSecondCardEnabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
