!function(){"use strict";fetch("https://orinoco-nitatemic.herokuapp.com/api/teddies").then((function(e){if(e.ok)return e.json()})).then((function(e){const t=new URLSearchParams(window.location.search).get("id");let n=-1;for(let o=0;o<e.length;o++)e[o]._id===t&&(n=o);-1===n&&alert("Teddy not found"),document.title=e[n].name+" | Orinoco";let o=document.createElement("div");o.className="row",document.getElementById("container").appendChild(o);let l=document.createElement("div");l.className="col",o.appendChild(l);let c=document.createElement("div");c.className="col-auto d-none d-lg-block",l.appendChild(c);let a=document.createElement("img");a.src=e[n].imageUrl,a.className="img-fluid rounded",a.width="400",a.height="500",c.appendChild(a);let d=document.createElement("div");d.className="col mt-5",o.appendChild(d);let r=document.createElement("h1");r.textContent=e[n].name,d.appendChild(r);let i=document.createElement("h2");i.className="h5",i.textContent=e[n].description,d.appendChild(i);let m=document.createElement("h3");m.textContent=e[n].price/100+"€",d.appendChild(m);let s=document.createElement("h4");s.className="h6",s.textContent="Choissisez la couleur de votre teddy :",d.appendChild(s);let p=document.createElement("form");p.className="form-inline",d.appendChild(p);let u=document.createElement("select");u.className="dropdown",u.id="colorschoise";for(let t=0;t<e[n].colors.length;t++){let o=document.createElement("option");o.textContent=e[n].colors[t],u.appendChild(o)}p.appendChild(u);let h=document.createElement("button");h.type="submit",h.className="btn btn-warning",h.onclick=function(e){e.preventDefault();const o=document.getElementById("colorschoise").value;!function(e,t,n){const o={id:e,color:t,i:n};null===localStorage.getItem("cart")&&localStorage.setItem("cart",JSON.stringify([o]));let l=JSON.parse(localStorage.getItem("cart"));l.push(o),localStorage.setItem("cart",JSON.stringify(l))}(t,o,n)},h.textContent="Ajouter au panier",p.appendChild(h)})).catch((function(){console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh");let e=document.createElement("div");e.className="alert alert-danger",e.role="alert",e.textContent="Oops, an error occurred. Please contact alexandre@nitatemic.ovh",document.getElementById("container").appendChild(e)}))}();