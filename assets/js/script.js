$('a').on('click', function(){
    var target = $(this).attr('rel');
    $("#"+target).show().siblings("article").hide();
});