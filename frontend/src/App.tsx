import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from "./Components/PredictionList";
import { IPrediction, IPredictionResponse } from "./Interfaces";
import PredictionList from './Components/PredictionList';

const App: FC = () => {

  const [sepalLength, setSepalLength] = useState<number>(4);
  const [sepalWidth, setSepalWidth] = useState<number>(2);
  const [petalLength, setPetalLength] = useState<number>(0);
  const [petalWidth, setPetalWidth] = useState<number>(0);
  const [predictIrisID, setPredictIrisID] = useState<number>(0);
  const [predictionList, setPredictionList] = useState<IPrediction[]>([]);

  const url = 'http://localhost:8000'

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "sepalLength") {
      setSepalLength(Number(event.target.value));
    }
    if (event.target.name === "sepalWidth") {
      setSepalWidth(Number(event.target.value));
    }
    if (event.target.name === "petalLength") {
      setPetalLength(Number(event.target.value));
    }
    if (event.target.name === "petalWidth") {
      setPetalWidth(Number(event.target.value));
    }
  };
  
  async function postIrisPrediction() {
    try {
      // const response = await fetch(url + '/predictions', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //   sepal_width: sepalWidth,
      //   sepal_length: sepalLength,
      //   petal_width: petalWidth,
      //   petal_length: petalLength,
      //   }),
      // headers: {
      //   'Content-Type': 'application/json',
      //   Accept: 'application/json',
      //   },
      // }); 
      // if (!response.ok) {
      //   throw new Error(`Error! status: ${response.status}`);
      // }

      //const result = (await response.json()) as IPredictionResponse;
      
      const result = JSON.parse('{"id": "text"}')
      
      console.log('result is: ', JSON.stringify(result, null, 4));
      let responseString = JSON.stringify(result);
      let responseObject = JSON.parse(responseString);

      const newTask = { predictionID: responseObject.id, predictionStatus: 'In Progress', prediction: 'In progress'};
      setPredictionList([...predictionList, newTask]);

      setSepalLength(4);
      setSepalWidth(2);
      setPetalLength(0);
      setPetalWidth(0);
  
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  async function checkPrediction(predictionIDToCheck: string) {
      const response = await fetch(url + '/predictions', {
        method: 'POST',
        body: JSON.stringify({
        id: predictionIDToCheck
        }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        },
      }); 
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = (await response.json()) as IPredictionResponse;
  };

  return (
  <div className="App">
    <div className='header'>
      <div className='inputContainer'>
      <input type="number" min={4} max={8} step={.1} placeholder='Sepal Length' name='sepalLength'  onChange={handleChange} />
      <input type="number" min={2} max={5} step={.1} placeholder='Sepal Width' name='sepalWidth' onChange={handleChange} />
      <input type="number" min={0} max={7} step={.1} placeholder='Petal Length' name='petalLength' onChange={handleChange} />
      <input type="number" min={0} max={3} step={.1} placeholder='Petal Width' name='petalWidth' onChange={handleChange} />
      </div>
      <button onClick={postIrisPrediction}>Predict</button>
    </div>
    <div className="predictionList">
        {predictionList.map((prediction: IPrediction, key: number) => {
          return <PredictionList key={key} prediction={prediction} />;
        })}
      </div>
  </div>
  );
}


export default App;
