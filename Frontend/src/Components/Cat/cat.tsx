import './cat.module.css';

type CatProps = {
  status:number,
  info:string,
  catFact:string
}

export const Cat = (props:CatProps) =>{
  return<div className="cat-container">
    <h1>Status code, {props.status}</h1>
    <div className="cat-container-content">
      <img src={`https://http.cat/${props.status}`} alt="cat-image"/>
      <p>{props.info}</p>
    </div>
    <p>{props.catFact}</p>

  </div>
  
    
}
