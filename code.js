let slider = $(".slider");
let sliderItems = slider.find(".slider-item");

// MVC
//Model
let showIndex = 0;



slider.find('.slider-arrow-left').click(function(){

    if( showIndex <= 0){
        sliderItems.eq(showIndex).fadeOut();
        sliderItems[showIndex]
        showIndex = sliderItems.length - 1;
        sliderItems.eq(showIndex).css('display', 'flex');
    } else{
        sliderItems.eq(showIndex).fadeOut();
        sliderItems.eq(showIndex-1).css('display', 'flex');
        showIndex--;
    }
})

slider.find('.slider-arrow-right').click(function(){

    if( showIndex >= sliderItems.length){
        sliderItems.eq(showIndex).fadeOut();
        sliderItems[showIndex]
        showIndex = sliderItems.length + 1;
        sliderItems.eq(showIndex).css('display', 'flex');
    } else{
        sliderItems.eq(showIndex).fadeOut();
        sliderItems.eq(showIndex+1).css('display', 'flex');
        showIndex++;
    }
})