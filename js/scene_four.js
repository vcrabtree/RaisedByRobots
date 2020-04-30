function changeImage(index) {
    return function() {
       let currentImage = 'second_parents'+(index+1)+'.jpg';
       $('#scene_four').css({
           'background-image':'url('+currentImage+')'
       });
    }
 }

$(document).ready(function() {
    $("#scene_four").on("click", function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(changeImage(i), i * 1500);
        }
    });
});
