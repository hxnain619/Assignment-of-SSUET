
var profession = document.querySelector('#profession');
var section = document.querySelector('#section');
var contact = document.querySelector('#contact');

function toChangePath() {
    if (profession) {
        history.pushState("", "Role Page", "rolePage.html");

    }
    else if (section) {

        history.pushState("", "Contact Page", "contactPage.html");

    } else if (section) {
        history.pushState("", "HomePage", "index.html");

    }
}
