function Image(props){
    return(
        <>
        <img src={props.src} alt={props.alt} width="120px"/>
        <p>{props.name}</p>
        </>
    );      
}
export default Image;