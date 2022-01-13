const hour = document.querySelector('.container span');

let hr = 0;
let min = 0;
let seg = 0;
let interval;

const zero = (digit) => (digit < 10) ? ('0'+digit) : (digit);

function iniciar() {
    timer();
    interval = setInterval(timer, 1000);

}

function pausar() {
    clearInterval(interval);
}

function zerar() {
    hr = 0;
    min = 0;
    seg = 0;

    clearInterval(interval);
    hour.innerHTML = '00:00:00';
}

function timer() {
    seg++;
    if(seg === 60) {
        min ++;
        seg = 0;
    }

    if(min === 60) {
        hr++;
        seg = 0;
    }

    hour.innerHTML = (zero(hr)+':'+zero(min)+':'+zero(seg));
}