import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
	return (
		<div className="col-3 p-2">
			<div className="card">
				{	props.item.image != "" &&
					<img src={`https://starwars-visualguide.com/assets/img/${props.naturate == "people" ? "characters" : "planets"}/${props.item.uid}.jpg`} className="card-img-top" style={{ maxHeight: '300px', objectFit: 'cover' }} alt={"wizzard"+props.item.name}/>}
				<div className="card-body">
					<h5 className="card-title">{ props.item && props.item.name}</h5>
					<p className="card-text">{
						props.item.gender
					}</p>
					<Link to={`details/${props.naturate}/${props.item.uid}`} className="btn btn-primary">Read detail</Link>
				</div>
			</div>
		</div>
	);
}

export default Character