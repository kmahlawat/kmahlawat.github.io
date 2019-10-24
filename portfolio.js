var text = ["Komal Mahlawat", "A Software Engineer"];
var counter = 0;
var elem = $("#titleHeading");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}