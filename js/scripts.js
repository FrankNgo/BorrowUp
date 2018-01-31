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

function previewFile(){
 var preview = document.querySelector('img'); //selects the query named img
 var file = document.querySelector('input[type=file]').files[0]; //sames as here
 var reader  = new FileReader();
 reader.onloadend = function () {
     preview.src = reader.result;
 }
 if (file) {
     reader.readAsDataURL(file); //reads the data as a URL
 } else {
     preview.src = "";
 }
}


$(document).ready(function() {
  $("#addItem1").click(function(event){
    event.preventDefault();
    var item = $("input#item").val();
    var price = $("input#price").val();
    var description = $("input#description").val();
    var image1 = $(this).find('image').attr('src');
    console.log(image1);
    var newItem = new Item (item, price, description, image1);
    $("#contacts").prepend("<b><span class='contact'><div class='well well-lg'>" + newItem.itemName + "<br>" + newItem.itemPrice + "<br>" + newItem.itemDescription + "</div></span></b>");
    $("#item-form").hide();
    $("#item-form2").show();
    $("#addItem1").hide();
    $("#addItem2").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
  });

  $("#addItem2").click(function(event){
    event.preventDefault();
    var item2 = $("input#item2").val();
    var price2 = $("input#price2").val();
    var description2 = $("input#description2").val();
    var newItem2 = new Item2(item2, price2, description2);
    $("#contacts2").prepend("<b><span class='contact'><div class='well well-lg'>" + newItem2.itemName2 + "<br>" + newItem2.itemPrice2 + "<br>" + newItem2.itemDescription2 + "</div></span></b>");
    $("#item-form2").hide();
    $("#item-form3").show();
    $("#addItem2").hide();
    $("#addItem3").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();
  });
  $("#addItem3").click(function(event){
    event.preventDefault();
    var item3 = $("input#item3").val();
    var price3 = $("input#price3").val();
    var description3 = $("input#description3").val();
    var newItem3 = new Item3(item3, price3, description3);
    $("#contacts3").prepend("<b><span class='contact'><div class='well well-lg'>" + newItem3.itemName3 + "<br>" + newItem3.itemPrice3 + "<br>" + newItem3.itemDescription3 + "</div></span></b>");
    $("#item-form3").hide();
    $("#item-form").show();
    $("#addItem3").hide();
    $("#addItem1").show();
    $(".contactUs").hide();
    $(".aboutUs").hide();

  });
  function readURL(event){
         var getImagePath = URL.createObjectURL(event.target.files[0]);
         $('#clock').css('background-image', 'url(' + getImagePath + ')');
        }

  $(".aboutUsLink").click(function(event){
    event.preventDefault();
    $(".aboutUs").fadeIn();
    $(".contactUs").hide();
    $("#contacts").hide();
    $("#contacts2").hide();
    $("#contacts3").hide();

  });

  $(".contactUsLink").click(function(event){
    event.preventDefault();
    $(".aboutUs").hide();
    $(".contactUs").fadeIn();
    $("#contacts").hide();
    $("#contacts2").hide();
    $("#contacts3").hide();
  });

  $(".homeLink").click(function(event){
    event.preventDefault();
    $(".aboutUs").hide();
    $(".contactUs").hide();
    $("#contacts").fadeIn();
    $("#contacts2").fadeIn();
    $("#contacts3").fadeIn();
  });


});

// $(function() {
// $(".button").click(function() {
//     $("#myform #valueFromMyButton").text($(this).val().trim());
//     $("#myform input[type=text]").val('');
//     $("#myform").show(500);
// });
// $("#btnOK").click(function() {
//     $("#valueFromMyModal").val($("#myform input[type=text]").val().trim());
//     $("#myform").hide(400);
// });
// });
