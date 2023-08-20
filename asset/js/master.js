let num1 = ''
let num2 = ''
let operation = ''
let LEDnum = ''
let clickSound
let sum = '0'
let m = 1
let n = 1

function _click(x) {
    x.children[0].innerHTML
    LEDnum += x.children[0].innerHTML
    if (m < 16) {
        document.getElementById('mainLED').innerHTML = LEDnum;
        m++
    } else {
        document.getElementById('mainLED').innerHTML = '*****ERROR*****';
        setTimeout(() => {
            alert('reminder: You can only enter up to 15 character!!')
            document.getElementById('mainLED').innerHTML = '0';
        }, 500);
        m = 1
        LEDnum = ""
    }

    if (n == 1) {
        num1 = parseFloat(LEDnum)
    } else {
        num2 = parseFloat(LEDnum)
    }

    clickSound = document.getElementById('_audio')
    clickSound.play()
}

function _click_op(op) {
    document.getElementById('mainLED').innerHTML = '0';
    LEDnum = ""
    operation = op.children[0].innerHTML
    n = 2
    clickSound = document.getElementById('_audio')
    clickSound.play()
}

function _click_re() {
    document.getElementById('mainLED').innerHTML = '0';
    switch (operation) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '×':
            sum = num1 * num2;
            break;
        case '÷':
            sum = num1 / num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
    }
    document.getElementById('mainLED').innerHTML = sum;
    num1 = sum
    clickSound = document.getElementById('_audio')
    clickSound.play()
}

function _reset() {
    document.getElementById('mainLED').innerHTML = '0';
    num1 = ''
    num2 = ''
    operation = ''
    LEDnum = ''
    n = 1
    clickSound = document.getElementById('_audio')
    clickSound.play()
}

function _update() {
    alert('This feature will be added in the next update.')
    clickSound = document.getElementById('_audio')
    clickSound.play()
}