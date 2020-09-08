const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomIndex = getRandomNumber();
    document.body.style.backgroundColor = colors[randomIndex];
    color.textContent = colors[randomIndex];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}