document.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.body.classList.add('at-bottom');
    } else {
        document.body.classList.remove('at-bottom');
    }
});
