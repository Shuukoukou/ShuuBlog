
// TOP MENU CLICK EVENT
$("#top-menu-mobi-button").click(function(){
    if( $("#top-menu-list-mobi").is(".hide") ){
      $("#top-menu-list-mobi").show().delay(20).queue(function(){
        $(this).removeClass().dequeue()
      })
      $("#top-menu-mobi-button").addClass("close")
    } else {
      $("#top-menu-list-mobi").addClass("hide").delay(800).queue(function(){
        $(this).hide().dequeue()
      })
      $("#top-menu-mobi-button").removeClass()
    }
  })