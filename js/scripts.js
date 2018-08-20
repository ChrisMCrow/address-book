//back-end
function Contact(first, last, phone, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
}



//front-end
$(document).ready(function() {
  $("form#newcontact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#firstname").val();
    var inputtedLastName = $("#lastname").val();
    var inputtedPhoneNumber = $("#phone").val();
    var inputtedEmail = $("#email").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail);

    $("ul#contacts").append("<li><span class='contact clickable'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone-number").text(newContact.phoneNumber);
      $(".email-address").text(newContact.email);
    })

    $("input#firstname").val("")
    $("#lastname").val("");
    $("#phone").val("");
    $("#email").val("");
  });
});
