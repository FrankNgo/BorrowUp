//Business Logic
function Item(item, price, description, phoneNumber){
  this.itemName = item;
  this.itemPrice = price;
  this.itemDescription = description;
  this.phoneNumber = phoneNumber;
}

function Item2(item2, price2, description2, phoneNumber2){
  this.itemName2 = item2;
  this.itemPrice2 = price2;
  this.itemDescription2 = description2;
  this.phoneNumber2 = phoneNumber2;
}

function Item3(item3, price3, description3, phoneNumber3){
  this.itemName3 = item3;
  this.itemPrice3 = price3;
  this.itemDescription3 = description3;
  this.phoneNumber3 = phoneNumber3;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah2').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah3').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}



$(document).ready(function() {
  $("#imgInp1").change(function(){
      readURL(this);
  });


  $("#imgInp2").change(function(){
      readURL2(this);
  });

  $("#imgInp3").change(function(){
      readURL3(this);
  });


  $("#addItem1").click(function(event){
    event.preventDefault();
    var item = "Item: " + $("input#item").val();
    var price = "Price: $" + $("input#price").val();
    var description = $("input#description").val();
    var phoneNumber = "Phone Number: " + $("input#phoneNumber").val();
    var newItem = new Item (item, price, description, phoneNumber);
    $("#contacts").prepend("<span class='contact'><div class='well well-lg'>" + "<form id='form1' runat='server'><img id='blah' src='#' alt='your image' /></form>" + "<br>" +  newItem.itemName + "<br>" + newItem.itemPrice + "<br>" + newItem.phoneNumber + "<br>" + newItem.itemDescription + "</div></span>");
    $("#item-form").hide();
    $("#item-form2").show();
    $("#addItem1").hide();
    $("#addItem2").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
    $("#item-form").hide();
    $("#imgInp1").show();
    $("#imgInp3").hide();
    document.getElementById("item-form").reset();
  });

  $("#addItem2").click(function(event){
    event.preventDefault();
    var item2 = "Item: " + $("input#item2").val();
    var price2 = "Price: $" + $("input#price2").val();
    var description2 = $("input#description2").val();
    var phoneNumber2 = "Phone Number: " + $("input#phoneNumber2").val();
    var newItem2 = new Item2(item2, price2, description2, phoneNumber2);
    $("#contacts2").prepend("<span class='contact'><div class='well well-lg'>" + "<form id='form2' runat='server'><img id='blah2' src='#' alt='your image' /></form>" + "<br>"  + newItem2.itemName2 + "<br>" + newItem2.itemPrice2 + "<br>" + newItem2.phoneNumber2 + "<br>"+ newItem2.itemDescription2 + "</div></span>");
    $("#item-form2").hide();
    $("#item-form3").show();
    $("#addItem2").hide();
    $("#addItem3").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
    $("#imgInp1").hide();
    $("#imgInp2").show();
    document.getElementById("item-form2").reset();
  });
  $("#addItem3").click(function(event){
    event.preventDefault();
    var item3 = "Item: " + $("input#item3").val();
    var price3 = "Price: $" + $("input#price3").val();
    var description3 = $("input#description3").val();
    var phoneNumber3 = "Phone Number: " + $("input#phoneNumber3").val();
    var newItem3 = new Item3(item3, price3, description3, phoneNumber3);
    $("#contacts3").prepend("<span class='contact'><div class='well well-lg'>"+ "<form id='form3' runat='server'><img id='blah3' src='#' alt='your image' /></form>"+ "<br>" + newItem3.itemName3 + "<br>" + newItem3.itemPrice3 + "<br>" + newItem3.phoneNumber3 + "<br>" + newItem3.itemDescription3 + "</div></span>");
    $("#item-form3").hide();
    $("#item-form").show();
    $("#addItem3").hide();
    $("#addItem1").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
    $("#imgInp2").hide();
    $("#imgInp3").show();
    document.getElementById("item-form3").reset();

  });

  $(".aboutUsLink").click(function(event){
    event.preventDefault();
    $(".aboutUs").fadeIn();
    $(".contactUs").hide();
    $("#contacts").hide();
    $("#contacts2").hide();
    $("#contacts3").hide();
    $("#createAccount").hide();

  });

  $(".contactUsLink").click(function(event){
    event.preventDefault();
    $(".aboutUs").hide();
    $(".contactUs").fadeIn();
    $("#contacts").hide();
    $("#contacts2").hide();
    $("#contacts3").hide();
    $("#createAccount").hide();
  });

  $(".homeLink").click(function(event){
    event.preventDefault();
    $(".aboutUs").hide();
    $(".contactUs").hide();
    $("#createAccount").hide();
    $("#contacts").fadeIn();
    $("#contacts2").fadeIn();
    $("#contacts3").fadeIn();
    $("#createAccount").hide();
    $("#createAccount").hide();
    $("#confirmEmail").hide();
  });

  $("#create").click(function(event){
    event.preventDefault();
    $("#createAccount").fadeIn();
    $("#contacts").hide();
    $("#contacts2").hide();
    $("#contacts3").hide();
    $(".aboutUs").hide();
    $(".contactUs").hide();
  });
  $("#confirmAccount").click(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    $(".name").text(name);
    $(".email").text(email);
    $("#createAccount").hide();
    $("#confirmEmail").fadeIn();
    $("#contacts").hide();
    $("#contacts2").hide();
    $("#contacts3").hide();
    $(".aboutUs").hide();
    $(".contactUs").hide();
  });
  $("#login").click(function(event){
    event.preventDefault();
    $("#loginInfo").fadeIn();
    $("#additembutton").fadeIn();
    $("#logout").show();
    $("#login").hide();
    $("#logoutInfo").hide();
    var userLogin = $("input#userLogin").val();
    $(".userLogin").text(userLogin);

  });
  $("#goBack").click(function(event){
    event.preventDefault();
    $(".aboutUs").hide();
    $(".contactUs").hide();
    $("#createAccount").hide();
    $("#contacts").fadeIn();
    $("#contacts2").fadeIn();
    $("#contacts3").fadeIn();
    $("#createAccount").hide();
    $("#createAccount").hide();
    $("#confirmEmail").hide();
  });
  $("#logout").click(function(event){
    event.preventDefault();
    $("#loginInfo").hide();
    $("#additembutton").hide();
    $("#logoutInfo").fadeIn("slow").delay(800).fadeOut("fast");
    $("#login").show();
    $("#logout").hide();
    $("#imgInp1").hide();
    $("#imgInp2").hide();
    $("#imgInp3").hide();
  });
});
