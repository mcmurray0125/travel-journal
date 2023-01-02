import React from "react";
import spotIcon from "/src/images/spot-icon.png"

export default function Card(props) {
    return (
            <div className="card-wrapper">
                <div className="photo-wrapper">
                    <img src={props.item.imageUrl} alt="destination-image" className="card-photo" />
                </div>
                <div className="text-wrapper">
                    <div className="country-bar">
                        <img src={spotIcon} alt="spot-icon" />
                        <span className="country-name">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="spot-title">{props.item.title}</h1>
                    <strong className="dates">
                        {props.item.startDate} - {props.item.endDate}
                    </strong>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>


)
}