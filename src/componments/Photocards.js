import React from "react";

const Photcard = (props) => {
    console.log(props);
    return(
        <div className="daily-photo">
        <div>
            <img src={props.img} alt="Image of space"/>
        </div>
            <div className="bottom">
                <h2>Name of Photo: {props.title}</h2>
                <p>{props.explanation}</p>
                <h2>Date: {props.date}</h2>
            </div>
        </div>
    )
}

export default Photcard;