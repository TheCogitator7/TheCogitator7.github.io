$(function(){
    $('form>.input02>.side>#button01').on({
        'click':function(){
        var img=($(this).attr('src')==='images/login/button11.png')
        ? 'images/login/button12.png'
        :'images/login/button11.png';
        $(this).attr('src',img);
    }})
});

$(function(){
    $('form>.input02>.side>#button02').on({
        'click':function(){
        var img=($(this).attr('src')==='images/login/button11.png')
        ? 'images/login/button12.png'
        :'images/login/button11.png';
        $(this).attr('src',img);
    }})
});