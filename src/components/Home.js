import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";
import "../App.css";

import Add from "./Add.js";
import Update from "./Update.js";

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			steps: [],
			step: {},
			loaded: false,
			add: false,
			arms: true
		}
	}
	componentDidMount = () => {
		this.dataLoad();
		this.interval();
	}
	componentDidUpdate(nextProps){
		if(this.props.steps !== nextProps.steps){
			this.dataLoad();
		}
	}	
	
	componentWillUnmount = () => {
		clearInterval(this.state.intervalId);
	}
		
	dataLoad = () => {
		if(this.props.steps){
			this.setState({
				steps: this.props.steps
			}, () => {
				if(this.state.steps.length > 0){
					this.setState({
						loaded: true
					}, () => {
						console.log("loaded")
					})
				}
			})
		}
	}

	interval = () => {
    let intervalId = setInterval(this.arms, 1000)
    this.setState({
      intervalId: intervalId
    })
	};
	
	arms = () => {
		this.setState({
			arms: !this.state.arms
		})
	}
			
	deleteStep = (step) => {
		this.props.actions.deleteStep(step)
		.then(res => {
			this.dataLoad();
		})
	}
	
	addButton = () => {
		this.setState({
			add: !this.state.add
		})
	}
	
	updateButton = () => {
		this.setState({
			update: !this.state.update
		})
	}
	
	findOne = (step) => {
		this.setState({
			step: step
		}, () => {
			this.updateButton()
		})
	}
	
	updateStep = (step) => {
		this.setState({
			step: step
		}, () => {
			const list = this.state.steps;
			const item = list.filter(step => step.id === this.state.step.id)
			const index = list.indexOf(item[0]);	
			list.splice(index, 1, this.state.step)
			this.setState({
				steps: list
			})
		})
	}
		
	render(){
		return(
			<div className="back">
				<div>
					<h1 className="title">Workout Routine</h1>
					<div id="imgCont">
						<div id="imgBox">
							<img src="./lifting2.png" alt="lift" id="lifting"></img>
						</div>
						<div id="imgBox">
							{this.state.arms ? (<img src="./arms.png" alt="arms" id="arms"></img>) : (
								<img src="./arms2.png" alt="arms2" id="arms"></img>)}
						</div>
						<div id="imgBox">
							{this.state.arms ? (<img src="./pushup.png" alt="pushup" id="pushup"></img>) : (
								<img src="./pushup2.png" alt="pushup" id="top"></img>)}
						</div>
					</div>
					<div id="sloganBox">
						<div id="slogan"><img src="./cycling.png" alt="cycling" height="23px" width="23px"></img>Everything You Want Is <span id="red">Outside Of Your Comfort Zone!!!</span></div>
					</div>
					<div>
						<div className="container-table">
							<table className="table">
								<thead>
									<tr>
										<th id="tId">Name</th>
										<th id="tReps">Reps</th>
										<th id="tDesc">Description</th>
										<th id="tUpd">Update</th>
										<th id="tDel">Delete</th>
									</tr>
								</thead>
								{this.state.loaded ? (
									<tbody>
									{this.state.steps.map( step => (
										<tr key={step.id}>
											<td>{step.name}</td>
											<td id="tReps">{step.reps}</td>
											<td>{step.description}</td>
											<td id="bUpd" onClick={() => this.findOne(step)}>Update</td>
											<td id="bDel" onClick={() => this.deleteStep(step)}>Delete</td>
										</tr>
									))}
									</tbody>
								) : (
									<tbody>
										<tr>
											<td> </td>
											<td> </td>
											<td> </td>
											<td> </td>
											<td> </td>
										</tr>
									</tbody>
								)}
							</table>
						</div>
						<div>
							{this.state.update ? (
								<Update
									id= {this.state.step.id}
									step = {this.state.step}
									updateButton = {this.updateButton}
									updateStep = {this.updateStep}
								>
								</Update>
							) : (
							<div>
							{this.state.add ? (
								<div id="add">
									<Add
										addButton={this.addButton}
									/>
									
								</div>
							) : (
								<div id="add">
									<button className="bAdd" onClick={this.addButton}>Add To Workout</button>
								</div>
							)}
							</div>
							)}
						</div>
					</div>
				</div>
				<footer>
					<div className="refer">
						<Link to="https://adrianbriones.herokuapp.com/#!/projects" id="white">By Adrian Briones</Link>
					</div>
				</footer>
			</div>
		)
	}
}

const mapStateToProps = state => {
	/*if(state.steps.length > 0){
		console.log(state.steps)
		return { steps: state.steps}
	} else {
		return { steps: [{id: null, name: "", reps: null, description: ""}]};
	}*/
	return { steps: state.steps}
}

const mapDispatchToProps = dispatch => {
	  return {actions: bindActionCreators(actions, dispatch)}
	}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));