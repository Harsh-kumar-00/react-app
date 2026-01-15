function Child(props){
    return (
        <>
        <div style={{border: "1px solid gray", padding: "10px", marginTop: "10px"}}>

        <h3>Child Component</h3>
        <p>Student name is: {props.student}</p>
            <button onClick={props.update}>
                Hit Parent!
            </button>
        </div>
        </>
    );
}
export default Child;