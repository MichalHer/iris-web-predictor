import React from "react";
import { IPrediction } from "../Interfaces";

interface Props {
  prediction: IPrediction;
  checkPrediction(predictionIDToCheck: string): void;
}

const PredictionList = ({ prediction }: Props) => {
  return (
    <div className="prediction">
      <div className="content">
        <span>{prediction.predictionID}</span>
        <span>{prediction.predictionStatus}</span>
        <span>{prediction.prediction}</span>
        <button onClick={() => {checkPrediction(prediction.predictionID);}} >Check prediction</button>
      </div>
    </div>
  );
};

export default PredictionList;