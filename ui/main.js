
// Submit username & Password to login 
var submit = document.getElementById('submit_btn');
submit.onclick = function() { 
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it into variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                alert('logged in successfully');
            } else if (request.status === 403) {
                alert('Username/Password is incorrect');
            } else if (request.status === 500) {
                alert("Something went wrong on the server");
            }
        }   
        // not yet done
    };

    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://rrgkmech.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
};





