import axios from "axios"
import { API_URL } from "../Configs/apiconfig"
import { Navigate } from "react-router-dom"
import { IDataBody } from "../Interfaces/DataBody"
import { IPredictionTaskResponse } from "../Interfaces/PredictionTaskResponse"
import { IPredictionResponse } from "../Interfaces/PredictionResponse"

class APIService {
    create_prediction_task(sw:number, sl:number, pw:number, pl:number){
        const body:IDataBody = {
            "sepal_width": sw,
            "sepal_length": sl,
            "petal_width": pw,
            "petal_length": pl
        }
        return axios({
            method:"post",
            url: API_URL + `/predictions`,
            data: body,
            headers: { "Content-Type": "application/json"}
        }).then((response) => {
            return response.data as IPredictionTaskResponse
        });
    }

    get_prediction(pred_id:string){
        return axios({
            method:"get",
            url: API_URL + `/predictions/result/${pred_id}` 
        }).then((response)=>{
            return response.data as IPredictionResponse
        })
    }
}

export default new APIService();