import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<script src="https://kit.fontawesome.com/cda3887f65.js" crossorigin="anonymous"></script>
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" width="90" height="70" ms-1 p-0 alt="Star wars image"></img>
			</Link>
			<div className="ml-auto">
				<Link to="/details">
					<div className="dropdown">
  						<a className="btn btn-outline-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorite 💛
 						</a>

  						<ul className="dropdown-menu">
    						<li><a className="dropdown-item" href="#">Action</a></li>
    						<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
  						</ul>
					</div>
					
				</Link>
			</div>
		</nav>
	);
};
