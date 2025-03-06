document.addEventListener("DOMContentLoaded", function() {
    let matthew = document.getElementById("matthew");
    let mark = document.getElementById("mark");
    let luke = document.getElementById("luke");

    function syncScroll(source, target1, target2) {
        target1.scrollTop = source.scrollTop;
        target2.scrollTop = source.scrollTop;
    }

    matthew.addEventListener("scroll", function() {
        syncScroll(matthew, mark, luke);
    });

    mark.addEventListener("scroll", function() {
        syncScroll(mark, matthew, luke);
    });

    luke.addEventListener("scroll", function() {
        syncScroll(luke, matthew, mark);
    });
});