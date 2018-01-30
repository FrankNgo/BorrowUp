//Business Logic
function Item(item, price, description){
  this.itemName = item;
  this.itemPrice = price;
  this.itemDescription = description;
}

function Item2(item2, price2, description2){
  this.itemName2 = item2;
  this.itemPrice2 = price2;
  this.itemDescription2 = description2;
}

function Item3(item3, price3, description3){
  this.itemName3 = item3;
  this.itemPrice3 = price3;
  this.itemDescription3 = description3;
}



$(document).ready(function() {
  $("#addItem1").click(function(event){
    event.preventDefault();
    var item = $("input#item").val();
    var price = $("input#price").val();
    var description = $("input#description").val();
    var newItem = new Item(item, price, description);
    $("#contacts").append("<b><span class='contact'><div class='well'>" + newItem.itemName + newItem.itemPrice + newItem.itemDescription + "</div></span></b>");
    $("#item-form").hide();
    $("#item-form2").show();
    $("#addItem1").hide();
    $("#addItem2").show();
  });

  $("#addItem2").click(function(event){
    event.preventDefault();
    var item2 = $("input#item2").val();
    var price2 = $("input#price2").val();
    var description2 = $("input#description2").val();
    var newItem2 = new Item2(item2, price2, description2);
    $("#contacts2").append("<b><span class='contact'><div class='well'>" + newItem2.itemName2+ newItem2.itemPrice2 + newItem2.itemDescription2 + "</div></span></b>");
    $("#item-form2").hide();
    $("#item-form3").show();
    $("#addItem2").hide();
    $("#addItem3").show();
  });
  $("#addItem3").click(function(event){
    event.preventDefault();
    var item3 = $("input#item3").val();
    var price3 = $("input#price3").val();
    var description3 = $("input#description3").val();
    var newItem3 = new Item3(item3, price3, description3);
    $("#contacts3").append("<b><span class='contact'><div class='well'>" + newItem3.itemName3+ newItem3.itemPrice3 + newItem3.itemDescription3 + "</div></span></b>");
    $("#item-form3").hide();
    $("#item-form").show();
    $("#addItem3").hide();
    $("#addItem1").show();

  });
});
