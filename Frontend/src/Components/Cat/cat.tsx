import './cat.css';

type CatProps = {
  status:number,
  info:any,
  statusCodemeaning:any
  catFact:any
}

export const Cat = (props:CatProps) =>{
  return<div className="cat-container">
    <h1>Status code, {props.status}</h1>
    <div className="cat-container-content">
      <img src={`https://http.cat/${props.status}`} alt="cat-image"/>
      <p>{props.info}</p>
    </div>
    <p>{props.catFact}</p>
    <p>{props.statusCodemeaning}</p>


  </div>
  
    
}
