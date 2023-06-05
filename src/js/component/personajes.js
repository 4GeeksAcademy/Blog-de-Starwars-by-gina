import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = props => {
	return (
		<div className="col">
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						<strong>Personaje:</strong> {props.nombre}
					</h5>
					<p className="card-text">
						<strong>Genero:</strong> {props.genero}
					</p>
					<p className="card-text">
						<strong>Color de Pelo:</strong> {props.Hair_Color}
					</p>
					<p className="card-text">
						<strong>Color de ojos:</strong> {props.eye}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to="/single">
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
Card.propTypes = {
	nombre: PropTypes.string,
	genero: PropTypes.string,
	Hair_Color: PropTypes.string,
	eye: PropTypes.string
};
export default Card;