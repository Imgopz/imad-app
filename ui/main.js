//Counter Code
var button = document.getElementById('counter');

button.onclick = function() { 
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it into variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.readyState === 200) {
                var counter =  request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // not yet done
    };
    
    // Make the request
    request.open('GET', 'http://rrgkmech.imad.hasura-app.io/counter',true);
    request.send(null);
    
};