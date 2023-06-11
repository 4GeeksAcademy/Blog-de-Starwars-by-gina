import React,{useEffect, useState, useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CardPersonajes = props => {
	const { store, actions } = useContext(Context);
	const [detalle, setDetalle] = useState(null);

	

	return (
		<div className="col">
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						<strong>Personaje:</strong> {props.name}
					</h5>
					<p className="card-text">
						<strong>Genero:</strong> {props.uid}
					</p>
					<p className="card-text">
						<strong>Color de Pelo:</strong> {props.Hair_Color}
					</p>
					<p className="card-text">
						<strong>Color de ojos:</strong> {props.eye}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to="/personajes/:id">
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
	Hair_Color: PropTypes.string,
	eye: PropTypes.string,
	uid: PropTypes.string,
	name: PropTypes.string
};
export default CardPersonajes;