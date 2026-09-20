const inputTL = document.getElementById('input-border-tl');
const inputTR = document.getElementById('input-border-tr');
const inputBR = document.getElementById('input-border-br');
const inputBL = document.getElementById('input-border-bl');
const form = document.getElementById('form');
const model = document.getElementById('model');

document.querySelectorAll('input[type="radio"].radio-unity').forEach(input => {
    input.addEventListener('change', e => render());
});

document.getElementById('html-copy').addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    copy(document.getElementById('html-code'), document.getElementById('html-copy-alert'));
});

document.getElementById('css-copy').addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    copy(document.getElementById('css-code'), document.getElementById('css-copy-alert'));
});

function toCssUnity(value, unity) {
    unity = unity === 'percent' ? '%' : unity;
    return `${parseInt(value)}${unity}`;
}

function render() {
    model.style.borderTopLeftRadius = toCssUnity(inputTL.value, form.unity_tl.value);
    model.style.borderTopRightRadius = toCssUnity(inputTR.value, form.unity_tr.value);
    model.style.borderBottomRightRadius = toCssUnity(inputBR.value, form.unity_br.value);
    model.style.borderBottomLeftRadius = toCssUnity(inputBL.value, form.unity_bl.value);
    renderCss();
}

function renderCss() {
    document.getElementById('css-code').innerHTML = `
.rectangle {
    border-radius: ${model.style.borderTopLeftRadius} ${model.style.borderTopRightRadius} ${model.style.borderBottomRightRadius} ${model.style.borderBottomLeftRadius};
}
`.trim();
}

function copy(element, alert) {
    navigator.clipboard.writeText(element.value);
    alert.hidden = false;
    setTimeout(() => {
        alert.hidden = true;
    }, 3000);
}

inputTL.addEventListener('change', render);
inputTR.addEventListener('change', render);
inputBR.addEventListener('change', render);
inputBL.addEventListener('change', render);

window.addEventListener('load', render);