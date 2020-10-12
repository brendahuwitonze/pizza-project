
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



function Pizza(crust,size,toppings=[]){
    this.crust=crust
    this.size=size
    this.toppings=toppings
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
    pricesize=2000;
}
if(crust=="cripys"){
    pricecrust=450;

}
if(crust=="glury"){
    pricecruster=5000
}
else{
    pricecruster=200
}

var priceToppings=[]
var priceMashrooms=290;
var priceonions=560;
var priceolives=430;
var y;
for(y=0;y<this.toppings.length;y++){
    if (this.toppings[y]=="onions"){
  priceToppings.push(priceonions)

    }

}
for (y=0;y<this.toppings.length;y++){
    if(this.toppings[y]=="mushrooms"){
        priceToppings.push(priceMashrooms)
    }
   
}
for(y=0;y<this.toppings.length;y++){
    if(this.toppings[y]=="olives"){
        priceToppings.push(priceolives);
    }
}
var totalToppings=0
var i=0
while(i<priceToppings.length){
    totalToppings+=priceToppings[i];
    i++;
}

var priceTotal=pricesize+pricecrust+totalToppings
return priceTotal

}



