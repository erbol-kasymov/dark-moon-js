let tog = document.getElementById('dark');
let body = document.querySelector('body');
let h = document.querySelector('h1');

let s ='Доброе утро';
let m = 'Добрый вечер';

tog.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness')) {
        body.style.backgroundColor = 'rgb(44, 40, 40)';
        body.style.color = 'white';
        body.style.transition = '3s';
        h.innerHTML = m;
    } else{
        body.style.backgroundColor = 'rgb(247, 247,151)';
        body.style.color = 'black';
        body.style.transition = '3s';
        h.innerHTML = s;
    }   
});