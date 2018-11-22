window.onload=() => {
    history.pushState(null,null,'index.html');

}
function toChangePath(e) {
    var profession = document.getElementById('profession');
    var section = document.getElementById('section');
    var contact = document.getElementById('contact');
        
    if (e.target.getAttribute('class') === "role1") {
        profession.style.display = 'block';
        section.style.display =  contact.style.display = 'none';
        history.pushState(null,null,"#/Profession");

    } else if (e.target.getAttribute('class') === "contact") {
        profession.style.display = section.style.display = 'none';
        contact.style.display = 'block';
        history.pushState(null,null,"#/Contact");
    } else if (e.target.getAttribute('class') === "section") {
        profession.style.display =  contact.style.display = 'none';
        section.style.display = 'block';     
        history.pushState(null,null,"index.html")
    }

}

