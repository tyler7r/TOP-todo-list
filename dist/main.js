(()=>{"use strict";function e(e,t,r,c){this.title=e,this.description=t,this.dueDate=r,this.priority=c}document.querySelector(".addProject").addEventListener("click",(()=>{document.querySelector(".projectForm").classList.remove("hidden"),document.querySelector("#submitProject").addEventListener("click",(t=>{t.preventDefault(),function(){let t=new e(document.querySelector("#projectTitle").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#priority").value);console.log(t)}()}))}))})();