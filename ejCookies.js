document.getElementById("cookieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var language = formData.get("language");
    var theme = formData.get("theme");
    var username = formData.get("username");
    var preference = formData.get("preference");

    document.cookie = "language = " + language + "; expires = " + new Date(Date.now() + 10000).toUTCString();
    document.cookie = "theme = " + theme + "; expires = " + new Date(Date.now() + 15000).toUTCString();
    document.cookie = "username = " + username + "; expires = " + new Date(Date.now() + 20000).toUTCString();
    document.cookie = "preference = " + preference;
    document.cookie = "lastVisit = " + new Date().toUTCString();

    alert("Información guardada en cookies.");
});

setInterval(function() {

    var cookies = document.cookie.split(";").map(function(cookie) {
        return cookie.trim();
    });

    console.log("Cookies vigentes: ");

    cookies.forEach(function(cookie) {
        console.log(cookie);
    });
}, 2000);
