!function(){"use strict";const e="https://backorinoco.nitatemic.ovh/api/teddies";function t(e,t,a,o){n(e+"Li"+o,"list-group-item d-flex justify-content-between lh-sm","cartListUl"),function(e,t,n,a){let o=document.createElement("div");document.getElementById(e+"Li"+a).appendChild(o);let l=document.createElement("h6");l.innerHTML=e,l.className="my-0",o.appendChild(l);let i=document.createElement("span");i.innerHTML=t,i.className="text-muted",o.appendChild(i);let c=document.createElement("span");c.className="text-muted",c.innerHTML=n,document.getElementById(e+"Li"+a).appendChild(c)}(e,t,a,o)}function n(e,t,n){let a=document.createElement("li");a.id=e,a.className=t,document.getElementById(n).appendChild(a)}function a(e){return/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u.test(e)}let o=JSON.parse(localStorage.getItem("cart"));!function(e,t){document.getElementById("numberOfItems").innerHTML=function(e){return null===e?0:e.length}(e)}(o),function(e,t,n){let a=document.createElement("ul");a.id="cartListUl",a.className="list-group mb-3",document.getElementById("cartList").appendChild(a)}(),async function(){let n=0;for(let a=0;a<o.length;a++){let l=o[a].id;try{let i=await fetch(e+"/"+l);if(!i.ok)throw Error("Problème de connexion api");let c=await i.json();n+=c.price,t(c.name,o[a].color,c.price/100+"€",o.indexOf(o[a]))}catch(e){console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh")}}return n}().then((e=>{n("totalLi","list-group-item d-flex justify-content-between","cartListUl");let t=document.createElement("span");t.innerHTML="Total (EUR)",document.getElementById("totalLi").appendChild(t);let a=document.createElement("strong");a.innerHTML=e/100+"€",document.getElementById("totalLi").appendChild(a)})),document.getElementById("btnCommander").onclick=function(t){t.preventDefault();let n=new FormData(document.querySelector("form"));if(!0===(l=n.get("email"),/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i.test(l))&&!0===a(n.get("lastName"))&&!0===a(n.get("FirstName"))){let t=Object.create({});t.lastName=n.get("lastName"),t.firstName=n.get("firstName"),t.email=n.get("email"),t.address=n.get("address"),t.city=n.get("city");let a={contact:t,products:o.map((e=>e.id))};console.log(a),fetch(e+"/order",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log("order",e),localStorage.removeItem("cart"),sessionStorage.setItem("order",JSON.stringify(e)),window.location.href="thankyou.html"}))}else alert("Merci de vérifier les données saisies");var l}}();