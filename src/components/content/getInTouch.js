
const GetInTouch = () => {
    const myStyle = {
        width: "80%",
        border : "1px solid",
        marginBottom: "10px"
    }

    return (
        <div style = {{display: "flex", flexDirection : "column", alignItems: "center", paddingBottom: "25px" , backgroundColor: "#424242"}}>
            <h1>Get in touch</h1>
                <form style = {{width: "100%"}}>
                    <div className = "styleForm" style = {{display: "flex", flexDirection : "column", alignItems: "center", width: "100%"}}>
                            <input placeholder="Enter your name" style ={myStyle}/>
                            <input placeholder="Please provide your email address." style ={myStyle}/>
                            <input placeholder="Enter your message for me." style ={myStyle}/>
                            <button>Submit</button>
                    </div>
                </form>
            <h1 style = {{marginBottom: "0px"}}>© Duc Minh Nguyen, 2022</h1>
        </div>
    );
};

export default GetInTouch;