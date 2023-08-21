$(function(){
    'use strict'

    $('.galleryWrap>.rightBtn').click(function(){
        $('.galleryBox').filter(':not(:animated)').animate({'margin-left':'-15vw'},250,function(){
            let firstBox=$('.galleryBox>li').first();
            $(this).append(firstBox);
            $('.galleryBox').css('margin-left','0');
        });
    });

    $('.galleryWrap>.leftBtn').click(function(){
        $('.galleryBox').filter(':not(:animated)').animate({'margin-left':'15vw'},250,function(){
            let lastBox=$('.galleryBox>li').last();
            $(this).prepend(lastBox);
            $('.galleryBox').css('margin-left','0');
        });
    });
});