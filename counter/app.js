let counter = 0;
const value  = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')) {
            counter++;
        } else if (styles.contains('decrease')) {
            counter--;
        } else {
            counter = 0;
        }
        value.textContent = counter;
        if (counter > 0) {
            value.style.color = 'green';
        } else if (counter < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#222';
        }
    });
});
