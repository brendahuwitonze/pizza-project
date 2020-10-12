
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

// business logic
function texas(){
   var address=prompt("Enter you location") ;
if (address){
    alert("you order will be deliverd at " + address)
}
else{
    alert("enter your address")
}
}

function Pizza(crust, size, toppings = []) {
    this.crust = crust;
    this.size = size;
    this.toppings = toppings;
}
Pizza.prototype.myPizza = function () {
    var pricesize;
    var pricecrust
    if (this.size == "small") {
        pricesize = 500;
        debugger;
    }
    else if (this.size == "medium") {
        pricesize = 1000;
    }
    else {
        pricesize = 2000;
    }
    if (this.crust == "cripys") {
        pricecrust = 450;

    }
    if (this.crust == "glury") {
        pricecrust = 5000;
    }
    else {
        pricecrust = 200;
    }

    var priceToppings = [];
    var priceMashrooms = 290;
    var priceonions = 560;
    var priceolives = 430;
    var y;
    for (y = 0; y < this.toppings.length; y++) {
        if (this.toppings[y] == "onions") {
            priceToppings.push(priceonions);

        }

    }
    for (y = 0; y < this.toppings.length; y++) {
        if (this.toppings[y] == "mushrooms") {
            priceToppings.push(priceMashrooms);
        }
        console.log(priceMashrooms + " " + "helo");

    }
    for (y = 0; y < this.toppings.length; y++) {
        if (this.toppings[y] == "olives") {
            priceToppings.push(priceolives);
        }

    }
    var totalToppings = 0;
    var i = 0;
    while (i < priceToppings.length) {
        totalToppings += priceToppings[i];
        i++;
    }

    var priceTotal = pricesize + pricecrust + totalToppings;
    return priceTotal;
  
}
// user interface

$("form").submit(function (event) {
    event.preventDefault();
    var size = $("select#contr").val();
    var crust = $("select#sel").val();
    var tops = [];
    var number = $("input#num").val();
    tops = $("input:checkbox:checked").map(function () {
        return $(this).val();
    }).get();
    var newpiz = new Pizza(size, crust, tops);
    $("#total").text("This is the total amout that you have " + newpiz.myPizza());
    $("#display").text("Due to the number of pizza that you paid you will have to pay this amout "+ newpiz.myPizza() * number);
  
});




