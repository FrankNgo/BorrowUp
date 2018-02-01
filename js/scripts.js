//Business Logic
function Item(item, price, description, image1){
  this.itemName = item;
  this.itemPrice = price;
  this.itemDescription = description;
  this.image = image1;
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
    var item = $("input#item").val();
    var price = $("input#price").val();
    var description = $("input#description").val();
    var newItem = new Item (item, price, description);
    $("#contacts").prepend("<b><span class='contact'><div class='well well-lg'>" + "<form id='form1' runat='server'><img id='blah' src='#' alt='your image' /></form>" + newItem.itemName + "<br>" + newItem.itemPrice + "<br>" + newItem.itemDescription + "</div></span></b>");
    $("#item-form").hide();
    $("#item-form2").show();
    $("#addItem1").hide();
    $("#addItem2").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
    $("#item-form").hide();
    document.getElementById("item-form").reset();
  });

  $("#addItem2").click(function(event){
    event.preventDefault();
    var item2 = $("input#item2").val();
    var price2 = $("input#price2").val();
    var description2 = $("input#description2").val();
    var newItem2 = new Item2(item2, price2, description2);
    $("#contacts2").prepend("<b><span class='contact'><div class='well well-lg'>" + "<form id='form2' runat='server'><img id='blah2' src='#' alt='your image' /></form>" + newItem2.itemName2 + "<br>" + newItem2.itemPrice2 + "<br>" + newItem2.itemDescription2 + "</div></span></b>");
    $("#item-form2").hide();
    $("#item-form3").show();
    $("#addItem2").hide();
    $("#addItem3").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
    document.getElementById("item-form2").reset();
  });
  $("#addItem3").click(function(event){
    event.preventDefault();
    var item3 = $("input#item3").val();
    var price3 = $("input#price3").val();
    var description3 = $("input#description3").val();
    var newItem3 = new Item3(item3, price3, description3);
    $("#contacts3").prepend("<b><span class='contact'><div class='well well-lg'>"+ "<form id='form3' runat='server'><img id='blah3' src='#' alt='your image' /></form>" + newItem3.itemName3 + "<br>" + newItem3.itemPrice3 + "<br>" + newItem3.itemDescription3 + "</div></span></b>");
    $("#item-form3").hide();
    $("#item-form").show();
    $("#addItem3").hide();
    $("#addItem1").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
    document.getElementById("item-form3").reset();

  });
  // function readURL(event){
  //        var getImagePath = URL.createObjectURL(event.target.files[0]);
  //        $('#clock').css('background-image', 'url(' + getImagePath + ')');
  //       }

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
});
