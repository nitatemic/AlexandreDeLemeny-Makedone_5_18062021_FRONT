!function(){"use strict";fetch("https://backorinoco.nitatemic.ovh/api/teddies").then((function(e){if(e.ok)return e.json()})).then((function(e){!function(e){let t=-2;for(let n=0;n<e.length;n++){let i=e[n];if(i.price=i.price/100,n%2==0){let e=document.createElement("div");e.className="row mb-2",e.id="containerFor2"+n,document.getElementById("listOfTeddies").appendChild(e),t+=2}let d=document.createElement("div");d.className="col-md-6";let c=i.imageUrl;c=c.replace(/^http:\/\//i,"https://"),d.innerHTML+=`\n            <a class="teddylink" href="./product.html?id=${i._id}" >\n                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 cursor-pointer">\n                    <div class="col p-4 d-flex flex-column position-static">\n                        <h3 class="mb-0" >${i.name}</h3>\n                        <div class="mb-1 text-muted">${i.price} €\n                        </div>\n                        <p class="card-text mb-auto">${i.description}</p>\n                        <div class ="col-auto d-none d-lg-block" id="teddy__0__img">\n                            <img src="${c}" alt="${i.name}" class="img-fluid rounded"  width="200" height="250" role="img" aria-label="Ours en peluche fait main">\n                        </div>\n                    </div>\n                </div>\n            </a>\n        `,document.getElementById("containerFor2"+t).appendChild(d)}}(e)})).catch((function(){console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh")}))}();