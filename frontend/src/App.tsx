import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import PredictionItem from './Components/PredictionItem';
import { IPredictionTaskResponse } from './Interfaces/PredictionTaskResponse';
import { IPredictionResponse } from './Interfaces/PredictionResponse';
import APIService from './Services/apiservice';

const App: FC = () => {

  const [sepalLength, setSepalLength] = useState<number>(0);
  const [sepalWidth, setSepalWidth] = useState<number>(0);
  const [petalLength, setPetalLength] = useState<number>(0);
  const [petalWidth, setPetalWidth] = useState<number>(0);
  const [predictionList, setPredictionList] = useState<IPredictionResponse[]>([]);

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

  const addPrediction = (): void => {
    const prediction:IPredictionResponse = {
      id: "unknown",
      status: "created",
      prediction: "waiting..."
    }
    APIService.create_prediction_task(
      sepalWidth,
      sepalLength,
      petalWidth,
      petalLength
    ).then((response) => {
      prediction.id = response.id
    }).then(() =>{
      APIService.get_prediction(prediction.id).then((response) => {
        prediction.id = response.id
        prediction.prediction = response.prediction
        prediction.status = response.status
        setPredictionList([...predictionList, prediction]);
      }
    )})
  }

  const refreshPrediction = (refreshed_id:string): void => {
    APIService.get_prediction(refreshed_id).then((response) => {
      let objIndex = predictionList.findIndex((obj => obj.id == refreshed_id))
      predictionList[objIndex].prediction = response.prediction
      predictionList[objIndex].status = response.status
      setPredictionList([...predictionList])
    })
  }

  const removePrediction = (removed_id:string): void => {
      setPredictionList(predictionList.filter((prediction) => {
        return prediction.id != removed_id
      }))
  }

  return (
    <>
      <div className="App">
        <div className='header'>
          <div className='inputContainer'>
            <input type="number" step={.1} placeholder='Sepal Length' name='sepalLength'  onChange={handleChange} />
            <input type="number" step={.1} placeholder='Sepal Width' name='sepalWidth' onChange={handleChange} />
            <input type="number" step={.1} placeholder='Petal Length' name='petalLength' onChange={handleChange} />
            <input type="number" step={.1} placeholder='Petal Width' name='petalWidth' onChange={handleChange} />
          </div>
          <button onClick={addPrediction}>Predict</button>
        </div>
        <div className="predictionList" onChange={handleChange}>
          {predictionList.map((prediction:IPredictionResponse) => {
            return <PredictionItem prediction={prediction} refreshfunc={refreshPrediction} removefunc={removePrediction}/>
          })}
        </div>
      </div>
    </>
  );
}


export default App;
