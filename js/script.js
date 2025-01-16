let icon = document.getElementById('nav-tog');
let nav = document.getElementById('nav-ul');

icon.onclick = function(event) {
    nav.classList.toggle('show');
    event.stopPropagation(); 
}

document.onclick = function() {
    nav.classList.remove('show');
}

let links = document.querySelectorAll('header .container nav ul li a');

links.forEach(function(link) {
    link.onclick = function() {
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }
});
