import {totalOrder} from "./functions.js";

const orderDetail = JSON.parse(sessionStorage.getItem("order"));

//Modifier le h1 de la page de remerciment
document.querySelector("h1").innerHTML = "Merci pour votre commande " + orderDetail.contact.firstName + " !";


//Modifier le p de la page de remerciment
const orderNumber = document.getElementById("orderNumber");
orderNumber.innerHTML = "Vous avez la commande n° " + "<strong>" + orderDetail.orderId + "</strong> !";

//Creer un p dans yourOrder
const orderTotal = document.createElement("p");
orderTotal.innerHTML = "Pour rappel votre commande a un montant total de " + "<strong>" + totalOrder(orderDetail.products) + "</strong>.";
 document.getElementById("yourOrder").appendChild(orderTotal);