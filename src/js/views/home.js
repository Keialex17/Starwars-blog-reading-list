import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

	const [ characters, setCharacters ] = useState([])

	useEffect(()=> {

		async function loadWizzards(){
			try{
				const resp = await fetch(`https://hp-api.onrender.com/api/characters`)
				const data = await resp.json()
				setCharacters(data)
			}catch(err){
				console.log(err)
			}
		}
		loadWizzards();

	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Haarald Potter API 💫</h1>
			<div className="d-flex flex-wrap">
				{
					characters.length > 0 &&
					characters.map((wizzard) => <Character item={wizzard} key={wizzard.id} />)
				}
			</div>
		</div>
	)
};


const Character = (props) => {
	return (
		<div className="col-3 p-2">
			<div className="card">
				{	props.item.image != "" &&
					<img src={props.item.image} className="card-img-top" style={{ maxHeight: '300px', objectFit: 'cover' }} alt={"wizzard"+props.item.name}/>}
				<div className="card-body">
					<h5 className="card-title">{ props.item && props.item.name}</h5>
					<p className="card-text">{
						props.item.house
					}</p>
					<Link to={`/character/${props.item.id}`} className="btn btn-primary">Read detail</Link>
				</div>
			</div>
		</div>
	);
}