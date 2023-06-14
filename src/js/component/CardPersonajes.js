import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPersonajes = (props) => {
	const { store, actions } = useContext(Context);


	return (
		<div className="col">
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						<strong>{props.name}</strong>
					</h5>
					<p className="card-text">
					<strong>uid:</strong> {props.uid}
					</p>
					<p className="card-text">
						<strong>url:</strong> {props.url}
					</p>
					
					<div className="row">
						<div className="col-6">
						<Link to={`/personajes/${props.uid}`}>
						<div className="btn btn-primary">Learn More</div>
						</Link>
						</div>
						<div className="col-6">
							<a href="#" className="btn btn-outline-warning">
								<i className="fas fa-heart" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardPersonajes.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
};

export default CardPersonajes;
