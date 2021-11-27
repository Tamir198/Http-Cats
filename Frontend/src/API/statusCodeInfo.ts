import axios from 'axios';


export const statusCodeInfo = (status: number, updateStatudCodeMeaning :Function, updateStatudCodeDetails: Function) => {
  axios.get(`http://localhost:8888/${status}`, {  
  })
  .then(function (response : any) {
    updateStatudCodeMeaning(response.data.meaning)
    updateStatudCodeDetails(response.data.statusCodeDetails)
  })
  .catch(function (error : any) {
    console.log(error);
  })
}
