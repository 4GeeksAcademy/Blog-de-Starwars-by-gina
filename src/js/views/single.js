import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Single = props => {
    const params = useParams();
    const {actions, store} = useContext(Context)
    useEffect(()=>{
        actions.getPlanetDetail(params.single)

    }
    ), [];

    return (
        <h1>Detalles de los personajes  id: {params.single}</h1>
    )
};

Single.propTypes = {
	params: PropTypes.object
};






