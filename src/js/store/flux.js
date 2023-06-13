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
		personajes: [],
		peopleDetails: []
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
			  .then(response => response.json())
			  .then(data => {
				if (data.result) {
				  setStore({ peopleDetails: data.result.properties });
				  console.log(data.result);
				} else {
				  throw new Error('Invalid response data');
				}
			  })
			  .catch(error => {
				console.log('Error:', error);
			  });
		  
			  
			 
		  
			
		},
		getPlanet: () => {
		  fetch("https://www.swapi.tech/api/planets/")
			.then(response => response.json())
			.then(data => {
			  setStore({ planetas: data.results });
			})
			.catch(error => console.error('Error al cargar los datos:', error));
		},
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
		  setStore({ demo: demo, personajes: store.peopleDetails, planetas: store.planetas });
		}
	  }
	};
  };
  
  export default getState;