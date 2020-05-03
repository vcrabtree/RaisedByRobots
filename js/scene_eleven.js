function changeImage(index) {
    return function() {
       let currentImage = 'scene_eleven'+(index+1)+'.jpg';
       $('#scene_eleven').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_eleven").on("click", function() {
        for (let i = 0; i < 4; i++) {
            setTimeout(changeImage(i), i * 3500);
        }
    });
});