function changeImage(index) {
    return function() {
       let currentImage = 'scene_fifteen'+(index+1)+'.jpg';
       $('#scene_fifteen').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_fifteen").on("click", function() {
        for (let i = 0; i < 2; i++) {
            setTimeout(changeImage(i), i * 1500);
        }
    });
});