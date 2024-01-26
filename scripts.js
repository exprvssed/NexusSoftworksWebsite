document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.getElementById('about-link');
    const aboutContent = document.getElementById('about-content');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
            aboutContent.style.display = 'block';
        } else {
            aboutContent.style.display = 'none';
        }
    });
});
