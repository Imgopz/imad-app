//Counter Code
var button = document.getElementById('counter');
var counter = 0;
botton.onclick = function() { 
    // Make a req to the counter endpoint
    
    
    // Capture the response and store it into variable
    
    // Rendring the variable in the correct span
    counter = counter + 1;
    var span = doucumnet.getElementById('count');
    span.innerHTML = counter.toString();
    
    
};