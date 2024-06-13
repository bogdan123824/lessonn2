import React, {useState} from 'react';
import './App.css';
import logo from './schwepps.webp';
import bmwImage from './BMW.webp';
import speedometer from './speedometer.png';
import canister from './canister.png';
import point from './point.png';
import automat from './automat.png';
import correctCar from './correct.png';
import time from './time.png';
import scale from './scale.png';
import heart from './heart.png';

function App() {
  const [distance, setDistance] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);

  var calculator = () =>{
    var distance2 = parseFloat(distance);
    var fuel2 = parseFloat(fuel);
    var price2 = parseFloat(price);

    if(distance2 && fuel2 && price2)
      {
        var totalCost = (distance2 / 100) * fuel2 * price2;
        setCost(totalCost);
      }
  }
  return (
    <div className="App">

      {/* calculator */}
      {/* <h1>Cost of travel</h1>
      <div className='container'>
          <label>Distance</label>
          <input 
          type="text" 
          value={distance} 
          onChange={(e) => setDistance(e.target.value)} 
        /> kl.
      </div>
      <div className='container'>
          <lable>Middle fuel consuption</lable>
          <input 
          type="text" 
          value={fuel} 
          onChange={(e) => setFuel(e.target.value)} 
        /> l/100 kl.
      </div>
      <div className='container'>
        <lable>
          Cost 1 l. fuel
        </lable>
        <input 
          type="text" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        /> UAH/l
        <div>
          <button onClick={calculator}>Calculate</button>
          <p>Total cost of travel: {cost} UAH</p>
        </div>
      </div> */}

        {/* schwepps drink */}
      {/* <div className='card-schwepps'>
          <img src={logo} className='schwepps-product'></img>
          <p>Schweppes Indian Tonic Water non-alcoholic drink 330 ml (714691)</p>
          <div className='details'>
          <span>★★★★☆</span>
          <span>4</span>
          </div>
          <div className='price-card'>
            <span className='old-price'>28 UAH</span>
            <span className='discount-price'>-21%</span>
            <span className='new-price'>22 UAH</span>
          </div>
          <button className='buy' onClick={() => alert("You buy schwepps")}>Buy</button>
      </div> */}

      {/* ///////BMW */}
      <div className='card'>
        <div className='image'>
          <img src={bmwImage}></img>
        </div>
        <div className='details'>
          <div className='title'>
            <h2>BMW X5 2024</h2>
            <p>G05 (FL) • 40d Steptronic (340 к.с.) xDrive • M Sport</p>
          </div>
          <div className='price'>
            <h3>137 000 $ <p>• 5 603 300 UAH</p></h3>
            
          </div>
          <ul className="info">
            <li><img src={speedometer}/><p>1000 km</p></li>
            <li><img src={point}/><p>Odessa</p></li>
            <li><img src={canister}/><p>Diesel, 2.99 l</p></li>
            <li><img src={automat}/><p>Auto</p></li>
          </ul>
          <div className="VIN">
          <img src={correctCar} className='imgBtn'></img><button className='button-car'><div className='text'>VIN: WBA21EV0x09xxxx82</div></button>
            <p>Офіційна нова машина! 2024р! 1500 тис.км</p>
          </div>
          <ul className="time">
        <li><img src={time}/><p>3 hours ago</p></li>
        <li className="icons">
          <img src={scale}/>
          <img src={heart}/>
        </li>
      </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
