import React from "react";
import { IPrediction } from "../Interfaces";

interface Props {
  prediction: IPrediction;
}

const PredictionList = ({ prediction }: Props) => {
  return (
    <div className="prediction">
      <div className="content">
        <span>{prediction.predictionID}</span>
        <span>{prediction.predictionStatus}</span>
        <span>{prediction.prediction}</span>
        <button >Check prediction</button>
      </div>
    </div>
  );
};

export default PredictionList;