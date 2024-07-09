const mySwitch = document.getElementById('mySwitch');
const slider = document.querySelector('.slider');
/*const switch = document.getElementsByClassName('.switch');*/
slider.addEventListener('change', () => {
    slider.classList.toggle('on', mySwitch.checked);
    /*switch.style.backgroundColor = '#accbee'*/
    slider.style.backgroundColor = '#fff'
});