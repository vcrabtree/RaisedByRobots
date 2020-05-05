function changeImage(index) {
    return function() {
       let currentImage = 'images/scene_fourteen'+(index+1)+'.jpg';
       $('#scene_fourteen').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_fourteen").on("click", function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(changeImage(i), i * 1500);
        }
    });
});