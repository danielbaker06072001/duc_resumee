import '../css/card.css';
import Data from '../data/data';

function Card(props) {

    

    return(

        <div class = "card" onClick = {event => window.location.href = props.Project_git}>
            <div class = "picture" style = {{backgroundImage: "url(" + props.Project_image +")", backgroundSize: "contain" }}></div>
            <div><h4> {props.Project_name} </h4></div>
            <p> {props.Project_description} </p>
        </div>
    )
};

export default Card;


