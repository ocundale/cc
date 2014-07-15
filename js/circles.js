// i : incrementing variable
// max : how many times to loop
// interval : timeout interval in ms
// func : function to execute each iteration ("i" is passed as the only argument)

var loopTimeout = function(i, max, interval, func) {
    if (i >= max) {
        return;
    }

    // Call the function
    func(i);

    i++;

    // "loop"
    setTimeout(function() {
        loopTimeout(i, max, interval, func);
    }, interval);
}

function create(diameter) {
    for(var count = 0; count < 10; count++){
       diameter = diameter + 10;
       var c = $('<div id="circle-' + count + '" class="circle"></div>').appendTo('body');
        c.css({"width":diameter+"px","height":diameter+"px"});
    };
}

loopTimeout(0, 100, 100, function(i){
    $('.circle').remove();
     if (i > 100) {
         $('#circle-' + count + '').remove();
         create(i);
     }
    create(i);
});

