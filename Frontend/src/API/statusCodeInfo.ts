import axios from 'axios';

export const statusCodeInfo = (status: number, updateStatudCodeMeaning :Function, updateStatudCodeDetails: Function,setCatFunFact:Function) => {
  axios.get(`http://localhost:8888/${status}`, {  
  })
  .then(function (response : any) {
    console.log(response.data.FunFact)
    updateStatudCodeMeaning(response.data.meaning)
    updateStatudCodeDetails(response.data.statusCodeDetails)
    setCatFunFact(response.data.FunFact)
  })
  .catch(function (error : any) {
    console.log(error);
  })
}
