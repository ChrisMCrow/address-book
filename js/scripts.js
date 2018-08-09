//back-end




//front-end
$(document).ready(function() {
  $("#newcontact").submit(function(event) {
    event.preventDefault();
    var contactName = $("input#lastname").val() + ", " + $("input#firstname").val();
    var contactPage =
      "Name: " + $("input#firstname").val() + " " + $("input#lastname").val() + "<br>" +
      "Phone Number: " + $("input#phone").val() + "<br>" +
      "Email: " + $("input#email").val() + "<br>" +
      "Adress: " + $("input#adress1").val() + "<br>" +
      "City/State/Zip: " + $("input#address2").val();

    $(".addressbook").append("<div class='clickable'>" + "</div>");
    $(".clickable:last-child").append("<p>" + contactName + "</p>");
    $(".clickable p:first-child").addClass("front");
    $(".clickable:last-child").append("<p>" + contactPage + "</p>");
    $(".clickable p:last-child").addClass("back");
  });

  $('body').on('click', '.clickable', function () {
  //$(".clickable").click(function() {
    $(".front", this).toggle();
    $(".back", this).toggle();
  });
});
