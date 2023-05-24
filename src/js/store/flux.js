const getState = ({ getStore, getActions, setStore }) => {
	return {
		// store: guarda la informacion globalmente
		//actions: guarda funciones que se pueden usar globalmente
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},
		actions: {
			loadPeople: async ()=>{
				try{
					const resp = await fetch(`https://www.swapi.tech/api/people/`)
					const data = await resp.json()
					setStore({characters: data.results})
					console.log(data)
				}catch(err){
					console.log(err)
				}
			},
			loadPlanets: async ()=>{
				try{
					const resp = await fetch(`https://www.swapi.tech/api/planets/`)
					const data = await resp.json()
					setStore({planets: data.results})
					console.log(data)
				}catch(err){
					console.log(err)
				}
			},
			loadVehicles: async ()=>{
				try{
					const resp = await fetch(`https://www.swapi.tech/api/vehicles/`)
					const data = await resp.json()
					setStore({vehicles: data.results})
					console.log(data)
				}catch(err){
					console.log(err)
				}
			},
			addFavorites: (item) =>{
				const store = getStore()
				// const favorite = store[naturate].find((item)=> {
				// 	return item.uid == uid
				// })
				const favoriteCondition = store.favorites.some((fav)=>fav.name== item.name)
				if(favoriteCondition){
					const nuevoFavorito = store.favorites.filter((fav)=>fav.name != item.name)
					setStore({
						...store, 
						favorites : nuevoFavorito
					})
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				} else{
					setStore({
						...store,
						favorites : [...store.favorites, item]
					})
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			}
		}
	};
};

export default getState;
