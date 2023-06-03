import React, {useContext, useEffect} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PersonajesDetalles = () => {
    const params = useParams();
    const {actions, store} = useContext(Context)
    useEffect(()=>{
        actions.getCharacters(params.characterId)

    }
    ), [];

    return (
        <h1>Detalles de los personajes  id: {params.id}</h1>
    )
};