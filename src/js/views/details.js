import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	const [item, setItem] = useState({})

	const { store, actions } = useContext(Context);
	const { naturate, theid} = useParams();
	console.log(theid)

	const loadItem = async ()=>{
		try{
			const resp = await fetch(`https://www.swapi.tech/api/${naturate}/${theid}`)
			const data = await resp.json()
			setItem(data.result)
			console.log(data.result)
		}catch(err){
			console.log(err)
		}
	}
	useEffect(()=>{
		loadItem()
	}, [])

	console.log(item)
	return (
		<div className="jumbotron">
			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}

			<hr className="my-4" />
				<h1>{item.properties?.name}</h1>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
