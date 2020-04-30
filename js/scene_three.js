function changeImage(index) {
    return function() {
       let currentImage = 'parents'+(index+1)+'.jpg';
       $('#scene_three').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_three").on("click", function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(changeImage(i), i * 4000);
        }
    });
});
