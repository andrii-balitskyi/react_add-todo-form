(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),r=a.n(o),s=a(8),l=a(1),c=a(2),d=a(4),m=a(3),u=a(5),p=(a(14),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=(a(15),function(e){var t=e.title,a=e.completed;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"item-title"},t),i.a.createElement("span",{className:"item-status"},a?"Completed":"In Progress"))}),g=function(e){var t=e.user;return i.a.createElement("i",null,t)},y=function(e){var t=e.todos;return i.a.createElement("ul",{className:"list list-group"},t.map((function(e){return i.a.createElement("li",{className:"list-group-item",key:e.id},i.a.createElement(b,{title:e.title,completed:e.completed})," | ",i.a.createElement(g,{user:e.user.name}))})))},f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={newTodoTitle:"",selectedUserId:0,isTodoTypedIn:!1,isUserSelected:!1},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.newTodoTitle,i=a.selectedUserId;e.setState({isTodoTypedIn:!n,isUserSelected:!i}),n&&i&&(e.props.addTodo(n,i),e.setState({newTodoTitle:"",selectedUserId:0}))},e.handleTodoTitleChange=function(t){e.setState({newTodoTitle:t.target.value,isTodoTypedIn:!1})},e.handleUserIdChange=function(t){e.setState({selectedUserId:+t.target.value,isUserSelected:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.newTodoTitle,a=e.selectedUserId,n=e.isTodoTypedIn,o=e.isUserSelected;return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex gap-2"},i.a.createElement("input",{type:"text",className:"mb-3 form-control w-25",placeholder:"Let's type your todo in!",value:t,onChange:this.handleTodoTitleChange}),n&&i.a.createElement("span",{className:"mt-2 text-danger"},"You forgot about your todo title")),i.a.createElement("div",{className:"d-flex gap-2"},i.a.createElement("select",{className:"form-select w-25 mb-3",value:a,onChange:this.handleUserIdChange},i.a.createElement("option",null,"Who's there?"),h.map((function(e){return i.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o&&i.a.createElement("span",{className:"mt-1 text-danger"},"Don't forget about the user name"))),i.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary mb-3"},"Add it!"))}}]),a}(i.a.Component),v=p.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={allTodos:v},e.addTodo=function(t,a){var n=e.state.allTodos,i={user:h.find((function(e){return e.id===a})),id:n[n.length-1].id+1,title:t,completed:!1};e.setState((function(e){return{allTodos:[].concat(Object(s.a)(e.allTodos),[i])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.allTodos;return i.a.createElement("div",{className:"App"},i.a.createElement(f,{addTodo:this.addTodo}),i.a.createElement(y,{todos:e}))}}]),a}(i.a.Component);r.a.render(i.a.createElement(w,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.606b2900.chunk.js.map