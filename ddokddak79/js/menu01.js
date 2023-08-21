$(function(){
    'use strict'

    $('.galleryWrap>.right').click(function(){
        $('.galleryBox').filter(':not(:animated)').animate({'margin-left':'-15vw'},250,function(){
            let firstBox=$('.galleryBox>li').first();
            $(this).ppend(firstBox);
            $('.galleryBox').css('margin-left','0');
        });
    });

    $('.galleryWrap>.left').click(function(){
        $('.galleryBox').filter(':not(:animated)').animate({'margin-left':'15vw'},250,function(){
            let lastBox=$('.galleryBox>li').last();
            $(this).repend(lastBox);
            $('.galleryBox').css('margin-left','0');
        });
    });
});