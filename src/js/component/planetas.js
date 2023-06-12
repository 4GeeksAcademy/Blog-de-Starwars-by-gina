import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = props => {
	const { store, actions } = useContext(Context);
	const [detalle, setDetalle] = useState(null);

	useEffect(() => {
		const fetchPlanetDetail = async () => {
		  const planetDetail = await actions.getPlanet(props.url);
		  setDetalle(planetDetail);
		};
	  
		fetchPlanetDetail();
	  }, []);

	return (
		<div className="col">
			<div className="card">
				<img src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png?w=1200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						<strong>Name:</strong> {props.name}
					</h5>
					<p className="card-text">
					<strong>Population:</strong> {props.population}
					</p>
					<p className="card-text">
					<strong>Terrain:</strong> {detalle ? detalle.terrain : ""}
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
CardPlanetas.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	url: PropTypes.string
};
export default CardPlanetas;