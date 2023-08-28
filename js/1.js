document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var name = document.getElementById("name").value;
        var designation = document.getElementById("designation").value;
        var email = document.getElementById("email").value;
        
    
        var thankYouMessage = "Thanks for connecting with us, " + name + "!";
        alert(thankYouMessage);
        
       
        document.getElementById("contactForm").reset();
    });
});