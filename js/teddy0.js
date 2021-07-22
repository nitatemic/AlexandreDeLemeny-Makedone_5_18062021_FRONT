fetch ("http://localhost:3000/api/teddies/")
    .then(function(res){
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(teddys) {
        let i = 0;
        document.getElementById("teddy__" + i + "__name").innerText = teddys[i].name;
        let temp = teddys[i].price / 100;
        document.getElementById("teddy__" + i + "__price").innerText =  temp + " €";   //TODO : Need conversion
        document.getElementById("teddy__" + i +"__description").innerText = teddys[i].description;
        document.getElementById("teddy__" + i + "__img").innerHTML = "<img src='" + teddys[i].imageUrl + "' id =\"teddy__" + i + "__img\" class=\"img-fluid rounded\"  width=\"200\" height=\"250\" role=\"img\" aria-label=\"Ours en peluche fait main\" alt=\"Ours en peluche fait main\" >";
    })
    .catch(function() {
        console.error("Oops, an error occurred. Did you do \"Node server\"?");
    });