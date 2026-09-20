const allLights = document.getElementById('lights');
const lights = document.querySelectorAll('#lights li');
const speedValue = document.getElementById('speed-value');
const toggleBtn = document.getElementById('toggle');

let state = 'on';
let animationDuration = 1;

window.addEventListener('load', e => {
    let i = 1;
    lights.forEach(light => {
        const color = Math.floor(Math.random() * 360);
        light.setAttribute('data-color', color);
        light.classList.add(i++ % 2 == 0 ? 'fase1' : 'fase2');
        play();
    });
});

toggleBtn.addEventListener('click', function (e) {
    state === 'on' ? stop() : play();
});

document.getElementById('speed-inc').addEventListener('click', e => {
    if (animationDuration >= 5) return;
    play(++animationDuration);
    speedValue.innerText = animationDuration;
});

document.getElementById('speed-dec').addEventListener('click', e => {
    if (animationDuration <= 1) return;
    play(--animationDuration);
    speedValue.innerText = animationDuration;
});

function play(duration = animationDuration) {
    lights.forEach(light => {
        const color = light.getAttribute('data-color');
        light.style.backgroundColor = `hsl(${color} 100% 50%`;
        light.style.animationPlayState = 'running';
        light.style.animationDuration = `${0.3 * duration}s`;
        light.style.boxShadow = `0px 0px 20px 5px hsl(${color} 100% 50%)`;
    });
    state = 'on';
    toggleBtn.className = `btn btn-toggle-${state}`;
}

function stop() {
    lights.forEach(light => {
        light.style.backgroundColor = 'hsl(0 0 50%)';
        light.style.boxShadow = 'none';
        light.style.animationPlayState = 'paused';
    });
    state = 'off';
    toggleBtn.className = `btn btn-toggle-${state}`;
}

