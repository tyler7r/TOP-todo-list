(()=>{"use strict";const e=document.querySelector(".projectSection"),t=document.querySelector(".projects");const c=document.querySelector(".projectForm");let d=[];function l(e,t,c,d){this.title=e,this.description=t,this.dueDate=c,this.priority=d}document.querySelector("#submitProject").addEventListener("click",(o=>{o.preventDefault(),function(){let e=new l(document.querySelector("#projectTitle").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#priority").value);d.push(e)}(),c.classList.add("hidden"),document.querySelectorAll("input").forEach((e=>e.value="")),document.querySelector("#priority").value="low",console.log(d),function(t){for(let c=t.length-1;c<t.length;c++){let d=t[c],l=document.createElement("div");l.classList.add("projectCard"),l.classList.add(`no${[c+1]}`),e.appendChild(l);const o=document.querySelector(".no"+[c+1]);for(let e in d){let t=document.createElement("div");t.classList.add(`project${e}`),o.appendChild(t),"priority"===e?(t.classList.add(`${d[e]}`),t.textContent=""):t.textContent+=d[e]}let n=document.createElement("img");n.classList.add("ellipsis"),n.setAttribute("id",`e${[c+1]}`),n.src="ellipsis.svg",o.appendChild(n)}}(d),function(e){for(let c=e.length-1;c<e.length;c++){let d=e[c],l=document.createElement("div");l.classList.add("projectTab"),l.classList.add(`no${[c+1]}`),t.appendChild(l);const o=document.querySelector(".no"+[c+1]);for(let e in d)if("title"===e||"dueDate"===e){let t=document.createElement("div");t.classList.add(`projectTab${e}`),t.textContent=d[e],o.appendChild(t)}let n=document.createElement("img");n.classList.add("sidebarEllipsis"),n.setAttribute("id",`sidebarE${[c+1]}`),n.src="ellipsis.svg",o.appendChild(n)}}(d),function(){let e=!1;document.querySelectorAll(".ellipsis").forEach((t=>{t.addEventListener("click",(t=>{if(!0===e)return;const c=document.querySelector(`.projectCard.no${t.target.id.slice(1)}`);t.stopImmediatePropagation();const d=document.createElement("div");d.classList.add("popupMenu");const l=document.createElement("div");l.classList.add("popupDelete"),l.setAttribute("id",`d${t.target.id.slice(1)}`),l.textContent="Delete",d.appendChild(l);const o=document.createElement("div");o.classList.add("popupEdit"),o.textContent="Edit",d.appendChild(o),c.appendChild(d),document.querySelectorAll(".popupDelete").forEach((e=>{e.addEventListener("click",(e=>{document.querySelectorAll(`.no${e.target.id.slice(1)}`).forEach((e=>{e.classList.add("hidden")}))}))})),e=!0}))}))}()})),document.querySelector(".addProject").addEventListener("click",(()=>{c.classList.remove("hidden")})),document.querySelector("#title").addEventListener("click",(()=>{console.log(d)}))})();