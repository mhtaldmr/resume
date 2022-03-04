
//skill bar animationss
$(".languages").waypoint(function(direction) {
        $(".progress-bar").each(function() {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
},{offset:"60%"});


