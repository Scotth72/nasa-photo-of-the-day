import React from "react";

const Photcard = () => {

    return(
        <div className="daily-photo">
            <div>
                <img>photo-of-the-day</img>
            </div>
            <div className="bottom">
                <h2>Name of Photo</h2>
                <p>PhotoInfo</p>
                <h2>Date</h2>
            </div>
        </div>
    )
}

export default Photcard;