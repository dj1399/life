(this.webpackJsonplifememberform=this.webpackJsonplifememberform||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),n=c(4),i=c.n(n),l=(c(14),c.p,c(15),c(16),c.p+"static/media/pic.bd7e164a.svg"),h=c.p+"static/media/Arrow 1.084e18e7.svg";var d=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"desktop",children:Object(a.jsxs)("div",{className:"row",style:{marginRight:"92px",marginLeft:"98px"},children:[Object(a.jsxs)("div",{className:"col-sm-6",children:[Object(a.jsxs)("div",{className:"heading",children:["NIMA ",Object(a.jsx)("br",{}),"LIFE",Object(a.jsx)("br",{})," MEMBERSHIP"]}),Object(a.jsxs)("a",{className:"link",href:"#",children:["DOWNLOAD BROCHURE",Object(a.jsx)("img",{src:h,className:"Image",alt:""})]})]}),Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"picture",src:l,style:{width:"100%"}})}),Object(a.jsx)("div",{className:"text",children:"Any ISM (Indian System of Medicine) graduate can br member of National Intergrated Medical Association. NIMA works in Three Tiger System i.e. Central Body, State Branch And Local Branch. An ISM graduate can become life member of any  Local branch of NIMA"})]})}),Object(a.jsxs)("div",{className:"mobile",children:[Object(a.jsxs)("div",{className:"heading",children:["NIMA ",Object(a.jsx)("br",{}),"LIFE",Object(a.jsx)("br",{})," MEMBERSHIP"]}),Object(a.jsx)("div",{className:"text",children:"Any ISM (Indian System of Medicine) graduate can br member of National Intergrated Medical Association. NIMA works in Three Tiger System i.e. Central Body, State Branch And Local Branch. An ISM graduate can become life member of any  Local branch of NIMA"}),Object(a.jsxs)("a",{className:"link",href:"#",children:["DOWNLOAD BROCHURE",Object(a.jsx)("img",{src:h,className:"Image",alt:""})]}),Object(a.jsx)("img",{className:"picture",src:l,style:{width:"100%"}})]})]})},o=c(2),j=c(5),m=c(6),b=c(8),u=c(7),O=(c(17),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).handleChangeBranch=function(e){a.setState({branch:e.target.value})},a.handleChangePlace=function(e){a.setState({place:e.target.value})},a.handleChangeName=function(e){a.setState({doctorName:e.target.value})},a.search=function(e){e.preventDefault(),console.log(a.state.branch+" "+a.state.place);var t=a.state.branch,c=a.state.place,s=a.state.doctorName;console.log(t+" "+c+" "+s);var r=a.state.doctors.filter((function(e){return e.branch===t&&e.state===c&&e.name===s?e:0}));void 0===r[0]?alert("Doctor not found, select some other value !"):a.setState({currentDoctor:r[0]})},a.filterBranch=function(){var e=[];return a.state.doctors.map((function(t){return e.push(t.branch)})),e=Object(o.a)(new Set(e))},a.filterPlace=function(){var e=[];return a.state.doctors.map((function(t){return e.push(t.state)})),e=Object(o.a)(new Set(e))},a.filterName=function(){var e=[];return a.state.doctors.map((function(t){return e.push(t.name)})),e=Object(o.a)(new Set(e))},a.state={doctors:[{name:"DR. SHANTILAL KISHAN SHARMA",MBSNumber:"7894563210",branch:"Pune",state:"Maharashtra",status:"Chairman"},{name:"DR. KIRAN DESHPANDE",MBSNumber:"7894563210",branch:"Kharnar",state:"Hyderabad",status:"Convenor"},{name:"DR. DINESH RATHI",MBSNumber:"7894563210",branch:"Panji",state:"Goa",status:"Treasurer"}],currentDoctor:{},branch:"",place:"",doctorName:""},a}return Object(m.a)(c,[{key:"render",value:function(){return console.log(this.state.currentDoctor),Object(a.jsx)("div",{className:"form-container Search__MainDiv",children:Object(a.jsxs)("div",{className:"row Search__row  align-items-end",children:[Object(a.jsxs)("div",{className:"col-md-5 col-sm-12",id:"form-card",children:[Object(a.jsx)("h5",{className:"Search__txthead",children:"SEARCH NIMA MBS DETAILS"}),Object(a.jsx)("p",{className:"Search__para",children:"Welcome to the official website of the NATIONAL INTEGRATED MEDICAL Association, the premier organisation OF AYUSH PRACTITIONERS in India. NIMA is the dignity and honour of its members."}),Object(a.jsxs)("form",{id:"form",onSubmit:this.search,children:[Object(a.jsxs)("select",{className:"form-control Search__select",onChange:this.handleChangeBranch,name:"branch",children:[Object(a.jsx)("option",{value:"",children:"Select Branch"}),this.filterBranch().map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]}),Object(a.jsxs)("select",{className:"form-control mt-3 Search__select",name:"place",onChange:this.handleChangePlace,children:[Object(a.jsx)("option",{value:"",children:"Select Place"}),this.filterPlace().map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]}),Object(a.jsxs)("select",{className:"form-control mt-3 Search__select mb-5",name:"place",onChange:this.handleChangeName,children:[Object(a.jsx)("option",{value:"",children:"Select Name"}),this.filterName().map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary Search__btn",children:"SEARCH"})]})]}),Object(a.jsxs)("div",{className:"col-md-7 col-sm-12 ml-0 pl-0",children:[Object(a.jsx)("div",{className:"desktop",children:Object(a.jsxs)("table",{className:"Search__table",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Name"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.name})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"MBS Number"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.MBSNumber})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Branch"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.branch})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Place"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.state})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Status"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.status})]})]})}),Object(a.jsx)("div",{className:"mobile",children:Object(a.jsxs)("table",{className:"Search__table",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Name"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.name})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"MBS Number"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.MBSNumber})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Branch"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.branch})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Place"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.state})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"Search__title",children:"Status"}),Object(a.jsx)("td",{className:"Search__data",children:this.state.currentDoctor.status})]})]})})]})]})})}}]),c}(s.Component));c(18);var N=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("div",{className:"Footer__heading",children:"Office Add."}),Object(a.jsxs)("div",{className:"Footer__subheading",children:[Object(a.jsx)("div",{children:"G/2, Mohan Kunj, M.J. Phule Road, Naigon, Dadar(East),"}),Object(a.jsx)("div",{children:"Mumbai - 400014"}),Object(a.jsx)("div",{children:"Ph : 022-24123407"}),Object(a.jsx)("div",{children:"3:00pm - 5:00pm"}),Object(a.jsx)("div",{children:"Sunday closed"})]})]})};var x=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{}),Object(a.jsx)(O,{}),Object(a.jsx)(N,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.13fc55c5.chunk.js.map