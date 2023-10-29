
document.addEventListener("DOMContentLoaded", function () {
    var langButton = document.getElementById("lang");
    var dropdownContent = document.querySelector(".dropdown-content");

    langButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    document.addEventListener("click", function (e) {
        if (e.target !== langButton) {
            dropdownContent.style.display = "none";
        }
    });
    document.getElementById("emailInput").onclick = function () {
        var email = document.getElementById("emailInput").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(emailPattern)) {
            document.getElementById("emailInput").classList.add("valid-email");
        }
        else {  
            document.getElementById("emailInput").classList.remove("valid-email");

        }
    }



    document.getElementById("getStarted").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        var email = document.getElementById("emailInput").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(emailPattern)) {
            window.location.href = "newpage.html"; 
        } else {
            document.getElementById("errorContainer").textContent = "Please enter a valid email address.";

        }

        const nav = document.getElementsByClassName('showcase-top')
        window.addEventListener('scroll', () => {
            if(window.scrollY >=100) {
                showcase-top.classList.add('black')
            }
            else {
                showcase-top.classList.remove('black')
                
            }
        })

    });
});