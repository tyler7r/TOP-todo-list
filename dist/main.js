(()=>{"use strict";const e=document.querySelector(".projectSection"),t=document.querySelector(".projects");function l(){document.querySelectorAll(".popupDelete").forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.id.length-1;document.querySelectorAll(`.no${e.target.id.slice(t)}`).forEach((e=>{e.remove()}))}))}))}const c=document.querySelector(".projectForm");let d=[];function i(e,t,l,c){this.title=e,this.description=t,this.dueDate=l,this.priority=c}document.querySelector("#submitProject").addEventListener("click",(n=>{n.preventDefault(),function(){let e=new i(document.querySelector("#projectTitle").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#priority").value);d.push(e)}(),c.classList.add("hidden"),document.querySelectorAll("input").forEach((e=>e.value="")),document.querySelector("#priority").value="low",console.log(d),function(t){for(let l=t.length-1;l<t.length;l++){let c=t[l],d=document.createElement("div");d.classList.add("projectCard"),d.classList.add(`no${[l+1]}`),e.appendChild(d);const i=document.querySelector(".no"+[l+1]);for(let e in c){let t=document.createElement("div");t.classList.add(`project${e}`),i.appendChild(t),"priority"===e?(t.classList.add(`${c[e]}`),t.textContent=""):t.textContent+=c[e]}let n=document.createElement("img");n.classList.add("ellipsis"),n.setAttribute("id",`e${[l+1]}`),n.src="ellipsis.svg",i.appendChild(n)}}(d),function(e){for(let l=e.length-1;l<e.length;l++){let c=e[l],d=document.createElement("div");d.classList.add("projectTab"),d.classList.add(`no${[l+1]}`),t.appendChild(d);const i=document.querySelector(".no"+[l+1]);for(let e in c)if("title"===e||"dueDate"===e){let t=document.createElement("div");t.classList.add(`projectTab${e}`),t.textContent=c[e],i.appendChild(t)}let n=document.createElement("img");n.classList.add("sidebarEllipsis"),n.setAttribute("id",`sidebarE${[l+1]}`),n.src="ellipsis.svg",i.appendChild(n)}}(d),function(){let e=!1;document.querySelectorAll(".ellipsis").forEach((t=>{t.addEventListener("click",(t=>{let c=t.target.id.length-1;if(!0===e)return;const d=document.querySelector(`.projectCard.no${t.target.id.slice(c)}`);t.stopImmediatePropagation();const i=document.createElement("div");i.classList.add("popupMenu");const n=document.createElement("div");n.classList.add("popupDelete"),n.setAttribute("id",`del${t.target.id.slice(c)}`),n.textContent="Delete",i.appendChild(n);const o=document.createElement("div");o.classList.add("popupEdit"),o.textContent="Edit",o.setAttribute("id",`edit${t.target.id.slice(c)}`),i.appendChild(o),d.appendChild(i),l(),e=!0}))}))}(),function(){let e=!1;document.querySelectorAll(".sidebarEllipsis").forEach((t=>{t.addEventListener("click",(t=>{if(!0===e)return;let c=t.target.id.length-1;const d=document.querySelector(`.projectTab.no${t.target.id.slice(c)}`);t.stopImmediatePropagation();const i=document.createElement("div");i.classList.add("popupDelete"),i.setAttribute("id",`sdel${t.target.id.slice(c)}`),i.textContent="Delete",d.appendChild(i),l(),e=!0}))}))}()})),document.querySelector(".addProject").addEventListener("click",(()=>{c.classList.remove("hidden")})),document.querySelector("#title").addEventListener("click",(()=>{console.log(d)}))})();