
$(document).ready(function () {
    $('.dore').mouseover(function () {
         $('.epi').show();
         $('.lil').show();
    })

    $('.dore').mouseout(function () {
         $('.epi').hide();
         $('.lil').hide();
    })
});

$(document).ready(function () {
    $('.josh').mouseover(function () {
         $('.mug').show();
         $('.kim').show();
    })

    $('.josh').mouseout(function () {
         $('.mug').hide();
         $('.kim').hide();
    })
});

$(document).ready(function () {
    $('.sharo').mouseover(function () {
         $('.rec').show();
         $('.bord').show();
    })

    $('.sharo').mouseout(function () {
         $('.rec').hide();
         $('.bord').hide();
    })
});
$(document).ready(function () {
    $('.bra').mouseover(function () {
         $('.kayo').show();
         $('.border').show();
    })

    $('.bra').mouseout(function () {
         $('.kayo').hide();
         $('.border').hide();
    })
});



function Pizza(){
    this.cruster=cruster
    this.size=size
    this.toppings=[]
}
Pizza.prototype.myPizza=function(){
 var pricesize;
 var pricecruster
 if(this.size=="small"){
     pricesize=500;
 }
else if(this.size=="madium"){
    pricesize=1000;
}
else {
    pricesize=20000;
}
if(crusty=="cripys"){
    priceCruster=450;

}
if(crust=="glury"){
    pricecruster=5000
}
else{
    priceCruster=200
}

var priceToppings=[]
var priceMashrooms=290;
var priceonoins=560;
var priceslade=430;
var y;
for(y=0;y<this.toppings.length;y++){
    if (this.toppings[y]=="onions"){
  priceToppings.push(priceonoins)

    }

}
for (y=0;y<this.toppings.length;y++){
    if(this.toppings[y]=="mushrooms"){
        priceToppings.push(priceMashrooms)
    }
   
}
for(y=0;y<this.toppings.length;y++){
    if(this.toppings[y]=="slad"){
        priceToppings.push(priceslad);
    }
}
var totalToppings=0
var i=0
while(i<totalToppings.length){
    totalToppings+=totalToppings[i];
    i++;
}

varpriceTotal=pricesize+pricecrust+totalToppings
return priceTotal

}
