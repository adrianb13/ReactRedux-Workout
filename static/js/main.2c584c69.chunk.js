(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){e.exports=n(67)},48:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getSteps",(function(){return k})),n.d(a,"saveStep",(function(){return y})),n.d(a,"updateStep",(function(){return T})),n.d(a,"deleteStep",(function(){return A}));var r=n(0),s=n.n(r),c=n(17),o=n.n(c),i=n(12),l=(n(48),n(9)),p=n(10),u=n(13),d=n(11),m=n(14),E=n(68),f=(n(27),n(6)),h=Object(f.a)(),S=n(7),v=n(16),b=n.n(v),O=function(){return b.a.get("https://workout-list-java.herokuapp.com/api/steps")},g=function(e){return b.a.post("https://workout-list-java.herokuapp.com/api/steps",e)},j=function(e){return b.a.put("https://workout-list-java.herokuapp.com/api/steps/"+e.id,e)},C=function(e){return b.a.delete("https://workout-list-java.herokuapp.com/api/steps/"+e.id)},k=function(){return function(e){return O().then((function(t){e(N(t.data))})).catch((function(e){return console.log(e)}))}},N=function(e){return{type:"GET_STEPS_SUCCESS",steps:e}},y=function(e){return function(t){return g(e).then((function(e){return t(w(e.data)),e})).catch((function(e){return console.log(e)}))}},w=function(e){return{type:"SAVE_STEP_SUCCESS",step:e}},T=function(e){return function(t){return j(e).then((function(e){return t(U(e.data)),e})).catch((function(e){return console.log(e)}))}},U=function(e){return{type:"UPDATE_STEP_SUCCESS",step:e}},A=function(e){return function(t){return C(e).then((function(n){return t(D(e)),O(),n})).catch((function(e){return console.log(e)}))}},D=function(e){return{type:"DELETE_STEP_SUCCESS",step:e}},_=n(19),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",reps:null,description:""},n.stepInfo=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value;n.setState(Object(_.a)({},a,r))},n.saveStep=function(){null===n.state.name?n.setState({message:"Please Name Your Workout Step."}):null===n.state.reps?n.setState({message:"Please Add Reps To Your Workout Step."}):null===n.state.description?n.setState({message:"Please Add A Description To Your Workout Step"}):n.props.saveStep({name:n.state.name,reps:parseInt(n.state.reps),description:n.state.description}).then((function(e){n.props.addButton()})).catch((function(e){return console.log(e)}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"addCont"},s.a.createElement("h2",null,"Add To Your Workout"),s.a.createElement("div",{onChange:this.stepInfo},s.a.createElement("div",null,this.state.message),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"Name:"),s.a.createElement("input",{name:"name"})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"Reps:"),s.a.createElement("input",{name:"reps"})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"Description:"),s.a.createElement("textarea",{name:"description"}))),s.a.createElement("button",{className:"bAdd",onClick:this.saveStep},"Add"),s.a.createElement("button",{className:"bAdd",id:"bCxl",onClick:this.props.addButton},"Cancel"))}}]),t}(s.a.Component),I=Object(E.d)(Object(i.b)(null,(function(e){return{saveStep:function(t){return e(y(t))}}}))(B)),P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:n.props.step.name,reps:n.props.step.reps,description:n.props.step.description,redirect:!1},n.stepInfo=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value;n.setState(Object(_.a)({},a,r))},n.updateStep=function(){null===n.state.name&&n.setState({name:n.props.step.name}),null===n.state.reps&&n.setState({reps:n.props.step.reps}),null===n.state.description&&n.setState({description:n.props.step.description}),n.props.actions.updateStep({id:n.props.id,name:n.state.name,reps:parseInt(n.state.reps),description:n.state.description}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),n.props.updateButton()},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"back"},s.a.createElement("div",{id:"updCont",onChange:this.stepInfo},s.a.createElement("h2",null,'Updating "',this.props.step.name,'"'),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"New Name:"),s.a.createElement("input",{name:"name",placeholder:this.props.step.name})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"New Rep Count:"),s.a.createElement("input",{name:"reps",placeholder:this.props.step.reps})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"New Description:"),s.a.createElement("textarea",{name:"description",placeholder:this.props.step.description})),s.a.createElement("button",{className:"bAdd",onClick:this.updateStep},"Update"),s.a.createElement("button",{className:"bAdd",id:"bCxl",onClick:this.props.updateButton},"Cancel")))}}]),t}(s.a.Component),x=Object(E.d)(Object(i.b)(null,(function(e){return{actions:Object(S.b)(a,e)}}))(P)),W=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){n.dataLoad()},n.componentWillUnmount=function(){clearInterval(n.state.intervalId)},n.dataLoad=function(){n.props.steps&&n.setState({steps:n.props.steps},(function(){n.state.steps.length>0&&n.setState({loaded:!0},(function(){console.log("loaded")}))}))},n.deleteStep=function(e){n.props.actions.deleteStep(e).then((function(e){n.dataLoad()}))},n.addButton=function(){n.setState({add:!n.state.add})},n.updateButton=function(){n.setState({update:!n.state.update})},n.findOne=function(e){n.setState({step:e},(function(){n.updateButton()}))},n.updateStep=function(e){n.setState({step:e},(function(){var e=n.state.steps,t=e.filter((function(e){return e.id===n.state.step.id})),a=e.indexOf(t[0]);e.splice(a,1,n.state.step),n.setState({steps:e})}))},n.state={steps:[],step:{},loaded:!1,add:!1},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.steps!==e.steps&&this.dataLoad()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"back"},s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"Workout Routine"),s.a.createElement("div",{id:"sloganBox"},s.a.createElement("div",{id:"slogan"},"Everything You Want Is ",s.a.createElement("span",{id:"red"},"Outside Of Your Comfort Zone!!!"))),s.a.createElement("div",null,s.a.createElement("div",{className:"container-table"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{id:"tId"},"Name"),s.a.createElement("th",{id:"tReps"},"Reps"),s.a.createElement("th",{id:"tDesc"},"Description"),s.a.createElement("th",{id:"tUpd"},"Update"),s.a.createElement("th",{id:"tDel"},"Delete"))),this.state.loaded?s.a.createElement("tbody",null,this.state.steps.map((function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null,t.name),s.a.createElement("td",{id:"tReps"},t.reps),s.a.createElement("td",null,t.description),s.a.createElement("td",{id:"bUpd",onClick:function(){return e.findOne(t)}},"Update"),s.a.createElement("td",{id:"bDel",onClick:function(){return e.deleteStep(t)}},"Delete"))}))):s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null," "),s.a.createElement("td",null," "),s.a.createElement("td",null," "),s.a.createElement("td",null," "),s.a.createElement("td",null," "))))),s.a.createElement("div",null,this.state.update?s.a.createElement(x,{id:this.state.step.id,step:this.state.step,updateButton:this.updateButton,updateStep:this.updateStep}):s.a.createElement("div",null,this.state.add?s.a.createElement("div",{id:"add"},s.a.createElement(I,{addButton:this.addButton})):s.a.createElement("div",{id:"add"},s.a.createElement("button",{className:"bAdd",onClick:this.addButton},"Add To Workout")))))))}}]),t}(s.a.Component),R=Object(E.d)(Object(i.b)((function(e){return{steps:e.steps}}),(function(e){return{actions:Object(S.b)(a,e)}}))(W)),L=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement(E.b,{history:h},s.a.createElement(E.c,null,s.a.createElement(E.a,{exact:!0,path:"/",component:R}),s.a.createElement(E.a,{exact:!0,path:"/steps",component:R}),s.a.createElement(E.a,{component:R})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y={steps:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STEPS_SUCCESS":return Object.assign({},e,{steps:e.steps.concat(t.steps)});case"SAVE_STEP_SUCCESS":return Object.assign({},e,{steps:e.steps.concat(t.step)});case"UPDATE_STEP_SUCCESS":var n=Object.assign([],e.steps),a=n.filter((function(e){return e.id===t.step.id})),r=n.indexOf(a[0]);return n.splice(r,1,t.step),console.log(n),Object.assign({},e,{steps:n});case"DELETE_STEP_SUCCESS":var s=Object.assign([],e),c=s.steps.filter((function(e){return parseInt(e.id)===parseInt(t.step.id)})),o=s.steps.indexOf(c[0]);return s.steps.splice(o,1),s;default:return e}},J=n(38),V=Object(S.c)(G,Object(S.a)(J.a));V.dispatch(k()),o.a.render(s.a.createElement(i.a,{store:V},s.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.2c584c69.chunk.js.map