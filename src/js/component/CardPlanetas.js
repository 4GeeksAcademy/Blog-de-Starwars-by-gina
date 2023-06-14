import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = (props) => {
  const { store, actions } = useContext(Context);
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    actions.getPlanet();
  }, []);

  return (
    <div className="col">
      <div className="card">
        <img
          src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png?w=1200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{props.name}</strong>
          </h5>
          <p className="card-text">
            <strong>Uid:</strong> {props.uid}
          </p>
          <p className="card-text">
            <strong>Url:</strong> {props.url}
          </p>
          <div className="row">
            <div className="col-6">
              <Link to={`/planetas/${props.uid}`}>
                <div className="btn btn-primary">Learn More</div>
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button className="btn btn-outline-warning">
                <i className="fas fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPlanetas.propTypes = {
  name: PropTypes.string,
  uid: PropTypes.string,
  url: PropTypes.string,
};

export default CardPlanetas;