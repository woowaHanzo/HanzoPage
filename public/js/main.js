

$(document).ready(function() {
  console.log("Document Ready!!");

  $("#jae").on('mouseover', function() {
    console.log("Over Jae!!");
    $("#jae_banner").stop();
    //$(".banner_right").css("display", "none");
    $(".banner_right").css("z-index", '-1');
    $("#jae_banner").css("z-index", '10');
    $("#jae_banner").css("display", "block");
    $("#jae_banner").animate({
      right: "0px"
    }, 500, function() {

    });

  });

  $("#jae").on('mouseout', function() {
    console.log("Mouse out!");
    $("#jae_banner").stop();
    $("#jae_banner").animate({
      right: "-350px"
    }, 500, function() {

    });

  });

  $("#songi").on('mouseover', function() {
    console.log("Over Songi!!");
    $("#songi_banner").stop();
    //$(".banner_right").css("display", "none");
    $(".banner_right").css("z-index", '-1');
    $("#songi_banner").css("z-index", '10');
    $("#songi_banner").css("display", "block");
    $("#songi_banner").animate({
      right: "0px"
    }, 500, function() {

    });

  });

  $("#songi").on("mouseout", function() {
    $("#songi_banner").stop();
    $("#songi_banner").animate({
      right: "-350px"
    }, 500, function() {

    });

  });

  $("#choi").on('mouseover', function() {
    console.log("Over Hyeseon!!");
    $("#choi_banner").stop();
    //$(".banner_right").css("display", "none");
    $(".banner_right").css("z-index", '-1');
    $("#choi_banner").css("z-index", '10');
    $("#choi_banner").css("display", "block");
    $("#choi_banner").animate({
      right: "0px"
    }, 500, function() {

    });
  });

  $("#choi").on("mouseout", function() {
    $("#choi_banner").stop();
    $("#choi_banner").animate({
      right: "-350px"
    }, 500, function() {

    });
  });

  $("#dain").on("mouseover", function() {
    console.log("Over Dain!!");
    $("#dain_banner").stop();
    //$(".banner_right").css("display", "none");
    $(".banner_right").css("z-index", '-1');
    $("#dain_banner").css("z-index", '10');
    $("#dain_banner").css("display", "block");
    $("#dain_banner").animate({
      right: "0px"
    }, 500, function() {

    });
  });

  $("#dain").on("mouseout", function() {
    $("#dain_banner").stop();
    $("#dain_banner").animate({
      right: "-350px"
    }, 500, function() {

    });
  });

});
