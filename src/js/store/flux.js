const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planetas: [],
			planetDetails: [],
			personajes: [],
			peopleDetails: [],
			favoritos: [],
			vehiculos: [],
			vehicleDetails: [],
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ personajes: data.results });
					})
					.catch(error => console.error('Error al cargar los datos:', error));
			},
			getPeopleDetails: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							throw new Error('Error de respuesta de la API');
						}
					})
					.then(data => {
						if (data.result && data.result.properties) {
							setStore({ peopleDetails: data.result.properties });
							console.log(data.result);
						} else {
							throw new Error('Datos de respuesta inválidos');
						}
					})
					.catch(error => {
						console.log('Error:', error);
					});
			},
			toggleFavorito: (personaje) => {
				const store = getStore();
				const favoritos = [...store.favoritos];

				const index = favoritos.findIndex((favorito) => favorito.uid === personaje.uid);

				if (index === -1) {
					favoritos.push(personaje);
				} else {
					favoritos.splice(index, 1);
				}

				setStore({ favoritos: favoritos });
			},
			getPlanet: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planetas: data.results });
					})
					.catch(error => console.error('Error al cargar los datos:', error));
			},
			getPlanetDetails: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.result && data.result.properties) {
							setStore({ planetDetails: data.result.properties });
						} else {
							throw new Error("Datos de respuesta inválidos");
						}
					})
					.catch((error) => {
						console.log("Error:", error);
					});
			},
			getVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				  .then(response => response.json())
				  .then(data => {
					setStore({ vehiculos: data.results });
				  })
				  .catch(error => console.error('Error al cargar los datos:', error));
			  },
			  getVehicleDetails: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.result && data.result.properties) {
							setStore({ vehicleDetails: data.result.properties });
						} else {
							throw new Error("Datos de respuesta inválidos");
						}
					})
					.catch((error) => {
						console.log("Error:", error);
					});
			},
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo, personajes: store.peopleDetails, planetas: store.planetas, vehiculos: store.vehiculos });
			}
		}
	};


export default getState;