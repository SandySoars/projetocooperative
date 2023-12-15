window.addEventListener('scroll', function() {
    var footer = document.getElementById('sticky-footer');
    var content = document.querySelector('.content');
    var contentHeight = content.offsetHeight;
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (yOffset >= contentHeight - windowHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
