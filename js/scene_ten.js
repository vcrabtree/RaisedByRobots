function changeImage(index) {
    return function() {
       let currentImage = 'scene_ten'+(index+1)+'.jpg';
       $('#scene_ten').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_ten").on("click", function() {
        for (let i = 0; i < 4; i++) {
            setTimeout(changeImage(i), i * 1500);
        }
    });
});