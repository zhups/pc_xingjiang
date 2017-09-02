
function tianj(){
    var li = $(".slider_list li")
    var picLen = li.length;
    sliderNav(picLen);
}
tianj()
function sliderNav(num){
    var i;
    var lis="";
    var li="<li></li>";
    for(i = 0; i < num;i++){
        lis +=li
    }
    $(".slider_nav ul").append(lis);
}
function t(){
    var firstli=$("#slider_list li:first")
    var lifist=firstli.html()
    $(".slider_nav li:first").addClass('on')
    $("#slider_list").append("<li>"+lifist+"</li>");

}
t();
$(".likes img").click(function(event) {
  var like=$(this).attr("data-like")
  $(this).attr("src",like)
});
$(function(){
function lunbo(slide){
    var listLi=slide.find('.slider_list li');
    var list=slide.find('.slider_list');
    var picLen = listLi.length;
    var picLiW = listLi.outerWidth(true);
    var picNum = 0;
    list.css("width",picLen*picLiW);
    function move(){
        list.stop().animate({'marginLeft':-picNum*picLiW},1000);
        navli();
    }
    function moveRe(){
        list.animate({'marginLeft':-picNum*picLiW},0);
    }
    slide.find('.next').click(function(){
        if ( picNum == picLen-1 ) {
          picNum = 0;
          moveRe()
        }
        picNum ++;
        move()
      });
     slide.find('.prev').click(function(){
      if ( picNum == 0 ) {
         picNum = picLen-1;
         moveRe()
      }
      picNum --;
       move()
    });
     function navli(){
        slide.find('.slider_nav ul li').each(function(index, el) {
            var ind=$(this).index();
            var num = picNum;
            if(num == 6){
              num=0
            }
            if(ind === num){
                $(this).addClass('on').siblings('li').removeClass('on')
            }
        });
     }
    var t=setInterval(function(){
        slide.find('.next').trigger('click')
      },3000);
    $("#slider").hover(function() {
      clearInterval(t)
    }, function() {
     t=setInterval(function(){
        slide.find('.next').trigger('click')
      },3000);
    });
    slide.find('.slider_nav ul li').click(function(event) {
        var ind=$(this).index();
        picNum = ind;
        move()
    });
  }
  lunbo($("#slider"))
})
