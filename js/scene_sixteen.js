function changeImage(index) {
    return function() {
       let currentImage = 'images/scene_sixteen'+(index+1)+'.jpg';
       $('#scene_sixteen').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_sixteen").on("click", function() {
        for (let i = 0; i < 4; i++) {
            setTimeout(changeImage(i), i * 1500);
        }
    });
});