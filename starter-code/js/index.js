var $btn = document.createElement("button"); 
var script = document.querySelector("script");

document.body.appendChild($btn);
document.body.insertBefore($btn, script)
$btn.innerHTML = "Calculate Prices";
$btn.className = "btn-success";

var produits = [...document.querySelectorAll(".item")];

$btn.onclick = function (event) {
    var finalPrice = 0;
    
    for (let i = 0; i < produits.length; i++) {
        var unitPrice = Number(produits[i].querySelector(".unit-price").innerHTML);
        var qty = Number(produits[i].querySelector(".qty").value);
       
        produits[i].querySelector(".total-price").innerHTML = unitPrice*qty;
        finalPrice += unitPrice*qty;    
        // console.log("Unit price: " + unitPrice)
        // console.log("qty: " + qty)
    } 
    
    document.querySelector("#final-price").innerHTML = finalPrice;
}



// Tableau de nombres pour bubble
// var bubble = [];
// var bubbleHTML = document.querySelector("#bubble")
// var unitPrice = bubbleHTML.querySelector(".unit-price").innerHTML;
// var qty = bubbleHTML.querySelector("qty").value;

// bubble.push(unitPrice);
// bubble.push(qty);
// bubble.push(unitPrice*qty);


// $btn.onclick = function(event) {
//     var priceTotal = 0;
//     var unitPrice = document.getElementById("unit-price-bubble").innerHTML;
//     var qty = document.getElementById("qty-bubble").value;
//     document.getElementById("price-bubble").innerHTML = unitPrice*qty;
//     priceTotal += unitPrice*qty;

//     unitPrice = document.getElementById("unit-price-shirt").innerHTML;
//     qty = document.getElementById("qty-shirt").value;
//     document.getElementById("price-shirt").innerHTML = unitPrice*qty;
//     priceTotal += unitPrice*qty;

//     document.getElementById("price-total").innerHTML = priceTotal;
// }

//var $btn = document.createElement("button"); 
//var script = document.querySelector("script");
//document.body.appendChild($btn);
//document.body.insertBefore($btn, script)
//$btn.innerHTML = "Calculate Prices";
//$btn.className = "btn-success";
//
//
//$btn.onclick = function(event) {
//    var priceTotal = 0;
//    var unitPrice = document.getElementById("unit-price-bubble").innerHTML;
//    var qty = document.getElementById("qty-bubble").value;
//    document.getElementById("price-bubble").innerHTML = unitPrice*qty;
//    priceTotal += unitPrice*qty;
//
//    unitPrice = document.getElementById("unit-price-shirt").innerHTML;
//    qty = document.getElementById("qty-shirt").value;
//    document.getElementById("price-shirt").innerHTML = unitPrice*qty;
//    priceTotal += unitPrice*qty;
//
//    document.getElementById("price-total").innerHTML = priceTotal;
//}
