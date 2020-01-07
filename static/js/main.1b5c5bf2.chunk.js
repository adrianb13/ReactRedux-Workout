(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{29:function(e,t,a){},41:function(e,t,a){e.exports=a(69)},50:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getSteps",(function(){return y})),a.d(n,"saveStep",(function(){return w})),a.d(n,"updateStep",(function(){return A})),a.d(n,"deleteStep",(function(){return U}));var r=a(0),s=a.n(r),c=a(20),i=a.n(c),o=a(13),l=(a(50),a(10)),p=a(11),u=a(14),d=a(12),m=a(15),E=a(16),h=(a(29),a(3)),f=Object(h.a)(),v=a(17),S=a(8),b=a(19),g=a.n(b),O=function(){return g.a.get("https://workout-list-java.herokuapp.com/api/steps")},j=function(e){return g.a.post("https://workout-list-java.herokuapp.com/api/steps",e)},C=function(e){return g.a.put("https://workout-list-java.herokuapp.com/api/steps/"+e.id,e)},k=function(e){return g.a.delete("https://workout-list-java.herokuapp.com/api/steps/"+e.id)},y=function(){return function(e){return O().then((function(t){e(N(t.data))})).catch((function(e){return console.log(e)}))}},N=function(e){return{type:"GET_STEPS_SUCCESS",steps:e}},w=function(e){return function(t){return j(e).then((function(e){return t(B(e.data)),e})).catch((function(e){return console.log(e)}))}},B=function(e){return{type:"SAVE_STEP_SUCCESS",step:e}},A=function(e){return function(t){return C(e).then((function(e){return t(T(e.data)),e})).catch((function(e){return console.log(e)}))}},T=function(e){return{type:"UPDATE_STEP_SUCCESS",step:e}},U=function(e){return function(t){return k(e).then((function(a){return t(D(e)),O(),a})).catch((function(e){return console.log(e)}))}},D=function(e){return{type:"DELETE_STEP_SUCCESS",step:e}},x=a(22),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",reps:null,description:""},a.stepInfo=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(x.a)({},n,r))},a.saveStep=function(){null===a.state.name?a.setState({message:"Please Name Your Workout Step."}):null===a.state.reps?a.setState({message:"Please Add Reps To Your Workout Step."}):null===a.state.description?a.setState({message:"Please Add A Description To Your Workout Step"}):a.props.saveStep({name:a.state.name,reps:parseInt(a.state.reps),description:a.state.description}).then((function(e){a.props.addButton()})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"addCont"},s.a.createElement("h2",null,"Add To Your Workout"),s.a.createElement("div",{onChange:this.stepInfo},s.a.createElement("div",null,this.state.message),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"Name:"),s.a.createElement("input",{name:"name"})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"Reps:"),s.a.createElement("input",{name:"reps"})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"Description:"),s.a.createElement("textarea",{name:"description"}))),s.a.createElement("button",{className:"bAdd",onClick:this.saveStep},"Add"),s.a.createElement("button",{className:"bAdd",id:"bCxl",onClick:this.props.addButton},"Cancel"))}}]),t}(s.a.Component),I=Object(E.f)(Object(o.b)(null,(function(e){return{saveStep:function(t){return e(w(t))}}}))(_)),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.step.name,reps:a.props.step.reps,description:a.props.step.description,redirect:!1},a.stepInfo=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(x.a)({},n,r))},a.updateStep=function(){null===a.state.name&&a.setState({name:a.props.step.name}),null===a.state.reps&&a.setState({reps:a.props.step.reps}),null===a.state.description&&a.setState({description:a.props.step.description}),a.props.actions.updateStep({id:a.props.id,name:a.state.name,reps:parseInt(a.state.reps),description:a.state.description}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),a.props.updateButton()},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"back"},s.a.createElement("div",{id:"updCont",onChange:this.stepInfo},s.a.createElement("h2",null,'Updating "',this.props.step.name,'"'),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"New Name:"),s.a.createElement("input",{name:"name",placeholder:this.props.step.name})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"New Rep Count:"),s.a.createElement("input",{name:"reps",placeholder:this.props.step.reps})),s.a.createElement("div",null,s.a.createElement("div",{className:"header tag"},"New Description:"),s.a.createElement("textarea",{name:"description",placeholder:this.props.step.description})),s.a.createElement("button",{className:"bAdd",onClick:this.updateStep},"Update"),s.a.createElement("button",{className:"bAdd",id:"bCxl",onClick:this.props.updateButton},"Cancel")))}}]),t}(s.a.Component),W=Object(E.f)(Object(o.b)(null,(function(e){return{actions:Object(S.b)(n,e)}}))(P)),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.dataLoad(),a.interval()},a.componentWillUnmount=function(){clearInterval(a.state.intervalId)},a.dataLoad=function(){a.props.steps&&a.setState({steps:a.props.steps},(function(){a.state.steps.length>0&&a.setState({loaded:!0},(function(){console.log("loaded")}))}))},a.interval=function(){var e=setInterval(a.arms,1e3);a.setState({intervalId:e})},a.arms=function(){a.setState({arms:!a.state.arms})},a.deleteStep=function(e){a.props.actions.deleteStep(e).then((function(e){a.dataLoad()}))},a.addButton=function(){a.setState({add:!a.state.add})},a.updateButton=function(){a.setState({update:!a.state.update})},a.findOne=function(e){a.setState({step:e},(function(){a.updateButton()}))},a.updateStep=function(e){a.setState({step:e},(function(){var e=a.state.steps,t=e.filter((function(e){return e.id===a.state.step.id})),n=e.indexOf(t[0]);e.splice(n,1,a.state.step),a.setState({steps:e})}))},a.state={steps:[],step:{},loaded:!1,add:!1,arms:!0},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.steps!==e.steps&&this.dataLoad()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"back"},s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"Workout Routine"),s.a.createElement("div",{id:"imgCont"},s.a.createElement("div",{id:"imgBox"},s.a.createElement("img",{src:"./lifting2.png",alt:"lift",id:"lifting"})),s.a.createElement("div",{id:"imgBox"},this.state.arms?s.a.createElement("img",{src:"./arms.png",alt:"arms",id:"arms"}):s.a.createElement("img",{src:"./arms2.png",alt:"arms2",id:"arms"})),s.a.createElement("div",{id:"imgBox"},this.state.arms?s.a.createElement("img",{src:"./pushup.png",alt:"pushup",id:"pushup"}):s.a.createElement("img",{src:"./pushup2.png",alt:"pushup",id:"top"}))),s.a.createElement("div",{id:"sloganBox"},s.a.createElement("div",{id:"slogan"},s.a.createElement("img",{src:"./cycling.png",alt:"cycling",height:"23px",width:"23px"}),"Everything You Want Is ",s.a.createElement("span",{id:"red"},"Outside Of Your Comfort Zone!!!"))),s.a.createElement("div",null,s.a.createElement("div",{className:"container-table"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{id:"tId"},"Name"),s.a.createElement("th",{id:"tReps"},"Reps"),s.a.createElement("th",{id:"tDesc"},"Description"),s.a.createElement("th",{id:"tUpd"},"Update"),s.a.createElement("th",{id:"tDel"},"Delete"))),this.state.loaded?s.a.createElement("tbody",null,this.state.steps.map((function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null,t.name),s.a.createElement("td",{id:"tReps"},t.reps),s.a.createElement("td",null,t.description),s.a.createElement("td",{id:"bUpd",onClick:function(){return e.findOne(t)}},"Update"),s.a.createElement("td",{id:"bDel",onClick:function(){return e.deleteStep(t)}},"Delete"))}))):s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null," "),s.a.createElement("td",null," "),s.a.createElement("td",null," "),s.a.createElement("td",null," "),s.a.createElement("td",null," "))))),s.a.createElement("div",null,this.state.update?s.a.createElement(W,{id:this.state.step.id,step:this.state.step,updateButton:this.updateButton,updateStep:this.updateStep}):s.a.createElement("div",null,this.state.add?s.a.createElement("div",{id:"add"},s.a.createElement(I,{addButton:this.addButton})):s.a.createElement("div",{id:"add"},s.a.createElement("button",{className:"bAdd",onClick:this.addButton},"Add To Workout")))))),s.a.createElement("footer",null,s.a.createElement("div",{className:"refer"},s.a.createElement(v.a,{to:"https://adrianbriones.herokuapp.com/#!/projects",id:"white"},"By Adrian Briones"))))}}]),t}(s.a.Component),L=Object(E.f)(Object(o.b)((function(e){return{steps:e.steps}}),(function(e){return{actions:Object(S.b)(n,e)}}))(R)),Y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement(E.b,{history:f},s.a.createElement(E.c,null,s.a.createElement(E.a,{exact:!0,path:"/",component:L}),s.a.createElement(E.a,{exact:!0,path:"/steps",component:L}),s.a.createElement(E.a,{component:L})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G={steps:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STEPS_SUCCESS":return Object.assign({},e,{steps:e.steps.concat(t.steps)});case"SAVE_STEP_SUCCESS":return Object.assign({},e,{steps:e.steps.concat(t.step)});case"UPDATE_STEP_SUCCESS":var a=Object.assign([],e.steps),n=a.filter((function(e){return e.id===t.step.id})),r=a.indexOf(n[0]);return a.splice(r,1,t.step),console.log(a),Object.assign({},e,{steps:a});case"DELETE_STEP_SUCCESS":var s=Object.assign([],e),c=s.steps.filter((function(e){return parseInt(e.id)===parseInt(t.step.id)})),i=s.steps.indexOf(c[0]);return s.steps.splice(i,1),s;default:return e}},V=a(40),M=Object(S.c)(J,Object(S.a)(V.a));M.dispatch(y()),i.a.render(s.a.createElement(o.a,{store:M},s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1b5c5bf2.chunk.js.map