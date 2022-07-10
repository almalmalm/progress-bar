const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const buttons = document.querySelectorAll('button');
const firstCircle = {
    circle: document.getElementById(1),
    status: 'active',
}
const secondCircle = {
    circle: document.getElementById(2),
    status: 'inactive',
}
const thirdCircle = {
    circle: document.getElementById(3),
    status: 'inactive',
}
const fourthCircle = {
    circle: document.getElementById(4),
    status: 'inactive',
}
const prev = {
    button: document.querySelector('.prev'),
    status: 'inactive',
}
const next = {
    button: document.querySelector('.next'),
    status: 'active',
}

let counter = 1;

document.getElementById('1').classList.add('active');


const handleClick = (event) => {
    console.log(event.target);
    if (event.target === next.button) {
        counter++;
    }else if (event.target === prev.button) {
        counter--;
    }

    if (counter < 1) {
        counter = 1;
    } else if (counter > 4) {
        counter = 4;
    }

    switch (counter) {
        case 1 :
            document.getElementById('2').classList.remove('active');
            document.querySelector('.first').classList.remove('active');
            prev.button.classList.remove('active-background');
            break;
        case 2:
            document.getElementById('2').classList.add('active');
            document.getElementById('3').classList.remove('active');
            document.querySelector('.first').classList.add('active');
            document.querySelector('.second').classList.remove('active');
            prev.button.classList.add('active-background');
            break;
        case 3:
            document.getElementById('3').classList.add('active');
            document.getElementById('4').classList.remove('active');
            document.querySelector('.second').classList.add('active');
            document.querySelector('.third').classList.remove('active');
            next.button.classList.add('active-background');
            break;
        case 4:
            document.getElementById('4').classList.add('active');
            document.querySelector('.third').classList.add('active');
            next.button.classList.remove('active-background');
            break;
    }
};

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

if (next.status === 'active') {
    next.button.classList.add('active-background');
} else {
    next.button.classList.remove('active-background');
}

if (prev.status === 'active') {
    prev.button.classList.add('active-background');
    prev.button.classList.remove('active-background');
}