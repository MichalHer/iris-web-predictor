import React from "react";
import { IPredictionResponse } from "../Interfaces/PredictionResponse";
import APIService from "../Services/apiservice"

interface IProps {
  prediction: IPredictionResponse;
  refreshfunc(id:string): void;
}

const PredictionItem: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className='prediction'>
      <div className='content'>
        <span>{props.prediction.id}</span>
        <span>{props.prediction.status}</span>
        <span>{props.prediction.prediction}</span>
      </div>
      <button onClick={() => {props.refreshfunc(props.prediction.id)}}>Refresh</button>
    </div>
  )
}

export default PredictionItem;