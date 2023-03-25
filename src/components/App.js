import React from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";

import hogs from "../porkers_data";

function App() {


	return (
		<div className="App">
			<Nav />
			<Hoglist hogs = {hogs}/>
		</div>
	);
}

export default App;
