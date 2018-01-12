$(document).ready(function() {
  var myName = $("#name1").val();
  var myApplication = $("#favoriteApp").val();
  var myCompany = $("input:radio[name=companySize]:checked").val();
  var myOperatingSystem = $("input:radio[name=operatingSystem]:checked").val();

  $("#submit").click(function() {
  $("#suggestions").fadeIn();
  });

});
