import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import "./App.css";

//import history from "./history/history.js";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./components/Home.js";

const history = createBrowserHistory({ basename: "/ReactRedux-Workout" });

class App extends React.Component {
	render(){
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/steps" component={Home} />
					{/* <Route path="/portfolio" component={() => { 
					  window.location.href = "https://adrianbriones.herokuapp.com/projects"; 
					  return null;
					}}/> */}
					<Route component={Home} />
				</Switch>
			</Router>
		)
	}
}

export default App;