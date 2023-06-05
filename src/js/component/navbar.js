import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid bg-light">
			<nav className="navbar navbar-light mb-2">
				<Link to="/">
				<img src="https://www.adhesivosnatos.com/wp-content/uploads/2017/01/pegatina-star-wars-logo.png" alt="Logo Star Wars" className="logo" style={{ width: "100px", height: "auto" }}/>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos
						<span className="badge bg-secondary">4</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Another action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};