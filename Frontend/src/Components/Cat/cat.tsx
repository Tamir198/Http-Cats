
type CatProps = {
  status:number,
  info:string,

}

export const Cat = (props:CatProps) =>{
  return (
    <div>
      <h1>Status code, {props.status}</h1>
      <img src={`https://http.cat/${props.status}`} alt="aaa" />
      <p>{props.info}</p>
    </div>
    )
    
}
