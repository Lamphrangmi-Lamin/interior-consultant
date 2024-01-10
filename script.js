const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active');
})
