const toggle = document.querySelector('#toggle');

let dark = true;

toggle.addEventListener('click', () => {
    if(dark) {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, hsl(225, 100%, 98%), hsl(0, 0%, 100%))';
        document.querySelector('h1').style.color = '#000';
        document.querySelector('h2').style.color = '#000';
        document.querySelector('h3').style.color = '#000';
        const element = document.querySelectorAll('strong');
        for (let index = 0 ; index < element.length ; index++) {
            element[index].style.color = '#000';
        }
        const card = document.querySelectorAll('.box');
        for (let index = 0 ; index < card.length ; index++) {
            card[index].style.backgroundColor = 'hsl(227, 47%, 96%)';
        }
        dark = false;
    } else {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, hsl(232, 19%, 15%), hsl(230, 17%, 14%))';
        document.querySelector('h1').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('h2').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('h3').style.color = 'hsl(0, 0%, 100%)';
        const element = document.querySelectorAll('strong');
        for (let index = 0 ; index < element.length ; index++) {
            element[index].style.color = 'hsl(0, 0%, 100%)';
        }
        const card = document.querySelectorAll('.box');
        for (let index = 0 ; index < card.length ; index++) {
            card[index].style.backgroundColor = 'hsl(228, 28%, 20%)';
        }
        dark = true;
    }
});