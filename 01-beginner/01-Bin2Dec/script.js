const inputDec = document.getElementById('input-dec');
const inputBin = document.getElementById('input-bin');
const inputOct = document.getElementById('input-oct');
const inputHex = document.getElementById('input-hex');
const allInputs = document.querySelectorAll('input');

const conversor = {

    decToBin(dec) {
        dec = parseInt(dec);
        let bin = '';
        do {
            const r = dec % 2;
            dec = Math.floor(dec / 2);
            bin = r.toString().concat(bin);
        } while (dec > 0);
        return bin;
    },

    decToOct(dec) {
        dec = parseInt(dec);
        let oct = '';
        do {
            const r = dec % 8;
            dec = Math.floor(dec / 8);
            oct = r.toString().concat(oct);
        } while (dec > 0);
        return oct;
    },

    decToHex(dec) {
        dec = parseInt(dec);
        let hex = '';
        do {
            const r = dec % 16;
            dec = Math.floor(dec / 16);
            hex = numberToHex(r).concat(hex);
        } while (dec > 0);
        return hex;
    },

    binToDec(bin) {
        let exp = 0;
        let i = bin.length - 1;
        let dec = 0;
        while (i >= 0) {
            dec += parseInt(bin.charAt(i)) * Math.pow(2, exp);
            i--;
            exp++;
        }
        return dec;
    },

    octToDec(oct) {
        let exp = 0;
        let i = oct.length - 1;
        let dec = 0;
        while (i >= 0) {
            dec += parseInt(oct.charAt(i)) * Math.pow(8, exp);
            i--;
            exp++;
        }
        return dec;
    },

    hexToDec(hex) {
        let exp = 0;
        let i = hex.length - 1;
        let dec = 0;
        while (i >= 0) {
            dec += parseInt(hexToNumber(hex.charAt(i))) * Math.pow(16, exp);
            i--;
            exp++;
        }
        return dec;
    }
}

function clearAllInputs() {
    allInputs.forEach(input => {
        input.value = '';
    });
}

function alertInvalidDigit(input) {
    input.classList.add('invalid');
    setTimeout(() => {
        input.classList.remove('invalid');
    }, 200);
}

function hexToNumber(h) {
    switch (h) {
        case '0': return 0;
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
        case 'A': case 'a': return 10;
        case 'B': case 'b': return 11;
        case 'C': case 'c': return 12;
        case 'D': case 'd': return 13;
        case 'E': case 'e': return 14;
        case 'F': case 'f': return 15;
    }
}

function numberToHex(n) {
    switch (n) {
        case 0: return '0';
        case 1: return '1';
        case 2: return '2';
        case 3: return '3';
        case 4: return '4';
        case 5: return '5';
        case 6: return '6';
        case 7: return '7';
        case 8: return '8';
        case 9: return '9';
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
    }
}

inputDec.addEventListener('beforeinput', e => {
    if (e.data < '0' || e.data > '9') {
        e.preventDefault();
        alertInvalidDigit(inputDec);
        return;
    }
});

inputDec.addEventListener('input', (e) => {
    const dec = parseInt(inputDec.value.trim());
    if (!dec) {
        clearAllInputs();
        return;
    }
    inputDec.value = dec;
    inputBin.value = conversor.decToBin(dec);
    inputOct.value = conversor.decToOct(dec);
    inputHex.value = conversor.decToHex(dec);
});

inputBin.addEventListener('beforeinput', e => {
    if (e.data < '0' || e.data > '1') {
        e.preventDefault();
        alertInvalidDigit(inputBin);
        return;
    }
});

inputBin.addEventListener('input', e => {
    const bin = inputBin.value.trim();
    if (!bin) {
        clearAllInputs();
        return;
    }
    const dec = conversor.binToDec(bin);
    inputDec.value = dec;
    inputOct.value = conversor.decToOct(dec);
    inputHex.value = conversor.decToHex(dec);
});

inputOct.addEventListener('beforeinput', e => {
    if (e.data < '0' || e.data > '7') {
        e.preventDefault();
        alertInvalidDigit(inputOct);
        return;
    }
});

inputOct.addEventListener('input', e => {
    const oct = inputOct.value.trim();
    if (!oct) {
        clearAllInputs();
        return;
    }
    const dec = conversor.octToDec(oct);
    inputDec.value = dec;
    inputBin.value = conversor.decToBin(dec);
    inputHex.value = conversor.decToHex(dec);
});

inputHex.addEventListener('beforeinput', e => {
    const key = typeof e.data === 'string' ? e.data.toUpperCase() : null;
    console.log(key);
    if ((key < '0' || key > '9') && ((key < 'A' || key > 'F'))) {
        e.preventDefault();
        alertInvalidDigit(inputHex);
        return;
    }
});

inputHex.addEventListener('input', e => {
    const hex = inputHex.value.trim();
    if (!hex) {
        clearAllInputs();
        return;
    }
    const dec = conversor.hexToDec(hex);
    inputDec.value = dec;
    inputBin.value = conversor.decToBin(dec);
    inputOct.value = conversor.decToOct(dec);
});