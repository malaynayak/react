(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[4],{309:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(310),l=n.n(i);t.a=function(e){var t=null,n=[l.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&n.push(l.a.Invalid);var a=null;switch(e.invalid&&e.touched&&(a=r.a.createElement("p",{className:l.a.ValidationError},"Please enter a valid value !")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({value:e.value,className:n.join(" ")},e.elementConfig,{onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({value:e.value,className:n.join(" ")},e.elementConfig,{onChange:e.changed}));break;case"select":t=r.a.createElement("select",{value:e.value,className:n.join(" "),onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayName)})));break;default:t=r.a.createElement("input",Object.assign({value:e.value,className:n.join(" ")},e.elementConfig,{onChange:e.changed}))}return r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{className:l.a.Lebel},e.label),t,a)}},310:function(e,t,n){e.exports={Input:"Input_Input__11w2K",Label:"Input_Label__MW-i8",InputElement:"Input_InputElement__3_0Sd",Invalid:"Input_Invalid__eKJs1",ValidationError:"Input_ValidationError__2ZjiX"}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),t.maxLength&&(n=e.trim().length<=t.maxLength&&n),t.email){n=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.trim())&&n}return n}},315:function(e,t,n){e.exports={Auth:"Auth_Auth__2AFbe",ContactData:"Auth_ContactData__1DkED"}},316:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(3),i=n(4),l=n(6),o=n(5),u=n(7),c=n(0),s=n.n(c),p=n(20),d=n(25),h=n(309),m=n(81),g=n(55),v=n(315),f=n.n(v),b=n(21),O=n(311);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,email:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!0}},isSignUp:!0,formIsValid:!1},n.switchAuthModeHandler=function(e){e.preventDefault(),n.setState((function(e){return{isSignUp:!e.isSignUp}}))},n.inputChangedHandeler=function(e,t){var r=j({},n.state.controls,Object(a.a)({},t,j({},n.state.controls[t],{value:e.target.value,valid:Object(O.a)(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignUp)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return s.a.createElement(h.a,{changed:function(n){return e.inputChangedHandeler(n,t.id)},key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,value:t.config.value})}));this.props.loading&&(a=s.a.createElement(m.a,null));var r=null;this.props.error&&(r=s.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=s.a.createElement(d.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:f.a.Auth},i,r,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(g.a,{clicked:this.submitHandler,btnType:"Success"},"SUBMIT"),s.a.createElement(g.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"SIGN UP")))}}]),t}(c.Component);t.default=Object(p.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthRedirectPath:function(){return e(b.i("/"))}}}))(w)}}]);
//# sourceMappingURL=4.9eaf5b39.chunk.js.map