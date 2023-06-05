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
			personajes: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
				  .then(res => res.json())
				  .then(data => {
					setStore({ personajes: data.results });
				  })
				  .catch(error => {
					
					console.error("Error al cargar los datos:", error);
				  });
			  },
		

			getPlanetDetail: url => {
				fetch("https://www.swapi.tech/api/planets/")
				  .then(res => res.json())
				  .then(data => {
					setStore({ planetas: data.results });
				  })
				  .catch(error => {
					
					console.error("Error al cargar los datos:", error);
				  });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
				setStore({ personajes: personajes });
				setStore({ planetas: planetas });
			}
		}
	};
};

export default getState;