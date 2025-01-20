function Card(props){
    return (
        <div>
            <div><img src={props.src} alt={"photo"}/></div>
            <div><p>{props.text}</p></div>
            <div><h1>{props.price}</h1></div>
        </div>
    );
}
export default Card;