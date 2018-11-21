
function toChangePath(e) {

    var profession = document.getElementById('profession');
    var section = document.getElementById('section');
    var contact = document.getElementById('contact');
    
if(e.target.getAttribute('class') === "role1"){
    profession.style.display='block';
    section.style.display='none';
    contact.style.display='none';
}else if(e.target.getAttribute('class') === "contact"){
    profession.style.display='none';
    section.style.display='none';
    contact.style.display='block';
}else if(e.target.getAttribute('class') === "section"){
    profession.style.display='none';
    section.style.display='block';
    contact.style.display='none';
}
 
}
