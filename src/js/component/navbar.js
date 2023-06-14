import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const renderDropdownItems = () => {
    return store.favoritos.map((favorito, index) => (
      <li key={index}>
        <div className="d-flex justify-content-between align-items-center">
          <Link className="dropdown-item" to={`/personajes/${favorito.uid}`}>
            {favorito.name}
          </Link>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => actions.toggleFavorito(favorito)}
          >
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </li>
    ));
  };

  return (
    <div className="container">
      <div className="container-fluid bg-light">
        <nav className="navbar navbar-light mb-2">
          <Link to="/">
            <img
              src="https://www.freepnglogos.com/uploads/star-wars-logo-design-21.png"
              alt="Logo Star Wars"
              className="logo"
              style={{ width: "100px", height: "auto" }}
            />
          </Link>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
              <span className="badge bg-secondary">{store.favoritos.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {renderDropdownItems()}
              {store.favoritos.length === 0 && (
                <li>
                  <span className="dropdown-item">No hay favoritos</span>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};