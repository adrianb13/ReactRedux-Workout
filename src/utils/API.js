import axios from "axios";

export default {
	getSteps: () => {
		return axios.get("https://workout-list-java.herokuapp.com/api/steps");
	},
	saveStep: (step) => {
		return axios.post("https://workout-list-java.herokuapp.com/api/steps", step);
	},
	updateStep: (step) => {
		return axios.put("https://workout-list-java.herokuapp.com/api/steps/" + step.id , step);
	},
	deleteStep: (step) => {
		return axios.delete("https://workout-list-java.herokuapp.com/api/steps/" + step.id);
	}
}

//http://localhost:8080/api/steps
//https://workout-list-java.herokuapp.com/api/steps