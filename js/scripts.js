$(document).ready(function() {

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

  if (rubyTrack(myApp, myCompany, myOperatingSystem)) {
    $(".result1").text("Ruby/Rails track!");
  }
  else if (javaTrack(myApp, myCompany, myOperatingSystem)) {
    $(".result1").text("Java/Android track!");
  }
  else if (cTrack(myApp, myCompany, myOperatingSystem)) {
    $(".result1").text("C#/.NET track!");
  }
  else  {
    $(".result1").text("No track!");
  }
  event.preventDefault();

  });

  function rubyTrack (app, company, oSystem) {
    if (company === "smallCompany") {
      return true;
    } else {
      return false;
    }
  };

  function javaTrack (app, company, oSystem) {
    if ((oSystem === "android" && company === "mediumCompany") || (oSystem === "android" && company === "largeCompany")) {
      return true;
    } else {
      return false;
    }
  };

  function cTrack (app, company, oSystem) {
    if ((oSystem === "windows" && company === "largeCompany" || "mediumCompany") || (app === "businessApps" || "webApps")) {
      return true;
    } else {
      return false;
    }
  };

});
