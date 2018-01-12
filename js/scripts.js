$(document).ready(function() {
  alert("Beginning");

  $("#submit").click(function(event) {
  var myName = $("input#name1").val();
  var myApp = $("#favoriteApp").val();
  var myCompany = $("input:radio[name=companySize]:checked").val();
  var myOperatingSystem = $("input:radio[name=operatingSystem]:checked").val();

  $(".name1").text(myName);
  $("#favoriteApp").text(myApp);
  $("input:radio[name=companySize]:checked").text(myCompany);
  $("input:radio[name=operatingSystem]:checked").text(myOperatingSystem);
  $("#suggestions").fadeIn();
  alert(myName);
  alert(myApp);
  alert(myCompany);
  alert(myOperatingSystem);
  event.preventDefault();
  alert("End");
  });


});
