
var profession = document.querySelector('#profession');
var section = document.querySelector('#section');
var contact = document.querySelector('#contact');

function toChangePath(e) {
    e.preventDefault();
    if (profession) {
        [section,contact].style.display='none';
        history.pushState(null,null, "rolePage.html");

    }
    else if (contact) {
        [profession,section].style.display='none';
        history.pushState(null, null, "contactPage.html");

    } else if (section) {
        [profession,contact].style.display='none';
        history.pushState(null,null, "index.html");

    }
}
