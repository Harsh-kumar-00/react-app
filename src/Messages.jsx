function Messages(zooms){
    return(
        <>
        <h1>Messages for {zooms.name}</h1>
        <p>You have {zooms.unread} unread messages.</p>
        </>
    );
}

export default Messages;