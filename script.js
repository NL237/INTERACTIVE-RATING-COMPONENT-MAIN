const btnfils = document.querySelectorAll('.btn');
let valeur = null;

btnfils.forEach(function(btn) {
btn.addEventListener('click', function() {
    valeur = this.innerHTML;
    document.getElementsByTagName('button')[5].addEventListener('click', function() {
        document.getElementById('rating').style.display = 'none';
        document.getElementById('thankyou').style.display = 'block';
        document.getElementsByClassName('ratingchoice')[0].innerHTML = valeur;
    });
});
});   

